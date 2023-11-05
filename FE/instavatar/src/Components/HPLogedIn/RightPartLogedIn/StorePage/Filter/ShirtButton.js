import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setItemTypeToFilterAction } from "../../../../../Redux/Actions/StoreActions";
function ShirtButton(props) {
  let dispatch = useDispatch();
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button
        onClick={() => {
          dispatch(setItemTypeToFilterAction("SHIRT"));
        }}
        id="StoreFilterButton"
      >
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
