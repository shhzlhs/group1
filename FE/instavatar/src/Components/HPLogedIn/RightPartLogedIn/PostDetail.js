import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../Redux/Actions/PostAction";
function PostDetail(props) {
  let id = parseInt(useParams().postId);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostById(id));
  }, []);
  let postDetail = useSelector((state) => state.PostDetail);
  return (
    <div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <h1>{id}</h1>
      </div>
    </div>
  );
}

export default PostDetail;
