import {
  GET_ALL_ITEMS,
  SET_COIN_GOLD_STORE,
  SET_ITEM_TO_BUY,
  SET_ITEM_TYPE_STORE,
  SET_USER_TO_GIVE,
} from "../ActionType/StoreActionTypes";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return [...action.payload];
    default:
      return [...state];
  }
};
export const coinOrGoldStoreToFilterReducer = (state = "", action) => {
  switch (action.type) {
    case SET_COIN_GOLD_STORE:
      return action.payload;
    default:
      return state;
  }
};
export const itemTypeStoreReducer = (state = "", action) => {
  switch (action.type) {
    case SET_ITEM_TYPE_STORE:
      return action.payload;
    default:
      return state;
  }
};
export const itemToBuyReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ITEM_TO_BUY:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
export const userToGiveItemReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_TO_GIVE:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
