import React from 'react';
import './Table.css'; // Import the CSS file

function CarbonRaiser() {
  return (
    <div>
      {/* Table 1: Graphite Carbon Raiser */}
      <h2 className='tables-headings'>Graphite Carbon Raiser</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Composition</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Carbon Content</th>
              <td>95% to 99%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash Content</th>
              <td>Usually below 1%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>Generally below 1%</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size</th>
              <td>Varies or Customized</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Petroleum Coke Carbon Raiser */}
      <h2 className='tables-headings'>Petroleum Coke Carbon Raiser</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Composition</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Carbon Content</th>
              <td>85% to 95%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash Content</th>
              <td>Usually below 1%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>Generally below 15%</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size</th>
              <td>Varies or Customized</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Coal Base Carbon Raiser */}
      <h2 className='tables-headings'>Coal Base Carbon Raiser</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Composition</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Carbon Content</th>
              <td>75% to 90%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash Content</th>
              <td>Usually below 5%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>Generally below 25%</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size</th>
              <td>Varies or Customized</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarbonRaiser;
