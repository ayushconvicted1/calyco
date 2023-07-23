import React from 'react';
import './Table.css'; // Import the CSS file

function AmorphousGraphiteTable() {
  return (
    <div>
      {/* Table 1: Flake Amorphous Graphite */}
      <h2 className="tables-headings">Flake Amorphous Graphite</h2>
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
              <td>70-85%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>0.5-1.5%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>5-12%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>3-8%</td>
            </tr>
            <tr>
              <td>Particle Size</td>
              <td>80-200 mesh or as per customer requirement</td>
            </tr>
            <tr>
              <td>Bulk Density (g/cm3)</td>
              <td>0.45-0.65</td>
            </tr>
            <tr>
              <td>pH Value</td>
              <td>6-8</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Lump Amorphous Graphite */}
      <h2 className="tables-headings">Lump Amorphous Graphite</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fixed Carbon</td>
              <td>60-85%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>5-18%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>4-8%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>1-3%</td>
            </tr>
            <tr>
              <td>Particle Size</td>
              <td>0-500mm</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Granular Amorphous Graphite */}
      <h2 className="tables-headings">Granular Amorphous Graphite</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fixed Carbon</td>
              <td>80-85%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>10-15%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>1% max</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>2-5%</td>
            </tr>
            <tr>
              <td>Particle Size</td>
              <td>0.5-6mm (90% min)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 4: Fine Powder Amorphous Graphite */}
      <h2 className="tables-headings">Fine Powder Amorphous Graphite</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Properties</th>
              <th>Range/Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fixed Carbon</td>
              <td>70% - 85%</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>5% - 15%</td>
            </tr>
            <tr>
              <td>Volatile Matter</td>
              <td>2% - 12%</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>0.5% - 3%</td>
            </tr>
            <tr>
              <td>Particle Size</td>
              <td>45 microns - 500 microns</td>
            </tr>
            <tr>
              <td>Bulk Density (g/cm3)</td>
              <td>0.3 - 0.8 (customizable)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AmorphousGraphiteTable;
