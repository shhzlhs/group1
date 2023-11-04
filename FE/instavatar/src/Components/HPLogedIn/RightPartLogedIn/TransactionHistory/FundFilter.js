import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCoinOrGold } from "../../../../Redux/ActionType/TransactionActions";
import "./TransactionHistory.css";
function FundFilter(props) {
  let dispatch = useDispatch();
  let coinOrGold = useSelector((state) => state.coinOrGold);

  const coinOrGoldFilter = () => {
    if (coinOrGold.trim() === "") {
      dispatch(setCoinOrGold("C"));
    } else if (coinOrGold === "C") {
      dispatch(setCoinOrGold("G"));
    } else {
      dispatch(setCoinOrGold(""));
    }
  };
  let text = "Xu";

  if (coinOrGold.trim() === "") {
    text = "Xu";
  } else if (coinOrGold === "C") {
    text = "Lượng";
  } else if (coinOrGold === "G") {
    text = "Tất cả tài khoản";
  }
  let id = "coinStyle";
  if (coinOrGold.trim() === "") {
    id = "coinStyle";
  } else if (coinOrGold === "C") {
    id = "goldStyle";
  } else if (coinOrGold === "G") {
    id = "allFund";
  }
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button id={id} onClick={coinOrGoldFilter}>
        {text}
      </Button>
    </div>
  );
}

export default FundFilter;
