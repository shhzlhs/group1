import { api } from "./API";

export const getAllTransAPI = () => {
  return api("GET", "trans/", null);
};
export const getTransByUserAPI = (userId) => {
  return api("GET", `trans/user/${userId}`, null);
};
export const addTranAPI = (tran) => {
  return api("POST", "trans/", tran);
};
