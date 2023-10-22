import React from "react";
import "./MenuNotLogIn.css";
import { Button } from "reactstrap";
function SettingButton(props) {
  return (
    <div className="row">
      <Button id="MenuButton">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img className="Icon" src="/imgs/icons/Setting.png" alt="Home" />
          </div>

          <div id="MenuTitle" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3>Cài đặt</h3>
          </div>
        </div>
      </Button>
    </div>
  );
}

export default SettingButton;
