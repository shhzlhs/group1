import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./MainPageLogedIn.css";
import { addFollowAPI, unFollowAPI } from "../../../API/FollowAPI";
import { getUserByUsernameAPI } from "../../../API/UserAPI";
import { setUserLogedIn } from "../../../Redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";
import {
  closePostLikesModal,
  showPostLikesModal,
} from "../../../Redux/Actions/ModalActions";
import { getPostById } from "../../../Redux/Actions/PostAction";
function PostLikesModal(props) {
  let navigate = useNavigate();
  let post = useSelector((state) => state.postDetail);
  let dispatch = useDispatch();
  let showPostLikes = useSelector((state) => state.showPostLikes);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let followings = userLogedIn ? userLogedIn.followings : [];
  let likes = post ? post.likes : [];
  let users = useSelector((state) => state.users);
  let clickUser = (like) => {
    dispatch(closePostLikesModal());
    navigate(`/instavatar/logedIn/user/${like.userUsername}`);
  };
  let items =
    likes && likes && likes.length > 0
      ? likes.map((like, index) => {
          let fl = followings.find(
            (fllg) => like.userUsername === fllg.username
          );

          let textButton = () => {
            if (like.userUsername !== userLogedIn.username) {
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
            let user = users
              ? users.find((user) => user.username === like.userUsername)
              : {};
            if (fl) {
              unFollowAPI(userLogedIn.id, user.id).then(() => {
                getUserByUsernameAPI(userLogedIn.username).then((res) => {
                  dispatch(setUserLogedIn(res));
                  dispatch(getPostById(post.id));
                  dispatch(showPostLikesModal());
                });
              });
            } else {
              addFollowAPI({
                followerId: userLogedIn.id,
                followingId: user.id,
              }).then(() => {
                getUserByUsernameAPI(userLogedIn.username).then((res) => {
                  dispatch(setUserLogedIn(res));
                  dispatch(showPostLikesModal());
                });
              });
            }
          };
          return (
            <div key={index} className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Button
                  onClick={() => {
                    clickUser(like);
                  }}
                  className="LinkToProfile"
                >
                  <img
                    className="FollowAvatar"
                    alt={like.userUsername}
                    src={`/imgs/avatars/${like.userAvatar}`}
                  ></img>
                </Button>
              </div>

              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Button
                  onClick={() => {
                    clickUser(like);
                  }}
                  className="LinkToProfile"
                >
                  {like.userUsername}
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
      : null;
  return (
    <Modal isOpen={showPostLikes} fade={false}>
      <ModalHeader id="mid">Lượt thích</ModalHeader>
      <ModalBody className="ModalBody">{items}</ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closePostLikesModal());
          }}
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default PostLikesModal;
