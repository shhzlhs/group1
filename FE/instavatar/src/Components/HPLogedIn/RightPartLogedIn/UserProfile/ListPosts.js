import React from "react";
import { useSelector } from "react-redux";
import { parseDateString } from "../../../../Funtions";
import { Link } from "react-router-dom";
import "./UserProfile.css";
function ListPosts(props) {
  let userDetail = useSelector((state) => state.userDetail);
  let posts = userDetail ? userDetail.posts : [];
  if (posts && posts.length > 0) {
    posts.sort((postA, postB) => {
      const dateA = parseDateString(postA.createdAt);
      const dateB = parseDateString(postB.createdAt);
      return dateB - dateA;
    });
  }
  let items = posts
    ? posts.map((post, index) => {
        let image = "/imgs/post_imgs/" + post.image;
        let url = "/instavatar/logedIn/post/" + post.id;
        return (
          <Link key={index} to={url}>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="EachPostImg" src={image} alt={post.id}></img>
            </div>
          </Link>
        );
      })
    : "Chưa có bài viết nào";
  return <div className="ListImgs">{items}</div>;
}

export default ListPosts;
