import React from "react";
import { useSelector } from "react-redux";
import "./UserItemsTop.css";
import { Button } from "reactstrap";
function MoneyInfo(props) {
  let user = useSelector((state) => state.userToShowItems);
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

        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button id="NoneBGButton">
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

        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button id="NoneBGButton">
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
