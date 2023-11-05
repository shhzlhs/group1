import { getAllItemsAPI } from "../../API/ItemAPI";
import {
  GET_ALL_ITEMS,
  SET_COIN_GOLD_STORE,
  SET_ITEM_TYPE_STORE,
} from "../ActionType/StoreActionTypes";

export const getAllItemsRedux = (items) => {
  return { type: GET_ALL_ITEMS, payload: items };
};
export const getAllItemsAction = () => {
  return (dispatch) => {
    return getAllItemsAPI().then((res) => {
      dispatch(getAllItemsRedux(res));
    });
  };
};
export const setCoinGoldStoreToFilterAction = (coinOrGold) => {
  return { type: SET_COIN_GOLD_STORE, payload: coinOrGold };
};
export const setItemTypeToFilterAction = (type) => {
  return { type: SET_ITEM_TYPE_STORE, payload: type };
};
