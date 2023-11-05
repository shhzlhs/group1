import React from "react";
import { Button } from "reactstrap";

function ShirtButton(props) {
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button id="StoreFilterButton">
        <img
          src="/imgs/icons/SHIRT.png"
          alt="SHIRT"
          className="StoreFilterImg"
        />
      </Button>
    </div>
  );
}

export default ShirtButton;
