import { api } from "./API";

export const addCommentAPI = (comment) => {
  return api("POST", "comments/", comment);
};
