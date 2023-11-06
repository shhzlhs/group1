import {
  GET_ALL_GAMES,
  SET_GAME_TO_BUY_SLOT,
} from "../ActionType/GameActionTypes";

export const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return [...action.payload];
    default:
      return [...state];
  }
};
export const gameToBuySlotReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GAME_TO_BUY_SLOT:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
