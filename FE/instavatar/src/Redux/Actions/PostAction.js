import { getAllPostAPI, getPostByIdAPI } from "../../API/PostAPI";
import { GET_ALL_POST, GET_POST_BY_ID } from "../ActionType/PostActionTypes";

const getAllPostsRedux = (posts) => {
  return {
    type: GET_ALL_POST,
    payload: posts,
  };
};
const getPostDetailRedux = (post) => {
  return {
    type: GET_POST_BY_ID,
    payload: post,
  };
};
const getPostById = (id) => {
  return (dispatch) => {
    return getPostByIdAPI(id).then((res) => {
      dispatch(getPostDetailRedux(res));
    });
  };
};
const getAllPosts = () => {
  return (dispatch) => {
    return getAllPostAPI().then((res) => {
      dispatch(getAllPostsRedux(res));
    });
  };
};
export { getAllPosts, getAllPostsRedux, getPostById, getPostDetailRedux };
