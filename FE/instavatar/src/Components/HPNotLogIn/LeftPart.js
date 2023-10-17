import React from "react";
import InstavatarLogo from "./LeftPart/InstavatarLogo";
import MenuNotLogIn from "./LeftPart/MenuNotLogIn";
import "./LeftPart.css";
function LeftPart(props) {
  return (
    <div id="LeftPart" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <InstavatarLogo />
      <MenuNotLogIn />
    </div>
  );
}

export default LeftPart;
