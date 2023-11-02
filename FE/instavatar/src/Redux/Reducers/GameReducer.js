import { GET_ALL_GAMES } from "../ActionType/GameActionTypes";

export const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return [...action.payload];
    default:
      return [...state];
  }
};
