import { api } from "./API";

export const deleteUserItemAPI = (userId, itemId) => {
  let url = `userItems/${userId},${itemId}`;
  return api("DELETE", url, null);
};
export const addUserItemAPI = (userId, itemId) => {
  let url = `userItems/${userId}/${itemId}`;
  return api("POST", url, null);
};
export const getUserItemByUserIdAndItemIdAPI = (userId, itemId) => {
  let url = `userItems/${userId},${itemId}`;
  return api("GET", url, null);
};
