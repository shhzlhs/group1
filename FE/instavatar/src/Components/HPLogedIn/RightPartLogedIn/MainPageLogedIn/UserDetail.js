import React from "react";
import { useParams } from "react-router-dom";
import { getUserByUsernameAPI } from "../../../../API/UserAPI";

function UserDetail(props) {
  let username = useParams().username;
  let userDetail = getUserByUsernameAPI(username).then((res) => {
    return res;
  });
  console.log("res: ", userDetail);
  return <div>{userDetail.username}</div>;
}

export default UserDetail;
