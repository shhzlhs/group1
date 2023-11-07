import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  closeFollowingsListModal,
  showFollowingsListModal,
} from "../../../Redux/Actions/ModalActions";
import { useNavigate } from "react-router-dom";
import {
  setUserDetail,
  setUserLogedIn,
} from "../../../Redux/Actions/UserActions";
import "./MainPageLogedIn.css";
import { getUserByUsernameAPI } from "../../../API/UserAPI";
import { addFollowAPI, unFollowAPI } from "../../../API/FollowAPI";
function FollowingsListModal(props) {
  let navigate = useNavigate();
  let reduxStore = useSelector((state) => state);
  let dispatch = useDispatch();
  let userLogedIn = reduxStore.userLogedIn;
  let userDetail = reduxStore.userDetail;
  let showFollowings = reduxStore.showFollowings;
  let followings = userLogedIn ? userLogedIn.followings : [];
  let clickUser = (user) => {
    dispatch(closeFollowingsListModal());
    navigate(`/instavatar/logedIn/user/${user.username}`);
  };
  let items =
    userDetail && userDetail.followings && userDetail.followings.length > 0
      ? userDetail.followings.map((following, index) => {
          let fl = followings.find(
            (fllg) => following.username === fllg.username
          );

          let textButton = () => {
            if (following.username !== userLogedIn.username) {
              if (fl) {
                return { text: "Bỏ theo dõi", color: "red" };
              } else {
                return { text: "Theo dõi", color: "blue" };
              }
            } else {
              return { text: "", color: "none" };
            }
          };
          let followUnfollow = () => {
            if (fl) {
              unFollowAPI(userLogedIn.id, following.id).then(() => {
                getUserByUsernameAPI(userLogedIn.username).then((res) => {
                  dispatch(setUserLogedIn(res));
                  dispatch(setUserDetail(userDetail.username));
                  dispatch(showFollowingsListModal());
                });
              });
            } else {
              addFollowAPI({
                followerId: userLogedIn.id,
                followingId: following.id,
              }).then(() => {
                getUserByUsernameAPI(userLogedIn.username).then((res) => {
                  dispatch(setUserLogedIn(res));
                  dispatch(setUserDetail(userDetail.username));
                  dispatch(showFollowingsListModal());
                });
              });
            }
          };
          return (
            <div key={index} className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Button
                  onClick={() => {
                    clickUser(following);
                  }}
                  className="LinkToProfile"
                >
                  <img
                    className="FollowAvatar"
                    alt={following.username}
                    src={`/imgs/avatars/${following.avatar}`}
                  ></img>
                </Button>
              </div>

              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Button
                  onClick={() => {
                    clickUser(following);
                  }}
                  className="LinkToProfile"
                >
                  {following.username}
                </Button>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>

              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Button
                  onClick={() => {
                    followUnfollow();
                  }}
                  style={{ background: "none", color: textButton().color }}
                >
                  {textButton().text}
                </Button>
              </div>
            </div>
          );
        })
      : "Chưa theo dõi người nào";

  return (
    <Modal isOpen={showFollowings} fade={false}>
      <ModalHeader id="mid">
        Đang theo dõi
        <ModalBody className="ModalBody">{items}</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              dispatch(closeFollowingsListModal());
            }}
          >
            Đóng
          </Button>
        </ModalFooter>
      </ModalHeader>
    </Modal>
  );
}

export default FollowingsListModal;
