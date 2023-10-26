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
    nos1 && nos1.length > 0 ? <b className="No">{nos1.length}</b> : null;
  console.log("Number", number);
  return (
    <div className="row">
      <Button
        onClick={() => {
          dispatch(showNosModal());
        }}
        id="MenuButton"
      >
        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <img
              className="Icon"
              src="/imgs/icons/Notification.png"
              alt="Thông báo"
            />
          </div>

          <div id="MenuTitle" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3>Thông báo {number}</h3>
          </div>
        </div>
      </Button>
    </div>
  );
}

export default NotificationButton;
