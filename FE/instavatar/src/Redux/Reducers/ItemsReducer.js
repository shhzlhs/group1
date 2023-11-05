import {
  GET_ALL_ITEMS,
  SET_COIN_GOLD_STORE,
  SET_ITEM_TYPE_STORE,
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
