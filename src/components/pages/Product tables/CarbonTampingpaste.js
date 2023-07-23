import React from 'react';
import './Table.css'; // Import the CSS file

function CarbonTampingpaste() {
  return (
    <div>
      {/* Table 1: Carbon Tamping Paste General Composition */}
      <h2 className='tables-headings'>Carbon Tamping Paste General Composition</h2>
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
              <th className='align-left'>Ash</th>
              <td>2-8%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>10-18%</td>
            </tr>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>75-85%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩm)</th>
              <td>60-100</td>
            </tr>
            <tr>
              <th className='align-left'>Softening Point of the Binder (°C)</th>
              <td>80-120°C</td>
            </tr>
            <tr>
              <th className='align-left'>Compressive Strength (MPa)</th>
              <td>15-25</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Low-Ash Carbon Tamping Paste */}
      <h2 className='tables-headings'>Low-Ash Carbon Tamping Paste</h2>
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
              <th className='align-left'>Ash</th>
              <td>0.5-3%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>8-14%</td>
            </tr>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>80-90%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩm)</th>
              <td>50-90</td>
            </tr>
            <tr>
              <th className='align-left'>Softening Point of the Binder (°C)</th>
              <td>80-120°C</td>
            </tr>
            <tr>
              <th className='align-left'>Compressive Strength (MPa)</th>
              <td>18-28</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: High-Density Carbon Tamping Paste */}
      <h2 className='tables-headings'>High-Density Carbon Tamping Paste</h2>
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
              <th className='align-left'>Ash</th>
              <td>2-6%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>10-15%</td>
            </tr>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>80-88%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩm)</th>
              <td>50-80</td>
            </tr>
            <tr>
              <th className='align-left'>Softening Point of the Binder (°C)</th>
              <td>80-120°C</td>
            </tr>
            <tr>
              <th className='align-left'>Compressive Strength (MPa)</th>
              <td>20-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarbonTampingpaste;
