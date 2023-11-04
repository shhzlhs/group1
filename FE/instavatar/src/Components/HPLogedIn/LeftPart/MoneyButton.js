import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setUserToShowItemsAction } from "../../../Redux/Actions/UserActions";
function MoneyButton(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img className="Icon" src="/imgs/icons/Money.png" alt="Money" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            dispatch(setUserToShowItemsAction(userLogedIn.username));
            navigate("/instavatar/logedIn/money");
          }}
          id="MenuButton"
        >
          {" "}
          <h3>Tiền tệ</h3>
        </Button>
      </div>
    </div>
  );
}

export default MoneyButton;
