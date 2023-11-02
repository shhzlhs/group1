import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostById } from "../../../Redux/Actions/PostAction";
import LeftPart from "./PostDetail/LeftPart";
import RightPart from "./PostDetail/RightPart";
function PostDetail(props) {
  let id = parseInt(useParams().postId);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
}

export default PostDetail;
