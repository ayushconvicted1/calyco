import React from 'react';
import './Table.css'; // Import the CSS file

function GraphiteGranulesFines() {
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
            <td>85-98%</td>
          </tr>
          <tr>
            <th className='align-left'>Ash</th>
            <td>1-15%</td>
          </tr>
          <tr>
            <th className='align-left'>Moisture</th>
            <td>1% max</td>
          </tr>
          <tr>
            <th className='align-left'>Particle Size</th>
            <td>Customized</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GraphiteGranulesFines;
