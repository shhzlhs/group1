import {
  GET_TRANS_BY_USER,
  SET_COIN_OR_GOLD,
  SET_INPUT_TO_SEARCH_TRANSACTION,
  SET_MAX_DATE,
  SET_MIN_DATE,
  SET_TRAN_TYPE,
} from "../ActionType/TransactionActionTypes";

export const transactionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TRANS_BY_USER:
      return [...action.payload];
    default:
      return [...state];
  }
};
export const inputToSearchTranReducer = (state = "", action) => {
  switch (action.type) {
    case SET_INPUT_TO_SEARCH_TRANSACTION:
      return action.payload;
    default:
      return state;
  }
};
export const coinOrGoldReducer = (state = "", action) => {
  switch (action.type) {
    case SET_COIN_OR_GOLD:
      return action.payload;
    default:
      return state;
  }
};
export const tranTypeReducer = (state = "", action) => {
  switch (action.type) {
    case SET_TRAN_TYPE:
      return action.payload;
    default:
      return state;
  }
};
export const minDateReducer = (state = new Date("2022-01-01"), action) => {
  switch (action.type) {
    case SET_MIN_DATE:
      return action.payload;
    default:
      return state;
  }
};

export const maxDateReducer = (state = new Date(), action) => {
  switch (action.type) {
    case SET_MAX_DATE:
      return action.payload;
    default:
      return state;
  }
};
