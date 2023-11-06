import React from "react";
import { Button } from "reactstrap";
import "./AddMoney.css";
import { Link, useNavigate } from "react-router-dom";
function Choices(props) {
  let navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="row">
          <Button
            onClick={() => {
              navigate("/instavatar/logedIn/addCoin");
            }}
            id="AddMoneyButton"
          >
            <img
              className="AddMoneyButton"
              alt="addCoin"
              src="/imgs/icons/coin.png"
            ></img>
          </Button>
        </div>

        <div id="middleText" className="row">
          <Link to={"/instavatar/logedIn/addCoin"}>
            <h3>Nạp Xu</h3>
          </Link>
        </div>
      </div>

      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        {" "}
        <div className="row">
          <Button
            onClick={() => {
              navigate("/instavatar/logedIn/addGold");
            }}
            id="AddMoneyButton"
          >
            <img
              className="AddMoneyButton"
              alt="addGold"
              src="/imgs/icons/gold.png"
            ></img>
          </Button>
        </div>
        <div className="row">
          <Link to={"/instavatar/logedIn/addGold"}>
            <h3>Nạp Lượng</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Choices;
