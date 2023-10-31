import React from "react";
import "./Admin.css";
import { useSelector } from "react-redux";
import LogOutButton from "../MainPageLogedIn/UserArea/LogOutButton";
function AdminInfo(props) {
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let username = userLogedIn ? userLogedIn.username : null;
  let avatar = userLogedIn ? `/imgs/avatars/${userLogedIn.avatar}` : null;
  return (
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img className="AdminAvatar" src={avatar} alt={username} />
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="row">{username}</div>

          <div className="row">
            <br></br>
            <LogOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;
