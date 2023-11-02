import { api } from "./API";

export const getAllGamesAPI = () => {
  return api("GET", "games/", null);
};
