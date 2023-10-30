import React, { useEffect } from "react";
import CoversationsList from "./Message/CoversationsList";
import MessageArea from "./Message/MessageArea";
import "./MainPageLogedIn.css";
import DelConModal from "./DelConModal";
import DelConComfirmModal from "./DelConComfirmModal";
function MessagePage(props) {
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <CoversationsList />
        <MessageArea />
        <DelConModal />
        <DelConComfirmModal />
      </div>
    </div>
  );
}

export default MessagePage;
