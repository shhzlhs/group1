import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../../../Redux/Actions/UserActions";
import InfoArea from "./UserProfile/InfoArea";
import ListPosts from "./UserProfile/ListPosts";
function UserProfile(props) {
  let dispatch = useDispatch();
  let username = useParams().username;
  useEffect(() => {
    dispatch(setUserDetail(username));
  }, [username]);
  return (
    <div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <InfoArea />
        <ListPosts />
      </div>
    </div>
  );
}

export default UserProfile;
