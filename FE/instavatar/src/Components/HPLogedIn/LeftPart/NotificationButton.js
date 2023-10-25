import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Menu.css";
function NotificationButton(props) {
  return (
    <div className="row">
      <Button id="MenuButton">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img
              className="Icon"
              src="/imgs/icons/Notification.png"
              alt="Thông báo"
            />
          </div>

          <div id="MenuTitle" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3>Thông báo</h3>
          </div>
        </div>
      </Button>
    </div>
  );
}

export default NotificationButton;
