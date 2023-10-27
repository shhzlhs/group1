import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
function HomeButtonLogedIn(props) {
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img className="Icon" src="/imgs/icons/Home.png" alt="Home" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Link to={"/instavatar/logedIn/main"}>
          {" "}
          <h3>Home</h3>
        </Link>
      </div>
    </div>
  );
}

export default HomeButtonLogedIn;
