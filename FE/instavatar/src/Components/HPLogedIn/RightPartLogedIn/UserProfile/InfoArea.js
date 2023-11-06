import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserProfile.css";
import { Button } from "reactstrap";
import { addFollowAPI, unFollowAPI } from "../../../../API/FollowAPI";
import {
  setUserDetail,
  setUserLogedIn,
  setUserToShowItemsAction,
} from "../../../../Redux/Actions/UserActions";
import { getUserByUsernameAPI } from "../../../../API/UserAPI";
import {
  showEditProfileModal,
  showFollowingsListModal,
  showFollowsListModal,
  showReportModalAction,
} from "../../../../Redux/Actions/ModalActions";
import FollowsListModal from "../FollowsListModal";
import FollowingsListModal from "../FollowingsListModal";
import LogOutButton from "../MainPageLogedIn/UserArea/LogOutButton";
import { setUserReportAction } from "../../../../Redux/Actions/ReportAction";
import { useNavigate } from "react-router-dom";
import { setUserItemDetail } from "../../../../Redux/Actions/UserItemActions";
import { defaultItem } from "../../../../Defaults";
import EditProfileModal from "./EditProfileModal";
function InfoArea(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userDetail = useSelector((state) => state.userDetail);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let following = userLogedIn.followings.find(
    (user) => user.username === userDetail.username
  );
  let buttonText = following ? "Bỏ theo dõi" : "Theo dõi";
  let id = following ? "UnFollow" : "Follow";
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
  let report = () => {
    dispatch(setUserReportAction(userDetail));
    dispatch(showReportModalAction());
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
  let button = () => {
    if (userDetail.username === userLogedIn.username) {
      return (
        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Button
              onClick={() => {
                dispatch(showEditProfileModal());
              }}
              color="primary"
            >
              Chỉnh sửa trang cá nhân
            </Button>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LogOutButton />
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Button onClick={report} color="danger">
              Báo cáo
            </Button>
          </div>
        </div>
      );
    }
  };
  let followButton = () => {
    if (userDetail && userDetail.username !== userLogedIn.username) {
      return (
        <Button id={id} onClick={followUnfollow}>
          {buttonText}
        </Button>
      );
    }
  };
  let genderIcon = () => {
    if (userDetail) {
      switch (userDetail.gender) {
        case "MALE":
          return "MALE.png";
        case "FEMALE":
          return "FEMALE.png";
        case "OTHER":
          return "OTHER.png";
        default:
          return "UN_KNOWN.png";
      }
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
        <br></br>
        {followButton()}
        <div className="row">
          <Button
            onClick={() => {
              dispatch(setUserItemDetail(defaultItem));
              navigate(`/instavatar/logedIn/userItems/${userDetail.username}`);
            }}
            color="primary"
          >
            Xem kho đồ
          </Button>
        </div>
      </div>
      <div id="Info" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h3>{userDetail.username}</h3>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="MediumIcon"
              alt={userDetail.gender}
              src={`/imgs/icons/${genderIcon()}`}
            ></img>
          </div>

          {button()}
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h4>{userDetail.fullName}</h4>
          </div>
        </div>
        <div id="midRow" className="row">
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
          <div
            hidden={userLogedIn.id !== userDetail.id}
            className="col-xs-1 col-sm-1 col-md-1 col-lg-1"
          >
            <Button
              onClick={() => {
                dispatch(setUserToShowItemsAction(userLogedIn.username));
                navigate("/instavatar/logedIn/addCoin");
              }}
              id="ADDButton"
            >
              <img
                className="MediumIcon"
                src="/imgs/icons/add.png"
                alt="add"
              ></img>
            </Button>
          </div>
        </div>
        <div id="midRow" className="row">
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
          <div
            hidden={userLogedIn.id !== userDetail.id}
            className="col-xs-1 col-sm-1 col-md-1 col-lg-1"
          >
            <Button
              onClick={() => {
                dispatch(setUserToShowItemsAction(userLogedIn.username));
                navigate("/instavatar/logedIn/addCoin");
              }}
              id="ADDButton"
            >
              <img
                className="MediumIcon"
                src="/imgs/icons/add.png"
                alt="add"
              ></img>
            </Button>
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
      <EditProfileModal />
    </div>
  );
}

export default InfoArea;
