import React from "react";
import "./MenuNotLogIn.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
function HomeButton(props) {
  return (
    <div  className="row">
      <Link to={"/instavatar/welcome/main"}>
        <Button id="MenuButton">
          <div  className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img className="Icon" src="/imgs/icons/Home.png" alt="Home" />
            </div>

            <div id="MenuTitle" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h3>Home</h3>
            </div>
          </div>
        </Button>
      </Link>
    </div>
  );
}

export default HomeButton;
