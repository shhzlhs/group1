import React from "react";
import { Button, Input } from "reactstrap";
import "./UsersAdmin.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputForSearchUserAdminAction,
  setLengthOfReportsUserAction,
  setStatusForSearchUserAdminAction,
} from "../../../../../Redux/Actions/AdminActions";
function FilterBar(props) {
  let dispatch = useDispatch();
  let input = useSelector((state) => state.inputForSearchUserAdmin);
  let status = useSelector((state) => state.statusForSearchUser);
  let length = useSelector((state) => state.lengthOfReportsUser);
  let changeStatus = () => {
    if (status === "U_ACTIVE") {
      dispatch(setStatusForSearchUserAdminAction(""));
    } else if (status === "") {
      dispatch(setStatusForSearchUserAdminAction("U_ACTIVE"));
    }
  };
  let changeLength = () => {
    if (length === 0) {
      dispatch(setLengthOfReportsUserAction(1));
    } else {
      dispatch(setLengthOfReportsUserAction(0));
    }
  };
  let statusText =
    status === "U_ACTIVE"
      ? "Tất cả trạng thái"
      : status === ""
      ? "Chưa kích hoạt"
      : null;
  let reportText = length === 0 ? "Bị báo cáo" : "Tất cả";
  return (
    <div id="ToolsBar" className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Input
          value={input}
          onChange={(event) => {
            dispatch(setInputForSearchUserAdminAction(event.target.value));
          }}
          placeholder="Search users..."
          type="text"
        ></Input>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Button onClick={changeStatus} color="warning">
          {statusText}
        </Button>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Button onClick={changeLength} id="beReport">
          {reportText}
        </Button>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Button color="danger">Xoá tài khoản</Button>
      </div>
    </div>
  );
}

export default FilterBar;
