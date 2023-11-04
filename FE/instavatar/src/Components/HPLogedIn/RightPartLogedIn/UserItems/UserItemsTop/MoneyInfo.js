import React from "react";
import { useSelector } from "react-redux";
import "./UserItemsTop.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
function MoneyInfo(props) {
  let navigate = useNavigate();
  let user = useSelector((state) => state.userToShowItems);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let coin = user ? user.coin : null;
  let gold = user ? user.gold : null;
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <div id="EachMoneyRow" className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img
            alt="coin"
            src="/imgs/icons/coin.png"
            className="tinyItemIcon"
          ></img>
        </div>

        <div id="left" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          {coin}
        </div>

        <div
          hidden={user.id !== userLogedIn.id}
          className="col-xs-2 col-sm-2 col-md-2 col-lg-2"
        >
          <Button
            onClick={() => {
              navigate("/instavatar/logedIn/addCoin");
            }}
            id="NoneBGButton"
          >
            <img
              className="tinyItemIcon"
              alt="addCoin"
              src="/imgs/icons/add.png"
            ></img>
          </Button>
        </div>
      </div>
      <div id="EachMoneyRow" className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img
            alt="coin"
            src="/imgs/icons/gold.png"
            className="tinyItemIcon"
          ></img>
        </div>

        <div id="left" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          {gold}
        </div>

        <div
          hidden={user.id !== userLogedIn.id}
          className="col-xs-2 col-sm-2 col-md-2 col-lg-2"
        >
          <Button
            onClick={() => {
              navigate("/instavatar/logedIn/addGold");
            }}
            id="NoneBGButton"
          >
            <img
              className="tinyItemIcon"
              alt="addGold"
              src="/imgs/icons/add.png"
            ></img>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MoneyInfo;
