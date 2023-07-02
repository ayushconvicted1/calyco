import React from 'react';
import './Table.css'; // Import the CSS file

function FerroAlloysTable() {
  return (
    <div className='table'>
      <table className="custom-table"> {/* Add the CSS class */}
        <thead>
          <tr>
            <th>Alloy Type</th>
            <th>Composition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ferrochrome</td>
            <td>60-75% Chromium</td>
          </tr>
          <tr>
            <td>Ferromanganese</td>
            <td>70-85% Manganese</td>
          </tr>
          <tr>
            <td>Ferrosilicon</td>
            <td>75-95% Silicon</td>
          </tr>
          <tr>
            <td>Ferrotitanium</td>
            <td>60-75% Titanium</td>
          </tr>
          <tr>
            <td>Ferrovanadium</td>
            <td>40-85% Vanadium</td>
          </tr>
          <tr>
            <td>Ferrophosphorus</td>
            <td>18-30% Phosphorus</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FerroAlloysTable;