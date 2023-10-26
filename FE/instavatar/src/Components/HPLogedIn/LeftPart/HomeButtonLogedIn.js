import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Menu.css";
function HomeButtonLogedIn(props) {
  return (
    <div className="row">
      <Link to={"/instavatar/logedIn/main"}>
        <Button id="MenuButton">
          <div className="row">
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
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

export default HomeButtonLogedIn;
