import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/UserActions";
import "./MainPageLogedIn.css";
import InputBar from "./SearchPage/InputBar";
import UserSearchList from "./SearchPage/UserSearchList";
function SearchUserPage(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div id="SearchPage" className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <InputBar />
        <UserSearchList />
      </div>
    </div>
  );
}

export default SearchUserPage;
