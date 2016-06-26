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
      breakdownChartData: [
        {
          name: 'Microsoft Internet Explorer',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2
        }
      ]
    };

  }

  render() {
    if (!localStorage.mondo_access_token) {
      window.location.href = '/';
      return false;
    }

    const { breakdownChartData } = this.state;

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
