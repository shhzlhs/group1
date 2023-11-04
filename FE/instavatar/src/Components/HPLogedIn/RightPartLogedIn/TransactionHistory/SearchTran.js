import React from "react";
import { Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setInputToSearchTran } from "../../../../Redux/ActionType/TransactionActions";
function SearchTran(props) {
  let dispatch = useDispatch();
  let input = useSelector((state) => state.inputForSearchTransaction);
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Input
        value={input}
        type="text"
        onChange={(event) => {
          dispatch(setInputToSearchTran(event.target.value));
        }}
        placeholder="Tìm kiếm giao dịch..."
      ></Input>
    </div>
  );
}

export default SearchTran;
