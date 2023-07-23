import React from 'react';
import './Table.css'; // Import the CSS file

function MetallurgicalCokeTable() {
  return (
    <div>
      {/* Table 1: Blast Furnace Coke */}
      <h2 className="tables-headings">Blast Furnace Coke</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Size</td>
              <td>40-80mm (may vary depending on the requirement)</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>9-13%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>1-1.5%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>≤ 0.65%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>≤ 5%</td>
            </tr>
            <tr>
              <td>Calorific value (Kcal/kg)</td>
              <td>7200-7600</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Foundry Coke */}
      <h2 className="tables-headings">Foundry Coke</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Size</td>
              <td>80-120mm (may vary depending on the requirement)</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>8-10%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>1.5-2%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>≤ 0.65%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>≤ 5%</td>
            </tr>
            <tr>
              <td>Calorific value (Kcal/kg)</td>
              <td>7200-7600</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Nut Coke */}
      <h2 className="tables-headings">Nut Coke</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Size</td>
              <td>10-40mm (may vary depending on the requirement)</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>9-13%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>1-1.5%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>≤ 0.65%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>≤ 5%</td>
            </tr>
            <tr>
              <td>Calorific value (Kcal/kg)</td>
              <td>7200-7600</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 4: Breeze Coke */}
      <h2 className="tables-headings">Breeze Coke</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Size</td>
              <td>0-10mm (may vary)</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>9-13%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>1-1.5%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>≤ 0.65%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>≤ 5%</td>
            </tr>
            <tr>
              <td>Calorific value (Kcal/kg)</td>
              <td>7200-7600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MetallurgicalCokeTable;
