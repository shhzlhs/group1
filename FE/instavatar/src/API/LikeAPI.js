import { api } from "./API";

const disLikeAPI = (id) => {
  const url = `likes/${id}`;
  return api("DELETE", url, null);
};
const likeAPI = (like) => {
  return api("POST", "likes/", like);
};
export { likeAPI, disLikeAPI };
