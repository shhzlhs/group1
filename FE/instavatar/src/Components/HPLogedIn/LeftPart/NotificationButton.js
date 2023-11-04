import React from "react";
import { Button } from "reactstrap";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { showNosModal } from "../../../Redux/Actions/ModalActions";
function NotificationButton(props) {
  let dispatch = useDispatch();
  let nos = useSelector((state) => state.notifications);
  let nos1 = nos ? nos.filter((no) => no.isRead === "N") : [];
  let number =
    nos1 && nos1.length > 0 && nos1.length < 100 ? (
      <b className="No">{nos1.length}</b>
    ) : nos1 && nos1.length > 99 ? (
      <b className="No">{`${nos1.length}+`}</b>
    ) : null;
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img
          className="Icon"
          src="/imgs/icons/Notification.png"
          alt="Thông báo"
        />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            dispatch(showNosModal());
          }}
          id="MenuButton"
        >
          {" "}
          <h3> Thông báo {number}</h3>
        </Button>
      </div>
    </div>
  );
}

export default NotificationButton;
