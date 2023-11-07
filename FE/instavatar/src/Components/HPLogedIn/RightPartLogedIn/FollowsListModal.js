import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "./MainPageLogedIn.css";
import { useNavigate } from "react-router-dom";
import {
  closeFollowsListModal,
  showFollowsListModal,
} from "../../../Redux/Actions/ModalActions";
import { addFollowAPI, unFollowAPI } from "../../../API/FollowAPI";
import { getUserByUsernameAPI } from "../../../API/UserAPI";
import {
  setUserDetail,
  setUserLogedIn,
} from "../../../Redux/Actions/UserActions";
function FollowsListModal(props) {
  let navigate = useNavigate();
  let reduxStore = useSelector((state) => state);
  let dispatch = useDispatch();
  let userDetail = reduxStore.userDetail;
  let showFollows = useSelector((state) => state.showFollows);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let followings = userLogedIn ? userLogedIn.followings : [];

  let items =
    userDetail && userDetail.follows && userDetail.follows.length > 0
      ? userDetail.follows.map((follow, index) => {
          let fl = followings.find(
            (following) => following.username === follow.username
          );

          let textButton = () => {
            if (follow.username !== userLogedIn.username) {
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
              unFollowAPI(userLogedIn.id, follow.id).then(() => {
                getUserByUsernameAPI(userLogedIn.username).then((res) => {
                  dispatch(setUserLogedIn(res));
                  dispatch(setUserDetail(userDetail.username));
                  dispatch(showFollowsListModal());
                });
              });
            } else {
              addFollowAPI({
                followerId: userLogedIn.id,
                followingId: follow.id,
              }).then(() => {
                getUserByUsernameAPI(userLogedIn.username).then((res) => {
                  dispatch(setUserLogedIn(res));
                  dispatch(setUserDetail(userDetail.username));
                  dispatch(showFollowsListModal());
                });
              });
            }
          };
          let clickUser = (user) => {
            dispatch(closeFollowsListModal());
            navigate(`/instavatar/logedIn/user/${user.username}`);
          };
          return (
            <div key={index} className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Button
                  onClick={() => {
                    clickUser(follow);
                  }}
                  className="LinkToProfile"
                >
                  <img
                    className="FollowAvatar"
                    alt={follow.username}
                    src={`/imgs/avatars/${follow.avatar}`}
                  ></img>
                </Button>
              </div>

              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Button
                  onClick={() => {
                    clickUser(follow);
                  }}
                  className="LinkToProfile"
                >
                  {follow.username}
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
      : "Chưa có người theo dõi";
  return (
    <Modal isOpen={showFollows} fade={false}>
      <ModalHeader id="mid">Danh sách người theo dõi</ModalHeader>
      <ModalBody className="ModalBody">{items}</ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            dispatch(closeFollowsListModal());
          }}
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default FollowsListModal;
