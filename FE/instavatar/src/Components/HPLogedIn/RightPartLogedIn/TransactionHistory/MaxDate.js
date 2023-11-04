import React from "react";
import { Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMaxDate } from "../../../../Redux/ActionType/TransactionActions";
function MaxDate(props) {
  let dispatch = useDispatch();
  let date = useSelector((state) => state.maxDate);
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Label>Đến ngày:</Label>
      </div>

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Input
          value={date}
          onChange={(event) => {
            dispatch(setMaxDate(event.target.value));
          }}
          type="date"
        ></Input>
      </div>
    </div>
  );
}

export default MaxDate;
