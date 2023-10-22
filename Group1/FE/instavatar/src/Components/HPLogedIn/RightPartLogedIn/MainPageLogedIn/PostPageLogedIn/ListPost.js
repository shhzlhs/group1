import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsFollowingsAPI } from "../../../../../API/PostAPI";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { Button, Input } from "reactstrap";
import "./ListPosts.css";
import { disLikeAPI, likeAPI } from "../../../../../API/LikeAPI";
import { getAllUsers } from "../../../../../Redux/Actions/UserActions";
import { addCommentAPI } from "../../../../../API/CommentAPI";
function ListPost(props) {
  let [posts, setPosts] = useState([]);
  let [comment, setComment] = useState("");
  let reduxState = useSelector((state) => state);
  let dispatch = useDispatch();
  let users = reduxState.users;
  let followings = users[0].followings;
  let usernames = followings
    ? followings.map((following) => following.username)
    : [];

  useEffect(() => {
    getPostsFollowingsAPI(usernames).then((res) => {
      setPosts(res);
    });
  }, [users]);
  if (posts && posts.length > 0) {
    posts.sort((postA, postB) => {
      const dateA = parseDateString(postA.createdAt);
      const dateB = parseDateString(postB.createdAt);
      return dateB - dateA;
    });
  }
  let likeDisLike = (like, post) => {
    if (like) {
      disLikeAPI(like.id).then(() => {
        dispatch(getAllUsers());
      });
    } else {
      let newLike = { postId: post.id, userId: users[0].id, content: comment };
      likeAPI(newLike).then(() => {
        dispatch(getAllUsers());
      });
    }
  };
  let addComment = (post) => {
    let newComment = {
      userId: users[0].id,
      postId: post.id,
      content: comment,
    };
    addCommentAPI(newComment).then(() => {
      dispatch(getAllUsers());
      setComment("");
    });
  };
  const items = posts
    ? posts.map((post, index) => {
        let img = `/imgs/post_imgs/${post.image}`;
        let avatar = `/imgs/avatars/${post.userAvatar}`;
        let timestamp = formatRelativeTime(parseDateString(post.createdAt));
        let likes = post.likes;
        let like = likes.find((like) => like.userUsername == users[0].username);

        return (
          <div key={index} id="Post" className="row">
            <div id="PostHeader">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <img
                  className="PostAvatar"
                  src={avatar}
                  alt={post.userUsername}
                />
              </div>

              <p>
                <b>{post.userUsername}</b>
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
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
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
                  {post.likes.length}
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

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Button>Báo cáo</Button>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Button>Xem thêm</Button>
                </div>
              </div>

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
