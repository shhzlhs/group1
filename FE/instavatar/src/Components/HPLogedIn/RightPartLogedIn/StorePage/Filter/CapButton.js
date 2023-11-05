import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import "./Filter.css";
import { setItemTypeToFilterAction } from "../../../../../Redux/Actions/StoreActions";
function CapButton(props) {
  let dispatch = useDispatch();
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button
        onClick={() => {
          dispatch(setItemTypeToFilterAction("CAP"));
        }}
        id="StoreFilterButton"
      >
        <img src="/imgs/icons/CAP.png" alt="CAP" className="StoreFilterImg" />
      </Button>
    </div>
  );
}

export default CapButton;
