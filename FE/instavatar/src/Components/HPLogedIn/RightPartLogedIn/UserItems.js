import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToShowItemsAction } from "../../../Redux/Actions/UserActions";
import UserItemsTop from "./UserItems/UserItemsTop";
import "./MainPageLogedIn.css";
import UserItemsBottom from "./UserItems/UserItemsBottom";
function UserItems(props) {
  let username = useParams().username;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserToShowItemsAction(username));
  }, [username]);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <UserItemsTop />
        <UserItemsBottom />
      </div>
    </div>
  );
}

export default UserItems;
