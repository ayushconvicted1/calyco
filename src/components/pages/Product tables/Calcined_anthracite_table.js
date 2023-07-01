import React from 'react';
import './Table.css'; // Import the CSS file

function CalcinedAnthraciteTable() {
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
            <td>90-95%</td>
          </tr>
          <tr>
            <th className='align-left'>Sulfur</th>
            <td>0.2-0.6%</td>
          </tr>
          <tr>
            <th className='align-left'>Ash</th>
            <td>4-8%</td>
          </tr>
          <tr>
            <th className='align-left'>Volatile Matter</th>
            <td>0.5-1.5%</td>
          </tr>
          <tr>
            <th className='align-left'>Moisture</th>
            <td>0.5-1%</td>
          </tr>
          <tr>
            <th className='align-left'>Grain Size</th>
            <td>Customized</td>
          </tr>
        </tbody>
      </table>
      {/* <p className='paragraph-bottom-description'>*Particle size distribution is 90%.</p> */}
    </div>
  );
}

export default CalcinedAnthraciteTable;
