import React from 'react';
import './Table.css'; // Import the CSS file

function PelletCokeTable() {
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
            <td>80-90%</td>
          </tr>
          <tr>
            <td>Volatile Matter</td>
            <td>2-4%</td>
          </tr>
          <tr>
            <td>Ash</td>
            <td>8-12%</td>
          </tr>
          <tr>
            <td>Sulfur</td>
            <td>0.5-1%</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>1-3%</td>
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

export default PelletCokeTable;
