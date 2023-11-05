import React from "react";
import { Button } from "reactstrap";

function TrousersButton(props) {
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button id="StoreFilterButton">
        <img
          src="/imgs/icons/TROUSERS.png"
          alt="TROUSERS"
          className="StoreFilterImg"
        />
      </Button>
    </div>
  );
}

export default TrousersButton;
