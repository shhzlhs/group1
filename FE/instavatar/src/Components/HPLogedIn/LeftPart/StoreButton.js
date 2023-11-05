import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserToShowItemsAction } from "../../../Redux/Actions/UserActions";
function StoreButton(props) {
  let navigate = useNavigate();
  let user = useSelector((state) => state.userLogedIn);
  let dispatch = useDispatch();
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img className="Icon" src="/imgs/icons/Store.png" alt="Store" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            dispatch(setUserToShowItemsAction(user.username));
            navigate("/instavatar/logedIn/store");
          }}
          id="MenuButton"
        >
          {" "}
          <h3>Cửa hàng</h3>
        </Button>
      </div>
    </div>
  );
}

export default StoreButton;
