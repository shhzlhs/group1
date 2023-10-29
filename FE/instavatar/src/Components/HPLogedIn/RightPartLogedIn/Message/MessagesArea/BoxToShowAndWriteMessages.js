import React from "react";
import ShowMessages from "./ShowMessages";
import "./MessagesArea.css";
function BoxToShowAndWriteMessages(props) {
  return (
    <div className="MessBox">
      <ShowMessages />
    </div>
  );
}

export default BoxToShowAndWriteMessages;
