import 'actions/account';
import 'actions/transaction';

const initialState = {
  selectedTransaction: 0,
  filter: '',
  filteredTransactions: [],
  transactionOverview: {
    state: '',
    data: {}
  },
  account: {
    id: undefined,
    name: '',
    transactions: [],
    balance: '',
    currency: '',
    spendToday: ''
  }
};

export function mondoWeb(state = initialState, action) {
  switch (action.type) {

    case SET_ACCOUNT_ID:
      return Object.assign({}, state, {
        account: Object.assign({}, state.account, {
          id: action.id
        })
      });

    case SET_ACCOUNT_NAME:
      return Object.assign({}, state, {
        account: Object.assign({}, state.account, {
          name: action.name
        })
      });

    case SET_ACCOUNT_BALANCE:
      return Object.assign({}, state, {
        account: Object.assign({}, state.account, {
          balance: action.balance
        })
      });

    case SET_ACCOUNT_CURRENCY:
      return Object.assign({}, state, {
        account: Object.assign({}, state.account, {
          currency: action.currency
        })
      });

    case SET_ACCOUNT_SPEND_TODAY:
      return Object.assign({}, state, {
        account: Object.assign({}, state.account, {
          spendToday: action.spendToday
        })
      });

    case SET_ACCOUNT_TRANSACTIONS:
      return Object.assign({}, state, {
        account: Object.assign({}, state.account, {
          transactions: action.transactions
        })
      });

    case SET_ACCOUNT_TRANSACTION_FILTER:
      return Object.assign({}, state, {
        filter: action.text
      });

    case SET_ACCOUNT_FILTERED_TRANSACTIONS:
      return Object.assign({}, state, {
        filteredTransactions: action.transactions
      });

    case SET_TRANSACTION_STATE:
      return Object.assign({}, state, {
        transactionOverview: Object.assign({}, state.transactionOverview, {
          state: action.state
        })
      });

    case SET_TRANSACTION_DATA:
      return Object.assign({}, state, {
        transactionOverview: Object.assign({}, state.transactionOverview, {
          data: action.data
        })
      });

    case SET_SELECTED_TRANSACTION:
      return Object.assign({}, state, {
        selectedTransaction: action.index
      });

    default:
      return state;
  }
  
}
