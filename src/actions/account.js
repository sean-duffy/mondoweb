export const SET_ACCOUNT_ID = 'SET_ACCOUNT_ID';

export const SET_ACCOUNT_NAME = 'SET_ACCOUNT_NAME';

export const SET_ACCOUNT_BALANCE = 'SET_ACCOUNT_BALANCE';

export const SET_ACCOUNT_CURRENCY = 'SET_ACCOUNT_CURRENCY';

export const SET_ACCOUNT_SPEND_TODAY = 'SET_ACCOUNT_SPEND_TODAY';

export const SET_ACCOUNT_TRANSACTIONS = 'SET_ACCOUNT_TRANSACTIONS';

export const SET_ACCOUNT_TRANSACTION_FILTER = 'SET_ACCOUNT_TRANSACTION_FILTER';

export const SET_ACCOUNT_FILTERED_TRANSACTIONS = 'SET_ACCOUNT_FILTERED_TRANSACTIONS';

export function setAccountId(id) {
  return {
    type: SET_ACCOUNT_ID,
    id
  };
}

export function setAccountName(name) {
  return {
    type: SET_ACCOUNT_NAME,
    name
  };
}

export function setAccountBalance(balance) {
  return {
    type: SET_ACCOUNT_BALANCE,
    balance
  };
}

export function setAccountCurrency(currency) {
  return {
    type: SET_ACCOUNT_ID,
    currency
  };
}

export function setAccountSpendToday(spendToday) {
  return {
    type: SET_ACCOUNT_SPEND_TODAY,
    spendToday
  };
}

export function setAccountTransactions(transactions) {
  return {
    type: SET_ACCOUNT_TRANSACTIONS,
    transactions
  };
}

export function setAccountTransactionFilter(text) {
  return {
    type: SET_ACCOUNT_TRANSACTION_FILTER,
    text
  };
}

export function setAccountFilteredTransactions(transactions) {
  return {
    type: SET_ACCOUNT_FILTERED_TRANSACTIONS,
    transactions
  };
}
