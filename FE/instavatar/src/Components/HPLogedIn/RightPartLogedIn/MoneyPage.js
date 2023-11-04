import React from "react";
import "./MainPageLogedIn.css";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
function MoneyPage(props) {
  let navigate = useNavigate();
  return (
    <div className="topPadding200">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="row">
            <Button
              onClick={() => {
                navigate("/instavatar/logedIn/addCash");
              }}
              className="LinkToProfile"
            >
              <img
                className="MoneyChoices"
                src="/imgs/icons/topUp.jpg"
                alt="AddMoney"
              />
            </Button>
          </div>
          <div className="row">
            <Link to={"/instavatar/logedIn/addCash"}>
              <h3>Nạp tiền</h3>
            </Link>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="row">
            <Button
              onClick={() => {
                navigate("/instavatar/logedIn/transactionHistory");
              }}
              className="LinkToProfile"
            >
              <img
                className="MoneyChoices"
                src="/imgs/icons/moneyAdmin.png"
                alt="TranHistories"
              />
            </Button>
          </div>
          <div className="row">
            <Link to={"/instavatar/logedIn/transactionHistory"}>
              <h3>Lịch sử giao dịch</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyPage;
