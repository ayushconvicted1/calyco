import React from 'react';
import './Table.css'; // Import the CSS file

function PelletCokeTable() {
  return (
    <div>
      {/* Table 1: Pellet Coke */}
      <h2 className="tables-headings">Pellet Coke</h2>
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
              <td>Fixed Carbon</td>
              <td>90-95%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>4-7%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>1-2%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>2-4%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>&lt;0.5%</td>
            </tr>
            <tr>
              <td>Bulk Density (g/cm³)</td>
              <td>1.6-1.8</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>5-20 mm (90% min)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Fluid Coke */}
      <h2 className="tables-headings">Fluid Coke</h2>
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
              <td>Fixed Carbon</td>
              <td>85-95%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>0.1-2.0%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>5-15%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>0.5-10%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>0.5-7.0%</td>
            </tr>
            <tr>
              <td>Particle size</td>
              <td>100% passing through 4-mesh (4.75 mm) sieve <br/> at least 80% passing through 10-mesh (2 mm) sieve</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Delayed Coke */}
      <h2 className="tables-headings">Delayed Coke</h2>
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
              <td>Carbon</td>
              <td>90-95%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>0.2-2%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>0.5-6%</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>1-3%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>3-10%</td>
            </tr>
            <tr>
              <td>Real Density (g/cm³)</td>
              <td>2.05-2.15</td>
            </tr>
            <tr>
              <td>Apparent Density (g/cm³)</td>
              <td>0.85-1.45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PelletCokeTable;
