import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Menu.css";
import { Button } from "reactstrap";
import { setInputToSearchUserAction } from "../../../Redux/Actions/UserActions";
function SearchButton(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <div id="menu" className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img className="Icon" src="/imgs/icons/Search.png" alt="Search" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            navigate("/instavatar/logedIn/search");
            dispatch(setInputToSearchUserAction(""));
          }}
          id="MenuButton"
        >
          {" "}
          <h3>Tìm kiếm</h3>
        </Button>
      </div>
    </div>
  );
}

export default SearchButton;
