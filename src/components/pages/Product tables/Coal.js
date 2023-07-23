import React from 'react';
import './Table.css'; // Import the CSS file

function CoalTable() {
  return (
    <div>
      <h2 className="tables-headings">Coal Specifications</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Specifications</th>
              <th>RB2 South Africa (typical)</th>
              <th>Indonesia (typical)</th>
              <th>Russia (typical)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Moisture (ARB)</td>
              <td>9% Max</td>
              <td>29.06% (ARB)</td>
              <td>2% (ARB)</td>
            </tr>
            <tr>
              <td>Inherent Moisture</td>
              <td>2-4%</td>
              <td>15.68% (ADB)</td>
              <td></td>
            </tr>
            <tr>
              <td>Ash (ADB)</td>
              <td>19+/-1%</td>
              <td>4.27% (ADB)</td>
              <td>12-12.2% (ADB)</td>
            </tr>
            <tr>
              <td>Volatile Matter (ADB)</td>
              <td>21-28%</td>
              <td>40.28% (ADB)</td>
              <td>22-22.5% (ADB)</td>
            </tr>
            <tr>
              <td>Sulphur (ADB)</td>
              <td>0.80% Max</td>
              <td>0.4% (ADB)</td>
              <td>0.41% (ADB)</td>
            </tr>
            <tr>
              <td>Net Calorific Value (ARB)</td>
              <td>5,500 KCAL/KG</td>
              <td>4,200 KCAL/KG (ADB)</td>
              <td>7,392 KCAL/KG (ADB)</td>
            </tr>
            <tr>
              <td>Fixed Carbon</td>
              <td>By difference</td>
              <td>27 By difference</td>
              <td>By difference</td>
            </tr>
            <tr>
              <td>Nominal Top Size</td>
              <td>50 mm</td>
              <td>48 mm</td>
              <td>48 mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoalTable;
