import { api } from "./API";

const getAllPostAPI = () => {
  return api("GET", "posts", null);
};
const getPostsByUserAPI = (username) => {
  let url = `posts/post_user/${username}`;
  return api("GET", url, null);
};
const getPostsFollowingsAPI = (usernames) => {
  let url = `posts/post_users/${usernames}`;
  return api("GET", url, null);
};
const getPostByIdAPI = (id) => {
  let url = "posts/" + id;
  return api("GET", url, null);
};
const createPostAPI = (post) => {
  return api("POST", "posts/", post);
};
export {
  getAllPostAPI,
  getPostsByUserAPI,
  getPostsFollowingsAPI,
  getPostByIdAPI,
  createPostAPI,
};
