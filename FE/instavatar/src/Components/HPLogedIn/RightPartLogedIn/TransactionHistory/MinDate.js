import React from "react";
import { Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMinDate } from "../../../../Redux/ActionType/TransactionActions";
function MinDate(props) {
  let dispatch = useDispatch();
  let date = useSelector((state) => state.minDate);
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Label>Từ ngày:</Label>
      </div>

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Input
          value={date}
          onChange={(event) => {
            dispatch(setMinDate(event.target.value));
          }}
          type="date"
        ></Input>
      </div>
    </div>
  );
}

export default MinDate;
