import React from "react";
import { Button } from "reactstrap";
import "./Filter.css";
function OthersButton(props) {
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button id="StoreFilterButton">
        <img
          src="/imgs/icons/OTHER1.png"
          alt="Other"
          className="StoreFilterImg"
        />
      </Button>
    </div>
  );
}

export default OthersButton;
