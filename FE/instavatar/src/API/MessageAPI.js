import { api } from "./API";

export const createMessageAPI = (mess) => {
  return api("POST", "messages/", mess);
};
export const getMessagesByConversationIdAPI = (conId) => {
  return api("GET", `messages/${conId}`, null);
};
export const getLastMessageByUserIdAPI = (userId) => {
  return api("GET", `messages/last/${userId}`, null);
};
export const getNumberOfNotReadYetMessagesByUserIdAPI = (userId) => {
  return api("GET", `messages/notRead/user/${userId}`, null);
};
export const getListNumberOfNotReadMessageByUserAPI = (userId) => {
  return api("GET", `messages/notReadList/user/${userId}`, null);
};
export const delMessageById = (id) => {
  return api("DELETE", `messages/${id}/`, null);
};
export const delMessByUserIdAndMessageIdAPI = (userId, messId) => {
  return api("PUT", `messages/user/${userId}/message/${messId}/`, null);
};
export const delMessesAllByUserAndConverAPI = (userId, conId) => {
  return api("PUT", `messages/delAll/user/${userId}/convers/${conId}`, null);
};
export const updateToReadCompleteByConversationAndUserAPI = (conId, userId) => {
  return api("PUT", `messages/convers/${conId}/user/${userId}`, null);
};
