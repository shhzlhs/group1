import React from "react";
import "./LeftPartLogedIn.css";
import InstavatarLogo from "../../InstavatarLogo";
import HomeButtonLogedIn from "./HomeButtonLogedIn";
import NotificationButton from "./NotificationButton";
import NotificationModal from "../RightPartLogedIn/NotificationModal";
import DelNoModal from "../RightPartLogedIn/DelNoModal";
import MessageButton from "./MessageButton";
import ReportModal from "../RightPartLogedIn/ReportModal";
import { useSelector } from "react-redux";
import AdminButton from "./AdminButton";
import CreateReportConfirmModal from "../RightPartLogedIn/CreateReportConfirmModal";
import StoreButton from "./StoreButton";
import ItemsButton from "./ItemsButton";
import SearchButton from "./SearchButton";
import SettingButton from "./SettingButton";
import DeleteUserItemModal from "../RightPartLogedIn/DeleteUserItemModal";
import GameButton from "./GameButton";
import MoneyButton from "./MoneyButton";
import ConfirmGiveModal from "../RightPartLogedIn/StorePage/BuyOrGive/Give/ConfirmGiveModal";
import GiveItemModal from "../RightPartLogedIn/Message/MessagesArea/GiveItemModal";
function LeftPartLogedIn(props) {
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let adminButton =
    userLogedIn && userLogedIn.role === "ADMIN" ? <AdminButton /> : null;
  return (
    <div id="LeftPartLogedIn" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <InstavatarLogo />
      <HomeButtonLogedIn />
      <SearchButton />
      <NotificationButton />
      <MessageButton />
      <ItemsButton />
      <StoreButton />
      <GameButton />
      <MoneyButton />
      {adminButton}
      <SettingButton />

      <NotificationModal />
      <DelNoModal />
      <ReportModal />
      <CreateReportConfirmModal />
      <DeleteUserItemModal />
      <ConfirmGiveModal />
      <GiveItemModal />
    </div>
  );
}

export default LeftPartLogedIn;
