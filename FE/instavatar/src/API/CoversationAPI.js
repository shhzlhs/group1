import { api } from "./API";

export const createCoversationAPI = (con) => {
  return api("POST", "coversations/", con);
};
export const getConversationsByUserIdAPI = (userId) => {
  return api("GET", `conversations/user/${userId}`, null);
};
export const getConversationByUser1AndUser2API = (userId1, userId2) => {
  return api("GET", `conversations/users/${userId1}/${userId2}`, null);
};
export const delByUserAPI = (userId, conId) => {
  return api("PUT", `conversations/${userId}/convers/${conId}`, null);
};
export const deleteConversationByIdAPI = (id) => {
  return api("DELETE", `coversations/${id}/`, null);
};
