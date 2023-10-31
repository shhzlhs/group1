import React from "react";
import "./LeftPartLogedIn.css";
import InstavatarLogo from "../../InstavatarLogo";
import HomeButtonLogedIn from "./HomeButtonLogedIn";
import "./LeftPartLogedIn.css";
import NotificationButton from "./NotificationButton";
import NotificationModal from "../RightPartLogedIn/NotificationModal";
import DelNoModal from "../RightPartLogedIn/DelNoModal";
import MessageButton from "./MessageButton";
import ReportModal from "../RightPartLogedIn/ReportModal";
import { useSelector } from "react-redux";
import AdminButton from "./AdminButton";
import CreateReportConfirmModal from "../RightPartLogedIn/CreateReportConfirmModal";
import StoreButton from "./StoreButton";
function LeftPartLogedIn(props) {
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let adminButton =
    userLogedIn && userLogedIn.role === "ADMIN" ? <AdminButton /> : null;
  return (
    <div id="LeftPartLogedIn" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <InstavatarLogo />
      <HomeButtonLogedIn />
      <NotificationButton />
      <MessageButton />
      <StoreButton />
      {adminButton}

      <NotificationModal />
      <DelNoModal />
      <ReportModal />
      <CreateReportConfirmModal />
    </div>
  );
}

export default LeftPartLogedIn;
