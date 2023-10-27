import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { disLikeAPI, likeAPI } from "../../../../../API/LikeAPI";
import { getPostById } from "../../../../../Redux/Actions/PostAction";
import PostLikesModal from "../../PostLikesModal";
import { showPostLikesModal } from "../../../../../Redux/Actions/ModalActions";
import { addCommentAPI } from "../../../../../API/CommentAPI";
import { createNotificationAPI } from "../../../../../API/NotificationAPI";
function PostFooter(props) {
  let dispatch = useDispatch();
  let reduxStore = useSelector((state) => state);
  let [input, setInput] = useState("");
  let userLogedIn = reduxStore.userLogedIn;
  let post = reduxStore.postDetail;
  let likes = post ? post.likes : [];
  let like = likes
    ? likes.find((lk) => lk.userUsername === userLogedIn.username)
    : null;
  let likeButton = like ? "/imgs/icons/Dislike.png" : "/imgs/icons/Like.png";
  let likeText = () => {
    if (likes && likes.length === 0) {
      return "";
    } else if (likes) return `${likes.length} lượt thích`;
  };
  let comments = post ? post.comments : [];
  let commentText = () => {
    if (comments && comments.length === 0) {
      return "";
    } else if (comments) {
      return `${comments.length} bình luận`;
    }
  };
  let likeDisLike = () => {
    if (like) {
      disLikeAPI(like.id).then(() => {
        dispatch(getPostById(post.id));
      });
    } else {
      likeAPI({ postId: post.id, userId: userLogedIn.id }).then(() => {
        dispatch(getPostById(post.id));
        if (userLogedIn.username !== post.userUsername) {
          createNotificationAPI({
            creatorId: userLogedIn.id,
            postId: post.id,
            content: `${userLogedIn.fullName} thích bài viết của bạn`,
          });
        }
      });
    }
  };
  let addComment = () => {
    if (input.trim() !== "") {
      let newComment = {
        userId: userLogedIn.id,
        content: input,
        postId: post.id,
      };
      addCommentAPI(newComment).then(() => {
        dispatch(getPostById(post.id));
        setInput("");
        if (userLogedIn.username !== post.userUsername) {
          createNotificationAPI({
            creatorId: userLogedIn.id,
            content: userLogedIn.fullName + " đã bình luận bài viết của bạn",
            postId: post.id,
          });
        }
      });
    }
  };
  return (
    <div className="row">
      <div className="row">
        <div
          onClick={() => {
            dispatch(showPostLikesModal());
          }}
          className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
        >
          {likeText()}
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          {commentText()}
        </div>
      </div>

      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Button onClick={likeDisLike} className="button">
            <img className="Like" src={likeButton} alt="Like"></img>
          </Button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button className="button">
            <img className="Like" src="/imgs/icons/Share.png" alt="Share"></img>
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <Input
            type="text"
            placeholder="Nhập bình luận..."
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></Input>
        </div>

        <Button onClick={addComment} color="primary">
          Đăng
        </Button>
      </div>

      <PostLikesModal />
    </div>
  );
}

export default PostFooter;
