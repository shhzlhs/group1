import React, { useEffect } from "react";
import "./MainPageLogedIn.css";
import TitleBar from "./TransactionHistory/TitleBar";
import FilterBar from "./TransactionHistory/FilterBar";
import TransTable from "./TransactionHistory/TransTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransByUserAction,
  setCoinOrGold,
  setInputToSearchTran,
  setMaxDate,
  setMinDate,
  setTranType,
} from "../../../Redux/ActionType/TransactionActions";
function TransactionHistory(props) {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.userLogedIn);

  useEffect(() => {
    dispatch(getTransByUserAction(user.id));
    dispatch(setInputToSearchTran(""));
    dispatch(setCoinOrGold(""));
    dispatch(setTranType(""));
    dispatch(setMinDate(new Date("2022-01-01")));
    dispatch(setMaxDate(new Date()));
  }, []);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <TitleBar />
        <FilterBar />
        <TransTable />
      </div>
    </div>
  );
}

export default TransactionHistory;
