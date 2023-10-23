import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../../Redux/Actions/PostAction";
import "./PostPage.css";
import { Button } from "reactstrap";
import { formatRelativeTime, parseDateString } from "../../../../Funtions";
function PostsPage(props) {
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getAllPosts());
  }, []);
  let posts = useSelector((state) => state.posts);
  posts.sort((a, b) => b.likes.length - a.likes.length);

  let items = posts.map((post, index) => {
    let avatar = `/imgs/avatars/${post.userAvatar}`;
    let postImg = `/imgs/post_imgs/${post.image}`;
    let date = parseDateString(post.createdAt);
    let timestamp = formatRelativeTime(date);
    return (
      <div key={index} id="Post" className="row">
        <div id="PostHeader">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <img className="PostAvatar" src={avatar} alt={post.userUsername} />
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
          <img id="PostImg" src={postImg} alt="Lỗi tải ảnh"></img>
        </div>

        <div id="PostFooter" className="row">
          <img
            className="PostIcon"
            src="/imgs/icons/Like.png"
            alt="LIKEs"
          ></img>
          {post.likes.length}

          <img
            className="PostIcon"
            src="/imgs/icons/Comment.png"
            alt="COMMENTS"
          ></img>
          {post.comments.length}
          <br></br>
          <Button
            onClick={() => {
              alert("Hãy đăng nhập để kết nối với mọi người nhé!");
            }}
          >
            Xem thêm
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div id="PostPage" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      {items}
    </div>
  );
}

export default PostsPage;
