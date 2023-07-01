import React from 'react';
import './Table.css'; // Import the CSS file

function Carbon_anode_paste() {
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
            <td>98-99%</td>
          </tr>
          <tr>
            <th className='align-left'>Ash</th>
            <td>0.3-0.5%</td>
          </tr>
          <tr>
            <th className='align-left'>Volatiles</th>
            <td>0.2-0.3%</td>
          </tr>
          <tr>
            <th className='align-left'>Sulfur</th>
            <td>0.02-0.05%</td>
          </tr>
          <tr>
            <th className='align-left'>Moisture</th>
            <td>0.2-0.5%</td>
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

export default Carbon_anode_paste;