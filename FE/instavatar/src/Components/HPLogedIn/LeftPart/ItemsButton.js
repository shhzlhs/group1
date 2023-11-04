import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setUserItemDetail } from "../../../Redux/Actions/UserItemActions";
import { defaultItem } from "../../../Defaults";
function ItemsButton(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let url = userLogedIn
    ? `/instavatar/logedIn/userItems/${userLogedIn.username}`
    : null;
  return (
    <div id="menu" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img className="Icon" src="/imgs/icons/Items1.png" alt="Items" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            dispatch(setUserItemDetail(defaultItem));
            navigate(url);
          }}
          id="MenuButton"
        >
          {" "}
          <h3>Kho đồ</h3>
        </Button>
      </div>
    </div>
  );
}

export default ItemsButton;
