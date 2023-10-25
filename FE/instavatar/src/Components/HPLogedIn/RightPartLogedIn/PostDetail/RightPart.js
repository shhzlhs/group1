import React from "react";
import PostHeader from "./RightPart/PostHeader";
import PostBody from "./RightPart/PostBody";
import "./PostDetail.css";
import PostFooter from "./RightPart/PostFooter";
function RightPart(props) {
  return (
    <div id="RightBox" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <PostHeader />
      <PostBody />
      <PostFooter />
    </div>
  );
}

export default RightPart;
