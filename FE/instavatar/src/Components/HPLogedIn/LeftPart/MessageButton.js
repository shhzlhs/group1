import React, { useEffect } from "react";
import "./Menu.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCoversationDetail } from "../../../Redux/Actions/ConversationAction";
import "./Menu.css";
import { getNumberOfNotReadYetMessage } from "../../../Redux/Actions/MessageActions";
function MessageButton(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userLogedIn = useSelector((state) => state.userLogedIn);

  useEffect(() => {
    if (userLogedIn) {
      dispatch(getNumberOfNotReadYetMessage(userLogedIn.id));
    }
  }, []);
  let number = useSelector((state) => state.numberOfNotRead);
  let numberShow = number !== 0 ? <b className="No">{number}</b> : null;
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
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
          <h3> Tin nhắn {numberShow}</h3>
        </Button>
      </div>
    </div>
  );
}

export default MessageButton;
