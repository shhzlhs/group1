import { api } from "./API";

export const createNotificationAPI = (no) => {
  return api("POST", "notifications/", no);
};
export const updateToReadCompleteAPI = (id) => {
  return api("PUT", `notifications/${id}`, null);
};
export const deleteNotificationAPI = (id) => {
  return api("DELETE", `notifications/${id}`, null);
};
export const getNotificationsByUserIdAPI = (id) => {
  return api("GET", `notifications/${id}`, null);
};
