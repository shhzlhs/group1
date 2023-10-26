import React from "react";
import "./PostRightPart.css";
import { useSelector, useDispatch } from "react-redux";
import "./PostRightPart.css";
import { Button } from "reactstrap";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { disLikeAPI, likeAPI } from "../../../../../API/LikeAPI";
import { getPostById } from "../../../../../Redux/Actions/PostAction";
import { Link } from "react-router-dom";
import CommentLikesModal from "../../CommentLikesModal";
import { showCommentLikesModal } from "../../../../../Redux/Actions/ModalActions";
import { setCommentDetail } from "../../../../../Redux/Actions/CommentActions";
import { createNotificationAPI } from "../../../../../API/NotificationAPI";
function PostBody(props) {
  let post = useSelector((state) => state.postDetail);
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let comments = post ? post.comments : [];
  if (comments && comments.length > 0) {
    comments.sort(
      (a, b) => parseDateString(b.createdAt) - parseDateString(a.createdAt)
    );
  }
  let items = () => {
    if (comments && comments.length === 0) {
      return "Chưa có bình luận";
    } else if (comments) {
      return comments.map((comment, index) => {
        let replies = comment.replies ? comment.replies : [];
        let timestamp = formatRelativeTime(parseDateString(comment.createdAt));
        let likeNumber = () => {
          if (comment.likes.length > 0) {
            return `${comment.likes.length} lượt thích`;
          } else return "";
        };
        let replyNumber = () => {
          if (replies.length > 0) {
            return `${replies.length} phản hồi`;
          } else return "";
        };
        let likes = comment.likes ? comment.likes : null;
        let like = likes
          ? likes.find((lk) => lk.userUsername === userLogedIn.username)
          : null;
        let likeButton = like
          ? "/imgs/icons/Dislike.png"
          : "/imgs/icons/Like.png";
        let likeDisLike = () => {
          if (like) {
            disLikeAPI(like.id).then(() => {
              dispatch(getPostById(post.id));
            });
          } else {
            likeAPI({ commentId: comment.id, userId: userLogedIn.id }).then(
              () => {
                dispatch(getPostById(post.id));
                if (userLogedIn.username !== comment.userUsername) {
                  let no = {
                    creatorId: userLogedIn.id,
                    commentId: comment.id,
                    content: `${userLogedIn.fullName} thích bình luận của bạn`,
                  };
                  createNotificationAPI(no);
                }
              }
            );
          }
        };
        return (
          <div key={index} id="EachComment" className="row">
            <div className="row">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <Link to={`/instavatar/logedIn/user/${comment.userUsername}`}>
                  <img
                    className="CommentAvatar"
                    alt={comment.userUsername}
                    src={"/imgs/avatars/" + comment.userAvatar}
                  ></img>
                </Link>
              </div>

              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                  <div
                    id="CommentText"
                    className="col-xs-10 col-sm-10 col-md-10 col-lg-10"
                  >
                    <Link
                      to={`/instavatar/logedIn/user/${comment.userUsername}`}
                    >
                      <b>{comment.userUsername}</b>
                    </Link>{" "}
                    {comment.content}
                  </div>

                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Button className="button">Báo cáo</Button>
                  </div>
                </div>

                <div className="row">
                  <div
                    id="Content"
                    className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
                  >
                    <i>{timestamp}</i>
                  </div>

                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Button
                      onClick={() => {
                        dispatch(setCommentDetail(comment.id));
                        dispatch(showCommentLikesModal());
                      }}
                      className="button"
                    >
                      {likeNumber()}
                    </Button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Button className="button">{replyNumber()}</Button>
                  </div>

                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <Button onClick={likeDisLike} className="button">
                      <img
                        className="Like"
                        alt="Like/Dislike"
                        src={likeButton}
                      ></img>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <CommentLikesModal />
          </div>
        );
      });
    }
  };

  return (
    <div id="PostBody" className="row">
      {items()}
    </div>
  );
}

export default PostBody;
