import { defaultItem } from "../../Defaults";
import { SET_USER_ITEM_DETAIL } from "../ActionType/UserItemActionType";

export const userItemDetailReducer = (state = defaultItem, action) => {
  switch (action.type) {
    case SET_USER_ITEM_DETAIL:
      return { ...action.payload };
    default:
      return state;
  }
};
