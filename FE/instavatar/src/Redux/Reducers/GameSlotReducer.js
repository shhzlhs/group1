import { GET_SLOTS_BY_USER } from "../ActionType/GameSlotActionType";

export const gameSlotsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SLOTS_BY_USER:
      return [...action.payload];
    default:
      return [...state];
  }
};
