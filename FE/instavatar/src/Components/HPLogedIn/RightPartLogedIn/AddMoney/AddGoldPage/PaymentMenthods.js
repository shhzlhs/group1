import React from "react";
import { Button } from "reactstrap";
import "./AddGoldPage.css";
function PaymentMenthods(props) {
  let { setPaymentTitle } = props;
  return (
    <div id="Payments" className="row">
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button
            onClick={() => {
              setPaymentTitle("Ví Momo");
            }}
            id="ChoosePayMent"
          >
            <img
              src="/imgs/logoes/Momo.png"
              alt="Momo"
              className="ChoosePayMent"
            ></img>
          </Button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button
            onClick={() => {
              setPaymentTitle("Ví ZaloPay");
            }}
            id="ChoosePayMent"
          >
            <img
              src="/imgs/logoes/ZaloPay.png"
              alt="Momo"
              className="ChoosePayMent"
            ></img>
          </Button>
        </div>{" "}
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button
            onClick={() => {
              setPaymentTitle("Ví ShopeePay");
            }}
            id="ChoosePayMent"
          >
            <img
              src="/imgs/logoes/Shopee.png"
              alt="Momo"
              className="ChoosePayMent"
            ></img>
          </Button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button
            onClick={() => {
              setPaymentTitle("Ví VNPay");
            }}
            id="ChoosePayMent"
          >
            <img
              src="/imgs/logoes/VnPay.png"
              alt="Momo"
              className="ChoosePayMent"
            ></img>
          </Button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button
            onClick={() => {
              setPaymentTitle("Thẻ Visa/Mastercard");
            }}
            id="ChoosePayMent"
          >
            <img
              src="/imgs/logoes/VM.png"
              alt="Momo"
              className="ChoosePayMent"
            ></img>
          </Button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button
            onClick={() => {
              setPaymentTitle("Thẻ ATM/Internet Banking");
            }}
            id="ChoosePayMent"
          >
            <img
              src="/imgs/logoes/ATM.png"
              alt="Momo"
              className="ChoosePayMent"
            ></img>
          </Button>
        </div>{" "}
      </div>
    </div>
  );
}

export default PaymentMenthods;
