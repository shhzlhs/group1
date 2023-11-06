import { api } from "./API";

const getAllUsersAPI = () => {
  return api("GET", "users", null);
};
const getUserByUsernameAPI = (username) => {
  const url = `users/username=${username}`;
  return api("GET", url, null);
};
const getUserByEmailAPI = (email) => {
  const url = `users/email=${email}`;
  return api("GET", url, null);
};
const getUserIdAPI = (id) => {
  const url = `users/${id}`;
  return api("GET", url, null);
};
const addUserAPI = (user) => {
  return api("POST", "users/", user);
};
const editUserAPI = (id, user) => {
  const url = `users/${id}`;
  return api("PUT", url, user);
};
const deleteUsersAPI = (ids) => {
  const url = `users/${ids}`;
  return api("DELETE", url, null);
};
const changeMoneyByUserAPI = (userId, coinChanged, goldChanged) => {
  const url = `users/changeMoney/${userId}/${coinChanged}/${goldChanged}`;
  return api("PUT", url, null);
};

export {
  getAllUsersAPI,
  getUserByUsernameAPI,
  addUserAPI,
  editUserAPI,
  deleteUsersAPI,
  getUserIdAPI,
  getUserByEmailAPI,
  changeMoneyByUserAPI,
};
