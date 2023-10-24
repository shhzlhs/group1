import { api } from "./API";

export const addFollowAPI = (follow) => {
  return api("POST", "follows/", follow);
};
export const unFollowAPI = (followerId, followingId) => {
  return api("DELETE", `follows/${followerId},${followingId}`, null);
};
