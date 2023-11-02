import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { Button } from "reactstrap";
function MoneyButton(props) {
  let navigate = useNavigate();
  return (
    <div id="menu" className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img className="Icon" src="/imgs/icons/Money.png" alt="Money" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            navigate("/instavatar/logedIn/money");
          }}
          id="MenuButton"
        >
          {" "}
          <h3>Tiền tệ</h3>
        </Button>
      </div>
    </div>
  );
}

export default MoneyButton;
