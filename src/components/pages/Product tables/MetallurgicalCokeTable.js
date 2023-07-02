import React from 'react';
import './Table.css'; // Import the CSS file

function MetallurgicalCokeTable() {
  return (
    <div className='table'>
      <table className="custom-table"> {/* Add the CSS class */}
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fixed Carbon</td>
            <td>85-90%</td>
          </tr>
          <tr>
            <td>Volatile Matter</td>
            <td>1-2%</td>
          </tr>
          <tr>
            <td>Ash</td>
            <td>10-13%</td>
          </tr>
          <tr>
            <td>Sulfur</td>
            <td>0.5-0.8%</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>3-5%</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>Customized</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MetallurgicalCokeTable;
