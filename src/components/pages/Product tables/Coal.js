import React from 'react';
import './Table.css'; // Import the CSS file

function CoalTable() {
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
            <td>40-90%</td>
          </tr>
          <tr>
            <td>Volatile Matter</td>
            <td>5-50%</td>
          </tr>
          <tr>
            <td>Ash</td>
            <td>1-40%</td>
          </tr>
          <tr>
            <td>Sulfur</td>
            <td>0.1-5%</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>1-30%</td>
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

export default CoalTable;
