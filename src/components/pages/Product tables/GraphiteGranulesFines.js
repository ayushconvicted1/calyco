import React from 'react';
import './Table.css'; // Import the CSS file

function GraphiteGranulesFines() {
  return (
    <div>
      {/* Table 1: Graphite Granules Fines Key Specifications */}
      <h2 className="tables-headings">Graphite Granules Fines Key Specifications</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Specification</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>98-99.5%</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size</th>
              <td>Customized (e.g., 0.1-1mm, 1-5mm, etc.)</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>0.5-1%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash</th>
              <td>0.1-0.5%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>0.5-1%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Graphite Granules Fines - Natural Graphite */}
      <h2 className="tables-headings">Graphite Granules Fines - Natural Graphite</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Specification</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Carbon</th>
              <td>95-99%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash</th>
              <td>1-5%</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>0.5-1%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>0.5-1%</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size</th>
              <td>45 microns to 3 millimeters</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Graphite Granules Fines - Synthetic Graphite */}
      <h2 className="tables-headings">Graphite Granules Fines - Synthetic Graphite</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Specification</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>99.5% min.</td>
            </tr>
            <tr>
              <th className='align-left'>Ash</th>
              <td>0.5% max.</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>0.5% max.</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>0.5% max.</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size Distribution</th>
              <td>Commonly between 1 to 5 microns.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GraphiteGranulesFines;
