import { api } from "./API";

export const createMessageAPI = (mess) => {
  return api("POST", "messages/", mess);
};
export const getMessagesByConversationIdAPI = (conId) => {
  return api("GET", `messages/${conId}`, null);
};
export const getLastMessageByUserIdAPI = (userId) => {
  return api("GET", `messages/last/${userId}/`, null);
};
export const getNumberOfNotReadYetMessagesByUserIdAndConversationId = (
  userId,
  conId
) => {
  return api("GET", `messages/${userId}/convers/${conId}`, null);
};
export const delMessageById = (id) => {
  return api("DELETE", `messages/${id}/`, null);
};
export const delByUserIdAndMessageIdAPI = (userId, messId) => {
  return api("PUT", `messages/user/${userId}/message/${messId}/`, null);
};
