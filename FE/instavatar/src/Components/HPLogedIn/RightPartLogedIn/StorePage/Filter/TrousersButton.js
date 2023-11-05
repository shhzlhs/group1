import React from "react";
import { Button } from "reactstrap";
import { setItemTypeToFilterAction } from "../../../../../Redux/Actions/StoreActions";
import { useDispatch } from "react-redux";
function TrousersButton(props) {
  let dispatch = useDispatch();
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button
        onClick={() => {
          dispatch(setItemTypeToFilterAction("TROUSERS"));
        }}
        id="StoreFilterButton"
      >
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
