import React from 'react';
import './Table.css'; // Import the CSS file

function Carbon_anode_paste() {
  return (
    <div>
      {/* Table 1: Carbon Anode Paste General Composition */}
      <h2 className='tables-headings'>Carbon Anode Paste General Composition</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Property</th>
              <th>Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>90-95%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash</th>
              <td>1-4%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>4-8%</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>1-2%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩ·cm)</th>
              <td>45-65 micro-ohm-cm</td>
            </tr>
            <tr>
              <th className='align-left'>Density</th>
              <td>1.5-1.7 g/cm3</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Carbon Anode Paste for Aluminum Smelting */}
      <h2 className='tables-headings'>Carbon Anode Paste for Aluminum Smelting</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Property</th>
              <th>Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>94-96%</td>
            </tr>
            <tr>
              <th className='align-left'>Ash</th>
              <td>2-5%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>0.5-1.5%</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>0.5-1.5%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩ·cm)</th>
              <td>50-65 micro-ohm.meter</td>
            </tr>
            <tr>
              <th className='align-left'>Compressive Strength</th>
              <td>14-20 MPa</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Carbon Anode Paste for Graphite Electrodes */}
      <h2 className='tables-headings'>Carbon Anode Paste for Graphite Electrodes</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="align-right">Property</th>
              <th>Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>98% min</td>
            </tr>
            <tr>
              <th className='align-left'>Ash</th>
              <td>0.5% max</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>1.5% max</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>1.5% max</td>
            </tr>
            <tr>
              <th className='align-left'>Particle Size Distribution</th>
              <td>90% min. between 0.5 and 4.0 mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Carbon_anode_paste;
