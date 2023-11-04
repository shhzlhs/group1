import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { Button } from "reactstrap";
function HomeButtonLogedIn(props) {
  let navigate = useNavigate();
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img className="Icon" src="/imgs/icons/Home.png" alt="Home" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            navigate("/instavatar/logedIn/main");
          }}
          id="MenuButton"
        >
          {" "}
          <h3>Home</h3>
        </Button>
      </div>
    </div>
  );
}

export default HomeButtonLogedIn;
