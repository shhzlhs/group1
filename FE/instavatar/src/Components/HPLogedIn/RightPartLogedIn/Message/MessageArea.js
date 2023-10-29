import React from "react";
import "./MessageArea.css";
import InfoBar from "./MessagesArea/InfoBar";
import BoxToShowAndWriteMessages from "./MessagesArea/BoxToShowAndWriteMessages";
function MessageArea(props) {
  return (
    <div id="MessageArea" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <InfoBar />
      <BoxToShowAndWriteMessages />
    </div>
  );
}

export default MessageArea;
