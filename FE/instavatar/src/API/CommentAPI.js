import { api } from "./API";

export const addCommentAPI = (comment) => {
  return api("POST", "comments/", comment);
};
export const getCommentByIdAPI = (id) => {
  let url = "comments/" + id;
  return api("GET", url, null);
};
