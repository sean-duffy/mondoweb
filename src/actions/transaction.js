export const SET_TRANSACTION_STATE = 'SET_TRANSACTION_STATE';

export const SET_TRANSACTION_DATA = 'ADD_TRANSACTION_DATA';

export const SET_SELECTED_TRANSACTION = 'SET_SELECTED_TRANSACTION';

export function setTransactionState(state) {
  return {
    type: SET_TRANSACTION_STATE,
    state
  };
}

export function setTransactionData(data) {
  return {
    type: SET_TRANSACTION_DATA,
    data
  };
}

export function setSelectedTransaction(index) {
  return {
    type: SET_SELECTED_TRANSACTION,
    index
  };
}
