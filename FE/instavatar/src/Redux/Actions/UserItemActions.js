import { SET_USER_ITEM_DETAIL } from "../ActionType/UserItemActionType";

export const setUserItemDetail = (item) => {
  return { type: SET_USER_ITEM_DETAIL, payload: item };
};
