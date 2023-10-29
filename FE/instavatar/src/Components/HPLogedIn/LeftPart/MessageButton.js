import React, { useEffect, useState } from "react";
import "./Menu.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCoversationDetail } from "../../../Redux/Actions/ConversationAction";
import { getNumberOfNotReadYetMessagesByUserIdAPI } from "../../../API/MessageAPI";
import "./Menu.css";
function MessageButton(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let convesation = useSelector((state) => state.convesationDetail);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let [number, setNumber] = useState(0);
  useEffect(() => {
    if (userLogedIn) {
      getNumberOfNotReadYetMessagesByUserIdAPI(userLogedIn.id).then(
        (res) => {
          setNumber(res);
        },
        [userLogedIn, convesation]
      );
    }
  });
  let numberShow = number !== 0 ? <b className="No">{number}</b> : null;
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
          <h3> Tin nhắn {numberShow}</h3>
        </Button>
      </div>
    </div>
  );
}

export default MessageButton;
