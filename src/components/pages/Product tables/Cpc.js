import React from 'react';
import './Table.css'; // Import the CSS file

function Cpc() {
  return (
    <div className='table'>
      <table className="custom-table"> {/* Add the CSS class */}
        <thead>
          <tr>
            <th className="align-right">Specification</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='align-left'>Fixed Carbon</th>
            <td>98.5% min</td>
          </tr>
          <tr>
            <th className='align-left'>Ash</th>
            <td>0.8% max</td>
          </tr>
          <tr>
            <th className='align-left'>Volatiles</th>
            <td>0.5% max</td>
          </tr>
          <tr>
            <th className='align-left'>Sulfur</th>
            <td>0.7% max</td>
          </tr>
          <tr>
            <th className='align-left'>Moisture</th>
            <td>0.5% max</td>
          </tr>
          <tr>
            <th className='align-left'>Grain Size</th>
            <td>Customized</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cpc;
