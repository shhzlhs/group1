import React from "react";
import MoneyInfo from "../UserItems/UserItemsTop/MoneyInfo";
import "./TransactionHistory.css";
function TitleBar(props) {
  return (
    <div id="TitleBox" className="row">
      <MoneyInfo />

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <h1>Lịch sử giao dịch</h1>
      </div>
    </div>
  );
}

export default TitleBar;
