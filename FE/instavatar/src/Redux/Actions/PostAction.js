import { getAllPostAPI } from "../../API/PostAPI";
import { getAllUsersAPI } from "../../API/UserAPI";
import { GET_ALL_POST } from "../ActionType/PostActionTypes";

const getAllPostsRedux = (posts) => {
  return {
    type: GET_ALL_POST,
    payload: posts,
  };
};

const getAllPosts = () => {
  return (dispatch) => {
    return getAllPostAPI().then((res) => {
      dispatch(getAllPostsRedux(res));
    });
  };
};
export { getAllPosts, getAllPostsRedux };
