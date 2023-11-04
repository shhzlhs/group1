import React from "react";
import "./MainPageLogedIn.css";
import Title from "./AddMoney/Title";
import Choices from "./AddMoney/Choices";
function AddMoney(props) {
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <Title />
        <Choices />
      </div>
    </div>
  );
}

export default AddMoney;
