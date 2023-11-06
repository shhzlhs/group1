import { getAllGamesAPI } from "../../API/GameAPI";
import {
  GET_ALL_GAMES,
  SET_GAME_TO_BUY_SLOT,
} from "../ActionType/GameActionTypes";

export const getAllGameRedux = (games) => {
  return { type: GET_ALL_GAMES, payload: games };
};
export const getAllGameAction = () => {
  return (dispatch) => {
    return getAllGamesAPI().then((res) => {
      dispatch(getAllGameRedux(res));
    });
  };
};
export const setGameToBySlotAction = (game) => {
  return { type: SET_GAME_TO_BUY_SLOT, payload: game };
};
