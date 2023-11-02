import { api } from "./API";

export const addGameSlotsByUserAPI = (userId) => {
  const url = `gameSlots/user/${userId}`;
  return api("POST", url, null);
};
export const getGameSlotsByUserAPI = (userId) => {
  const url = `gameSlots/user/${userId}`;
  return api("GET", url, null);
};

export const changeSlotByUserAndGameAPI = (userId, gameId, slotChanged) => {
  const url = `gameSlots/user/game/${userId}/${gameId}/${slotChanged}`;
  return api("PUT", url, null);
};
