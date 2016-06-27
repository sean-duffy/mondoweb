import React from 'react';

export default class TopMerchants extends React.Component {
  
  constructor() {
    super();
    
  }

  render() {

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.props.merchants.map(function(merchant, i) {
            return (
              <tr>
                <th>{i+1}.</th>
                <td>{merchant.name}</td>
                <td className="secondary-color-text">{merchant.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }
}
