import { getTransByUserAPI } from "../../API/TransactionAPI";
import {
  GET_TRANS_BY_USER,
  SET_COIN_OR_GOLD,
  SET_INPUT_TO_SEARCH_TRANSACTION,
  SET_MAX_DATE,
  SET_MIN_DATE,
  SET_TRAN_TYPE,
} from "./TransactionActionTypes";

export const getTransByUserRedux = (trans) => {
  return { type: GET_TRANS_BY_USER, payload: trans };
};
export const getTransByUserAction = (userId) => {
  return (dispatch) => {
    return getTransByUserAPI(userId).then((res) => {
      dispatch(getTransByUserRedux(res));
    });
  };
};
export const setInputToSearchTran = (input) => {
  return { type: SET_INPUT_TO_SEARCH_TRANSACTION, payload: input };
};
export const setCoinOrGold = (moneyName) => {
  return { type: SET_COIN_OR_GOLD, payload: moneyName };
};

export const setTranType = (type) => {
  return { type: SET_TRAN_TYPE, payload: type };
};
export const setMinDate = (date) => {
  return { type: SET_MIN_DATE, payload: date };
};
export const setMaxDate = (date) => {
  return { type: SET_MAX_DATE, payload: date };
};
