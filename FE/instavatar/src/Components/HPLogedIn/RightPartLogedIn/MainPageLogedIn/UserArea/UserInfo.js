import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserArea.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { setUserToShowItemsAction } from "../../../../../Redux/Actions/UserActions";
function UserInfo(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let avatar = userLogedIn ? `/imgs/avatars/${userLogedIn.avatar}` : "";
  return (
    <div>
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Link to={`/instavatar/logedIn/user/${userLogedIn.username}`}>
            {" "}
            <img
              className="BigAvatar"
              src={avatar}
              alt={userLogedIn.username}
            ></img>
          </Link>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="row">
            <Link to={`/instavatar/logedIn/user/${userLogedIn.username}`}>
              <b>{userLogedIn.username}</b>
            </Link>
          </div>

          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="MiniIcon" src="/imgs/icons/coin.png"></img>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {userLogedIn.coin}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="MiniIcon" src="/imgs/icons/gold.png"></img>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {userLogedIn.gold}
            </div>
          </div>
        </div>

        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <br></br>
          <div className="row">
            <Button
              id="AddButton"
              onClick={() => {
                dispatch(setUserToShowItemsAction(userLogedIn.username));
                navigate("/instavatar/logedIn/addCoin");
              }}
            >
              <img
                className="MiniIcon"
                src="/imgs/icons/add.png"
                alt="Add Coin"
              ></img>
            </Button>
          </div>
          <div className="row">
            <Button
              id="AddButton"
              onClick={() => {
                dispatch(setUserToShowItemsAction(userLogedIn.username));
                navigate("/instavatar/logedIn/addCoin");
              }}
            >
              <img
                className="MiniIcon"
                src="/imgs/icons/add.png"
                alt="Add Gold"
              ></img>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
