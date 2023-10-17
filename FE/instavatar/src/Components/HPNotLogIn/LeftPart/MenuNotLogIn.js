import React from "react";
import { Button } from "reactstrap";
import "./MenuNotLogIn.css";
import { Link } from "react-router-dom";
function MenuNotLogIn(props) {
  return (
    <div className="row">
      <Link to={"/main"}>
        <Button id="MenuButton">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img className="Icon" src="/imgs/icons/Home.png" alt="Home" />
            </div>

            <div id="MenuTitle" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h3>Home</h3>
            </div>
          </div>
        </Button>
      </Link>

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

export default MenuNotLogIn;
