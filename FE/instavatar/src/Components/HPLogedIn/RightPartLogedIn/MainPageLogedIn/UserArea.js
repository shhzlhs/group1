import React from "react";
import UserInfo from "./UserArea/UserInfo";
import LogOutButton from "./UserArea/LogOutButton";
import Sugguets from "./UserArea/Sugguets";

function UserArea(props) {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="row">
        <UserInfo />
        <LogOutButton />
      </div>
      <Sugguets />
    </div>
  );
}

export default UserArea;
