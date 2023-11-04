import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setTranType } from "../../../../Redux/ActionType/TransactionActions";
function TypeFilter(props) {
  let dispatch = useDispatch();
  let type = useSelector((state) => state.tranType);
  const typeFilter = () => {
    if (type.trim() === "") {
      dispatch(setTranType("UP"));
    } else if (type === "UP") {
      dispatch(setTranType("DOWN"));
    } else {
      dispatch(setTranType(""));
    }
  };
  let text = "Tăng";

  if (type.trim() === "") {
    text = "Tăng";
  } else if (type === "UP") {
    text = "Giảm";
  } else if (type === "DOWN") {
    text = "Tất cả giao dịch";
  }
  let color = "upStype";
  if (type.trim() === "") {
    color = "success";
  } else if (type === "UP") {
    color = "danger";
  } else if (type === "DOWN") {
    color = "primary";
  }
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button onClick={typeFilter} color={color}>
        {" "}
        {text}
      </Button>
    </div>
  );
}

export default TypeFilter;
