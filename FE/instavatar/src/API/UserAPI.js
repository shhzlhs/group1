import { api } from "./API";

const getAllUsersAPI = () => {
  return api("GET", "users", null);
};
const getUserByUsernameAPI = (username) => {
  const url = `users/${username}`;
  return api("GET", url, null);
};

const addUserAPI = (user) => {
  return api("POST", "users/", user);
};
const editUserAPI = (user) => {
  const url = `users/${user.id}`;
  return api("PUT", url, user);
};
const deleteUsersAPI = (ids) => {
  const url = `users/${ids}`;
  return api("DELETE", url, null);
};
export {
  getAllUsersAPI,
  getUserByUsernameAPI,
  addUserAPI,
  editUserAPI,
  deleteUsersAPI,
};
