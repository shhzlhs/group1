import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PostRightPart.css";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { setPostReportAction } from "../../../../../Redux/Actions/ReportAction";
import { showReportModalAction } from "../../../../../Redux/Actions/ModalActions";
function PostHeader(props) {
  let dispatch = useDispatch();
  let post = useSelector((state) => state.postDetail);
  let userLogedIn = useSelector((state) => state.userLogedIn);

  let timestamp = post.createdAt
    ? formatRelativeTime(parseDateString(post.createdAt))
    : "";
  let report = () => {
    dispatch(setPostReportAction(post));
    dispatch(showReportModalAction());
  };
  return (
    <div id="Header" className="row">
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <Link to={`/instavatar/logedIn/user/${post.userUsername}`}>
            <img
              className="PostAvatar"
              src={"/imgs/avatars/" + post.userAvatar}
              alt={post.userUsername}
            ></img>
          </Link>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="row">
            <Link to={`/instavatar/logedIn/user/${post.userUsername}`}>
              <b>{post.userUsername}</b>
            </Link>
          </div>

          <div className="row">{timestamp}</div>
        </div>

        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"></div>

        <div
          hidden={userLogedIn.username === post.userUsername}
          className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
        >
          <Button onClick={report} className="button">
            Báo cáo
          </Button>
        </div>
      </div>

      <div id="Content" className="row">
        {post.content}
      </div>
    </div>
  );
}

export default PostHeader;
