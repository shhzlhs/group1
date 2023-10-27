import React, { useEffect } from "react";
import "./LeftPartLogedIn.css";
import InstavatarLogo from "../../InstavatarLogo";
import HomeButtonLogedIn from "./HomeButtonLogedIn";
import "./LeftPartLogedIn.css";
import NotificationButton from "./NotificationButton";
import NotificationModal from "../RightPartLogedIn/NotificationModal";
import DelNoModal from "../RightPartLogedIn/DelNoModal";
function LeftPartLogedIn(props) {
  return (
    <div id="LeftPartLogedIn" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <InstavatarLogo />
      <HomeButtonLogedIn />
      <NotificationButton />
      <NotificationModal />
      <NotificationModal />
      <DelNoModal />
    </div>
  );
}

export default LeftPartLogedIn;
