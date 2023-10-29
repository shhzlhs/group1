import React from "react";
import "./Menu.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCoversationDetail } from "../../../Redux/Actions/ConversationAction";
function MessageButton(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div id="menu" className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img className="Icon" src="/imgs/icons/Message.png" alt="Thông báo" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            dispatch(setCoversationDetail({}));
            navigate("/instavatar/logedIn/message");
          }}
          id="MenuButton"
        >
          {" "}
          <h3> Tin nhắn </h3>
        </Button>
      </div>
    </div>
  );
}

export default MessageButton;
