import React from "react";
import MoneyInfo from "../UserItems/UserItemsTop/MoneyInfo";

function StoreInfoBar(props) {
  return (
    <div className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <h1>Cửa hàng</h1>
      </div>

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
      <MoneyInfo />
    </div>
  );
}

export default StoreInfoBar;
