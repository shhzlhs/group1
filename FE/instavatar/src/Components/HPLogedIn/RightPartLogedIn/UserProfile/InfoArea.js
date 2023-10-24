import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserProfile.css";
import { Button } from "reactstrap";
import { addFollowAPI, unFollowAPI } from "../../../../API/FollowAPI";
import {
  setUserDetail,
  setUserLogedIn,
} from "../../../../Redux/Actions/UserActions";
import { getUserByUsernameAPI } from "../../../../API/UserAPI";
import {
  showFollowingsListModal,
  showFollowsListModal,
} from "../../../../Redux/Actions/ModalActions";
import FollowsListModal from "../FollowsListModal";
import FollowingsListModal from "../FollowingsListModal";
function InfoArea(props) {
  let dispatch = useDispatch();
  let userDetail = useSelector((state) => state.userDetail);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let following = userLogedIn.followings.find(
    (user) => user.username === userDetail.username
  );
  let buttonText = following ? "Bỏ follow" : "Follow";
  let followUnfollow = () => {
    if (following) {
      unFollowAPI(userLogedIn.id, userDetail.id).then(() => {
        getUserByUsernameAPI(userLogedIn.username).then((res) => {
          dispatch(setUserLogedIn(res));
        });

        dispatch(setUserDetail(userDetail.username));
      });
    } else {
      addFollowAPI({
        followerId: userLogedIn.id,
        followingId: userDetail.id,
      }).then(() => {
        getUserByUsernameAPI(userLogedIn.username).then((res) => {
          dispatch(setUserLogedIn(res));
        });

        dispatch(setUserDetail(userDetail.username));
      });
    }
  };
  let text = () => {
    if (userDetail.posts) {
      if (userDetail.posts.length === 0) {
        return "Chưa có bài viết nào";
      } else return `Có ${userDetail.posts.length} bài viết`;
    }
  };
  let text1 = () => {
    if (userDetail && userDetail.follows) {
      return `Có ${userDetail.follows.length} người theo dõi`;
    }
  };
  let text2 = () => {
    if (userDetail && userDetail.followings) {
      return `Đang theo dõi ${userDetail.followings.length} người khác`;
    }
  };
  return (
    <div id="InfoArea" className="row">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="row">
          <img
            className="HugeAvatar"
            alt={`${userDetail.username}`}
            src={`/imgs/avatars/${userDetail.avatar}`}
          ></img>
        </div>

        <div className="row">
          <br></br>
          <Button onClick={followUnfollow}>{buttonText}</Button>
        </div>
      </div>
      <div id="Info" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row">
          <h3>{userDetail.username}</h3>
        </div>
        <div className="row">
          <h4>{userDetail.fullName}</h4>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="MediumIcon"
              src="/imgs/icons/coin.png"
              alt="coin"
            ></img>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            {userDetail.coin}
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="MediumIcon"
              src="/imgs/icons/add.png"
              alt="add"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="MediumIcon"
              src="/imgs/icons/gold.png"
              alt="gold"
            ></img>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            {userDetail.gold}
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="MediumIcon"
              src="/imgs/icons/add.png"
              alt="add"
            ></img>
          </div>
        </div>

        <div className="row">
          <br></br>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">{text()}</div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Button
              onClick={() => {
                dispatch(showFollowsListModal());
              }}
            >
              {text1()}
            </Button>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Button
              onClick={() => {
                dispatch(showFollowingsListModal());
              }}
            >
              {text2()}
            </Button>
          </div>
        </div>
      </div>
      <FollowsListModal />
      <FollowingsListModal />
    </div>
  );
}

export default InfoArea;
