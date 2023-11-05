import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setItemTypeToFilterAction } from "../../../../../Redux/Actions/StoreActions";
function EquipButton(props) {
  let dispatch = useDispatch();
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button
        onClick={() => {
          dispatch(setItemTypeToFilterAction("EQUIP"));
        }}
        id="StoreFilterButton"
      >
        <img
          src="/imgs/icons/EQUIP.png"
          alt="EQUIP"
          className="StoreFilterImg"
        />
      </Button>
    </div>
  );
}

export default EquipButton;
