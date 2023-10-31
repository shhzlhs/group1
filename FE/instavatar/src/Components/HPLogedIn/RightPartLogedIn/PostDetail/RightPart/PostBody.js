import React, { useState } from "react";
import "./PostRightPart.css";
import { useSelector, useDispatch } from "react-redux";
import "./PostRightPart.css";
import { Button, Input } from "reactstrap";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { disLikeAPI, likeAPI } from "../../../../../API/LikeAPI";
import { getPostById } from "../../../../../Redux/Actions/PostAction";
import { Link } from "react-router-dom";
import CommentLikesModal from "../../CommentLikesModal";
import {
  showCommentLikesModal,
  showReportModalAction,
} from "../../../../../Redux/Actions/ModalActions";
import { setCommentDetail } from "../../../../../Redux/Actions/CommentActions";
import { createNotificationAPI } from "../../../../../API/NotificationAPI";
import { addCommentAPI } from "../../../../../API/CommentAPI";
import { setCommentReportAction } from "../../../../../Redux/Actions/ReportAction";
function PostBody(props) {
  let [ids, setIds] = useState([]);
  let [input, setInput] = useState("");
  let post = useSelector((state) => state.postDetail);
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let comments = post ? post.comments : [];
  if (comments && comments.length > 0) {
    comments.sort((commentA, commentB) => {
      const dateA = parseDateString(commentA.createdAt);
      const dateB = parseDateString(commentB.createdAt);
      return dateB - dateA;
    });
  }
  let report = (cm) => {
    dispatch(setCommentReportAction(cm));
    dispatch(showReportModalAction());
  };
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
                    postId: post.id,
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
        let replyComment = (cm, text) => {
          if (input.trim() !== "") {
            addCommentAPI({
              userId: userLogedIn.id,
              content: text,
              commentId: cm.id,
            }).then(() => {
              dispatch(getPostById(post.id));
              if (userLogedIn.username !== post.userUsername) {
                createNotificationAPI({
                  creatorId: userLogedIn.id,
                  postId: post.id,
                  content: `${userLogedIn.fullName} đã phản hồi bình luận trong bài viết của bạn`,
                });
              }
              if (userLogedIn.userUsername !== cm.userUsername) {
                createNotificationAPI({
                  creatorId: userLogedIn.id,
                  content: `${userLogedIn.fullName} đã phản hồi bình luận của bạn`,
                  commentId: cm.id,
                });
              }
              setInput("");
            });
          }
        };
        let replyArea = () => {
          if (comment.replies && comment.replies.length > 0) {
            return comment.replies.map((reply, index) => {
              let replyLikes =
                reply.likes && reply.likes.length > 0
                  ? `${reply.likes.length} lượt thích`
                  : null;
              let replyLike =
                reply.likes && reply.likes.length > 0
                  ? reply.likes.find(
                      (li) => li.userUsername === userLogedIn.username
                    )
                  : null;
              let replyLikeButton = replyLike
                ? "/imgs/icons/Dislike.png"
                : "/imgs/icons/Like.png";
              let likeDisLikeReply = () => {
                if (replyLike) {
                  disLikeAPI(replyLike.id).then(() => {
                    dispatch(getPostById(post.id));
                  });
                } else {
                  likeAPI({
                    commentId: reply.id,
                    userId: userLogedIn.id,
                  }).then(() => {
                    dispatch(getPostById(post.id));
                    if (userLogedIn.username !== reply.userUsername) {
                      let no1 = {
                        creatorId: userLogedIn.id,
                        commentId: reply.id,
                        content: `${userLogedIn.fullName} thích bình luận của bạn`,
                      };
                      createNotificationAPI(no1);
                    }
                  });
                }
              };
              let reportReplyButton =
                reply.userUsername !== userLogedIn.username ? (
                  <Button
                    onClick={() => {
                      report(reply);
                    }}
                    className="likeNumber"
                  >
                    <small>Báo cáo</small>
                  </Button>
                ) : null;
              return (
                <div key={index} className="row">
                  <div
                    id="ForEachReply"
                    className="col-xs-11 col-sm-11 col-md-11 col-lg-11"
                  >
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                      <Link
                        to={`/instavatar/logedIn/user/${reply.userUsername}`}
                      >
                        <img
                          className="CommentAvatar"
                          alt={reply.userUsername}
                          src={`/imgs/avatars/${reply.userAvatar}`}
                        ></img>
                      </Link>
                    </div>

                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                      <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                          <Link
                            to={`/instavatar/logedIn/user/${reply.userUsername}`}
                          >
                            <b className="ReplyText">{`   ${reply.userUsername}`}</b>
                          </Link>
                        </div>
                        <div
                          id="reply"
                          className="col-xs-7 col-sm-7 col-md-7 col-lg-7"
                        >
                          {reply.content}
                        </div>

                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                          {reportReplyButton}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                          <i>
                            <small>
                              {" "}
                              {formatRelativeTime(
                                parseDateString(reply.createdAt)
                              )}
                            </small>
                          </i>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                          <Button
                            onClick={() => {
                              dispatch(setCommentDetail(reply.id));
                              dispatch(showCommentLikesModal());
                            }}
                            className="likeNumber"
                          >
                            <small>{replyLikes}</small>
                          </Button>
                        </div>

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                          <Button className="button" onClick={likeDisLikeReply}>
                            <img
                              src={replyLikeButton}
                              alt="Like/Dislike"
                              className="Like"
                            ></img>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
          }
        };
        let reportButton =
          comment.userUsername !== userLogedIn.username ? (
            <Button
              onClick={() => {
                report(comment);
              }}
              className="likeNumber"
            >
              Báo cáo
            </Button>
          ) : null;

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
                    {reportButton}
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
                      className="likeNumber"
                    >
                      {likeNumber()}
                    </Button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Button className="likeNumber">{replyNumber()}</Button>
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
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <Button
                      onClick={() => {
                        if (ids.includes(comment.id)) {
                          setIds(ids.filter((id) => id !== comment.id));
                        } else {
                          setIds([...ids, comment.id]);
                        }
                      }}
                      className="button"
                    >
                      <img
                        className="Like"
                        alt="Reply"
                        src="/imgs/icons/Reply.png"
                      ></img>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div hidden={!ids.includes(comment.id)} className="row">
              {replyArea()}

              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <Input
                    id="input"
                    placeholder="Nhập phản hồi..."
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                    }}
                    type="text"
                  ></Input>
                </div>

                <Button
                  onClick={() => {
                    replyComment(comment, input);
                  }}
                  color="primary"
                >
                  Phản hồi
                </Button>
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
