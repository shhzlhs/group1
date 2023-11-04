import React, { useState } from "react";
import "../MainPageLogedIn.css";
import MoneyInfo from "../UserItems/UserItemsTop/MoneyInfo";

import { Link } from "react-router-dom";
import PaymentMenthods from "./AddGoldPage/PaymentMenthods";
import ChooseMoney from "./AddGoldPage/ChooseMoney";
import PaymentInfo from "./AddGoldPage/PaymentInfo";

function AddGoldPage(props) {
  let [paymentTitle, setPaymentTitle] = useState("");
  let [totalMoney, setTotalMoney] = useState(0);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="row">
          <MoneyInfo />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <h1>Nạp Lượng</h1>
            <br></br>
            <Link to={"/instavatar/logedIn/main"}>Quay lại trang chủ</Link>
          </div>
        </div>
        <PaymentMenthods setPaymentTitle={setPaymentTitle} />

        <div className="row"></div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <ChooseMoney totalMoney={totalMoney} setTotalMoney={setTotalMoney} />
          <PaymentInfo totalMoney={totalMoney} paymentTitle={paymentTitle} />
        </div>
      </div>
    </div>
  );
}

export default AddGoldPage;
