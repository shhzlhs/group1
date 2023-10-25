import React from "react";

import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setUserLogedIn } from "../../../../../Redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";
function LogOutButton(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button
          color="danger"
          onClick={() => {
            navigate("/instavatar/logIn");
            dispatch(setUserLogedIn({}));
          }}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );
}

export default LogOutButton;
