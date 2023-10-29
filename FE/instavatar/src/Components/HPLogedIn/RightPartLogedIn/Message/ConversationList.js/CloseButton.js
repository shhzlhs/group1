import React from "react";
import { Button } from "reactstrap";
import "./ConversationList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  hideConversationSearch,
  setInputToSearchUserForWriteNewMessage,
} from "../../../../../Redux/Actions/ConversationAction";
function CloseButton(props) {
  let hideSearch = useSelector((state) => state.hideConversationSearch);
  let dispatch = useDispatch();
  let close = () => {
    dispatch(hideConversationSearch());
    dispatch(setInputToSearchUserForWriteNewMessage(""));
  };
  return (
    <div hidden={hideSearch} className="row">
      <div className="col-xs-10 col-sm-101 col-md-10 col-lg-10"></div>

      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button onClick={close} id="button">
          <img
            alt="Close"
            src="/imgs/icons/Close.png"
            className="CloseButton"
          ></img>
        </Button>
      </div>
    </div>
  );
}

export default CloseButton;
