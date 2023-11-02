import {
  changeSlotByUserAndGameAPI,
  getGameSlotsByUserAPI,
} from "../../API/GameSlotAPI";
import { GET_SLOTS_BY_USER } from "../ActionType/GameSlotActionType";

export const getGameSlotsByUserRedux = (gameSlots) => {
  return { type: GET_SLOTS_BY_USER, payload: gameSlots };
};
export const getGameSlotByUserAction = (userId) => {
  return (dispatch) => {
    return getGameSlotsByUserAPI(userId).then((res) => {
      dispatch(getGameSlotsByUserRedux(res));
    });
  };
};
export const changeSlotByUserAndGameAction = (userId, gameId, slotChanged) => {
  return (dispatch) => {
    changeSlotByUserAndGameAPI(userId, gameId, slotChanged).then(() => {
      return getGameSlotsByUserAPI(userId).then((res) => {
        dispatch(getGameSlotsByUserRedux(res));
      });
    });
  };
};
