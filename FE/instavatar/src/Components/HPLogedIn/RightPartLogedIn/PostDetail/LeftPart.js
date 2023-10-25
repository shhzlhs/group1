import React from "react";
import { useSelector } from "react-redux";
import "./PostDetail.css";
function LeftPart(props) {
  let post = useSelector((state) => state.postDetail);
  return (
    <div id="LeftBox" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <img
        className="PostDetailImg"
        alt={post.content}
        src={`/imgs/post_imgs/${post.image}`}
      ></img>
    </div>
  );
}

export default LeftPart;
