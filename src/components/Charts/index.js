import React from 'react';
import Container from 'components/Container';
import BreakdownChart from 'components/Charts/BreakdownChart';
import { intToAmount, once } from 'lib/utils';
import './style.scss';

export default class Charts extends React.Component {

  constructor() {
    super();

    // Lazy init sidebar & date
    this.initSideMenu = once(this.initSideMenu);

    this.state = {
      account: {
        id: undefined,
        name: '',
        transactions: [],
        filterActive: false,
        filteredTransactions: [],
        balance: '',
        currency: '',
        spentToday: ''
      }
    };
  }

  componentWillMount() {
    // Retrieve inital data
    this.retrieveAccount().then(() => {
      this.retrieveTransactions().then(() => {
        this.calculateBreakdown();
      });
    });
  }

  // Updates the state with the account name (only first account supported atm)
  // This method is copied from components/Accounts, TODO: remove duplication
  retrieveAccount() {
    return new Promise(resolve => {
      $.ajax({
        url: 'https://api.getmondo.co.uk/accounts',
        headers: {
          'Authorization': `Bearer ${localStorage.mondo_access_token}`
        }
      })
      .done(response => {
        this.setState({
          account: Object.assign({}, this.state.account, {
            name: response.accounts[0].description,
            id: response.accounts[0].id
          })
        });
        resolve();
      })
      .fail(err => swal('Error', err.responseJSON ? `${err.responseJSON.message} try logging out and in again` : false
        || 'Internal error, check your network connection, contact me in the menu if this keeps happening', 'error'));
    });
  }

  // Params is a query string starting with '&'
  // This method is copied from components/Accounts, TODO: remove duplication
  retrieveTransactions(params = '') {
    $.ajax({
      url: `https://api.getmondo.co.uk/transactions?expand[]=merchant&account_id=${this.state.account.id}${params}`,
      headers: {
        'Authorization': `Bearer ${localStorage.mondo_access_token}`
      }
    })
    .done(account => {
      this.setState({
        account: Object.assign({}, this.state.account, {
          transactions: account.transactions
        })
      });
    })
    .fail(err => swal('Error', err.responseJSON ? `${err.responseJSON.message} try logging out and in again` : false
      || 'Internal error, check your network connection, contact me in the menu if this keeps happening', 'error'));
  }

  render() {
    if (!localStorage.mondo_access_token) {
      window.location.href = '/';
      return false;
    }

    var categoryTotals = new Map();
    var totalSpend = 0;

    // Get the total spent on each category
    this.state.account.transactions.forEach(function(transaction) {
      if (transaction.amount < 0) {
        if (categoryTotals.has(transaction.category)) {
          // Update the total amount and transform into positive pounds
          categoryTotals.set(transaction.category, categoryTotals.get(transaction.category) + (transaction.amount * -1));
        } else {
          categoryTotals.set(transaction.category, (transaction.amount * -1));
        }
        totalSpend += transaction.amount * -1;
      }
    });

    var breakdownChartData = [];

    categoryTotals.forEach(function(total, category) {
      breakdownChartData.push(
        {
          name: category,
          y: total
        }
      );
    });

    return (
      <Container>
        <div className="row">
          <div className="col s12 m12 l3">
            <div className="border-box">
              <h4>Spending Breakdown</h4>
                <BreakdownChart
                  data={breakdownChartData}
                />
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
}
