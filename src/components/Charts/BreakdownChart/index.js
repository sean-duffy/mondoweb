import React from 'react';
import Highcharts from 'highcharts';
import ReactDOM from 'react';

export default class BreakdownChart extends React.Component {
  
  constructor() {
    super();
    
    this.chart = undefined;
  }

  render() {
    this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: false,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Categories',
        data: this.props.data,
        colorByPoint: true,
      }],
      credits: false
    });

    return (
      <div ref="chart"></div>
    )
  }
}
