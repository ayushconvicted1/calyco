import React from 'react';
import './Table.css'; // Import the CSS file

function CarbonElectrode() {
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
            <td>95% min</td>
          </tr>
          <tr>
            <th className='align-left'>Ash</th>
            <td>4-10%</td>
          </tr>
          <tr>
            <th className='align-left'>Volatile Matter</th>
            <td>1% max</td>
          </tr>
          <tr>
            <th className='align-left'>Moisture</th>
            <td>0.5% max</td>
          </tr>
          <tr>
            <th className='align-left'>Bulk Density</th>
            <td>1.38-1.42 g/cm³</td>
          </tr>
          <tr>
            <th className='align-left'>Specific Resistance</th>
            <td>55-70 μΩ·m</td>
          </tr>
          <tr>
            <th className='align-left'>Size</th>
            <td>Customized</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CarbonElectrode;
