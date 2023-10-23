import React from "react";
import "./LeftPartLogedIn.css";
import InstavatarLogo from "../../InstavatarLogo";
import HomeButtonLogedIn from "./HomeButtonLogedIn";
import "./LeftPartLogedIn.css";
function LeftPartLogedIn(props) {
  return (
    <div id="LeftPartLogedIn" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <InstavatarLogo />
      <HomeButtonLogedIn />
    </div>
  );
}

export default LeftPartLogedIn;
