import { api } from "./API";

export const getAllItemsAPI = () => {
  return api("GET", "items", null);
};
