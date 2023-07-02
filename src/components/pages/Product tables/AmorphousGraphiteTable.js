import React from 'react';
import './Table.css'; // Import the CSS file

function AmorphousGraphiteTable() {
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
            <td>70-85%</td>
          </tr>
          <tr>
            <td>Volatile Matter</td>
            <td>12-18%</td>
          </tr>
          <tr>
            <td>Ash</td>
            <td>2-5%</td>
          </tr>
          <tr>
            <td>Sulfur</td>
            <td>0.05-0.3%</td>
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

export default AmorphousGraphiteTable;
