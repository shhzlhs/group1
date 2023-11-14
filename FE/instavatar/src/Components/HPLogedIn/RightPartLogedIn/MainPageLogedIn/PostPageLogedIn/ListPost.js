import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsFollowingsAPI } from "../../../../../API/PostAPI";
import {
  formatRelativeTime,
  getCommonElements,
  getRandomElementFromArray,
  parseDateString,
} from "../../../../../Funtions";
import { Button, Input } from "reactstrap";
import "./ListPosts.css";
import { disLikeAPI, likeAPI } from "../../../../../API/LikeAPI";
import { getAllUsers } from "../../../../../Redux/Actions/UserActions";
import { addCommentAPI } from "../../../../../API/CommentAPI";
import { Link } from "react-router-dom";
import { createNotificationAPI } from "../../../../../API/NotificationAPI";
import { setPostReportAction } from "../../../../../Redux/Actions/ReportAction";
import { showReportModalAction } from "../../../../../Redux/Actions/ModalActions";
function ListPost(props) {
  let [posts, setPosts] = useState([]);
  let [comment, setComment] = useState("");
  let reduxState = useSelector((state) => state);
  let userLogedIn = reduxState.userLogedIn;
  let dispatch = useDispatch();
  let users = reduxState.users;
  let followings = [...userLogedIn.followings, userLogedIn];
  let followings1 = userLogedIn.followings;
  let allUsernames = users ? users.map((user) => user.username) : [];
  let usernames = followings
    ? followings.map((following) => following.username)
    : [];
  let usernames1 = followings1
    ? followings1.map((following) => following.username)
    : [];
  useEffect(() => {
    if (usernames.length > 1) {
      getPostsFollowingsAPI(usernames).then((res) => {
        setPosts(res);
      });
    } else {
      getPostsFollowingsAPI(allUsernames).then((res) => {
        setPosts(res);
      });
    }
  }, [users]);
  if (posts && posts.length > 1) {
    posts.sort((postA, postB) => {
      const dateA = parseDateString(postA.createdAt);
      const dateB = parseDateString(postB.createdAt);
      return dateB - dateA;
    });
  }
  let report = (post) => {
    dispatch(setPostReportAction(post));
    dispatch(showReportModalAction());
  };
  let likeDisLike = (like, post) => {
    if (like) {
      disLikeAPI(like.id).then(() => {
        dispatch(getAllUsers());
      });
    } else {
      let newLike = {
        postId: post.id,
        userId: userLogedIn.id,
      };
      likeAPI(newLike).then(() => {
        dispatch(getAllUsers());
        if (post.userUsername !== userLogedIn.username) {
          createNotificationAPI({
            creatorId: userLogedIn.id,
            postId: post.id,
            content: `${userLogedIn.fullName} thích bài viết của bạn`,
          });
        }
      });
    }
  };
  let addComment = (post) => {
    let newComment = {
      userId: userLogedIn.id,
      postId: post.id,
      content: comment,
    };
    addCommentAPI(newComment).then(() => {
      dispatch(getAllUsers());
      setComment("");
      if (userLogedIn.username !== post.userUsername) {
        createNotificationAPI({
          creatorId: userLogedIn.id,
          postId: post.id,
          content: `${userLogedIn.fullName} đã bình luận bài viết của bạn`,
        });
      }
    });
  };
  const items = posts
    ? posts.map((post, index) => {
        let img = `/imgs/post_imgs/${post.image}`;
        let avatar = `/imgs/avatars/${post.userAvatar}`;
        let timestamp = formatRelativeTime(parseDateString(post.createdAt));
        let likes = post.likes;
        let like = likes.find(
          (like) => like.userUsername === userLogedIn.username
        );
        let likedUsernames = likes.map((like) => like.userUsername);
        let randomFollowingUser = likedUsernames
          ? getRandomElementFromArray(
              getCommonElements(usernames1, likedUsernames)
            )
          : null;
        let text1 =
          randomFollowingUser && likes.length > 1
            ? `${randomFollowingUser} và `
            : randomFollowingUser && likes.length === 1
            ? randomFollowingUser
            : null;
        let text3 =
          randomFollowingUser && likes.length > 1 ? " người khác" : "";
        let text2 =
          text1 && likes.length > 1
            ? likes.length - 1
            : text1 && likes.length === 1
            ? ""
            : likes.length;
        return (
          <div key={index} id="Post" className="row">
            <div id="PostHeader">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Link to={`/instavatar/logedIn/user/${post.userUsername}`}>
                  <img
                    className="PostAvatar"
                    src={avatar}
                    alt={post.userUsername}
                  />
                </Link>
              </div>

              <p>
                <Link to={`/instavatar/logedIn/user/${post.userUsername}`}>
                  <b>{post.userUsername}</b>
                </Link>
                <br></br>
                {timestamp}
              </p>
            </div>

            <div id="PostContent">
              <p>
                <br></br>
                {post.content}
              </p>
            </div>

            <div className="row">
              <img id="PostImg" src={img} alt="Lỗi tải ảnh"></img>
            </div>

            <div id="PostFooter" className="row">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <Button
                    onClick={() => {
                      likeDisLike(like, post);
                    }}
                    id="PostButton"
                  >
                    <img
                      className="PostIcon"
                      src={`/imgs/icons/${like ? "Dislike.png" : "Like.png"}`}
                      alt={like ? "DISLIKE" : "LIKE"}
                    ></img>
                  </Button>
                  {text1}
                  {text2}
                  {text3}
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <Button id="PostButton">
                    <img
                      className="PostIcon"
                      src="/imgs/icons/Comment.png"
                      alt="COMMENTS"
                    ></img>
                  </Button>
                  {post.comments.length}
                </div>

                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>

                <div
                  hidden={userLogedIn.username === post.userUsername}
                  className="col-xs-2 col-sm-2 col-md-2 col-lg-2"
                >
                  <Button
                    onClick={() => {
                      report(post);
                    }}
                    id="PostButton"
                  >
                    Báo cáo
                  </Button>
                </div>
              </div>

              <div className="row">
                <br></br>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Link to={`/instavatar/logedIn/post/${post.id}`}>
                    Xem thêm
                  </Link>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                  <Input
                    type="text"
                    placeholder="Nhập bình luận..."
                    value={comment}
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                  ></Input>
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Button
                    color="primary"
                    onClick={() => {
                      addComment(post);
                    }}
                  >
                    Đăng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    : [];

  return <div className="ListPosts">{items}</div>;
}

export default ListPost;
