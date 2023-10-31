import { api } from "./API";

export const createCoversationAPI = (con) => {
  return api("POST", "conversations/", con);
};
export const getConversationsByUserIdAPI = (userId) => {
  return api("GET", `conversations/user/${userId}`, null);
};
export const getConversationByUser1AndUser2API = (userId1, userId2) => {
  return api("GET", `conversations/users/${userId1}/${userId2}`, null);
};
export const delConversationByUserAPI = (userId, conId) => {
  return api("PUT", `conversations/user/${userId}/convers/${conId}`, null);
};
export const recoverConversationByUserAPI = (userId, conId) => {
  return api(
    "PUT",
    `conversations/recover/user/${userId}/convers/${conId}`,
    null
  );
};
export const deleteConversationByIdAPI = (id) => {
  return api("DELETE", `conversations/${id}`, null);
};
