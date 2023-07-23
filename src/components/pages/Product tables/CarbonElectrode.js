import React from 'react';
import './Table.css'; // Import the CSS file

function CarbonElectrode() {
  return (
    <div>
      {/* Table 1: Carbon Electrode Paste for Steel Production */}
      <h2  className='tables-headings'>Carbon Electrode Paste for Steel Production</h2>
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
              <td>2-15%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>8-15%</td>
            </tr>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>80-90%</td>
            </tr>
            <tr>
              <th className='align-left'>Sulfur</th>
              <td>0.05-0.25%</td>
            </tr>
            <tr>
              <th className='align-left'>Moisture</th>
              <td>2-5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Carbon Electrode Paste for Ferroalloy Production */}
      <h2  className='tables-headings'>Carbon Electrode Paste for Ferroalloy Production</h2>
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
              <td>12-18%</td>
            </tr>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>76-84%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩm)</th>
              <td>55-90</td>
            </tr>
            <tr>
              <th className='align-left'>Softening Point of the Binder (°C)</th>
              <td>80-120°C</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 3: Carbon Electrode Paste for Calcium Carbide Production */}
      <h2  className='tables-headings'>Carbon Electrode Paste for Calcium Carbide Production</h2>
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
              <td>2-7%</td>
            </tr>
            <tr>
              <th className='align-left'>Volatile Matter</th>
              <td>12-18%</td>
            </tr>
            <tr>
              <th className='align-left'>Fixed Carbon</th>
              <td>76-84%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩm)</th>
              <td>60-100</td>
            </tr>
            <tr>
              <th className='align-left'>Softening Point of the Binder (°C)</th>
              <td>80-120°C</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 4: Other Carbon Electrode Paste */}
      <h2  className='tables-headings'>Other Carbon Electrode Paste</h2>
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
              <td>82-89%</td>
            </tr>
            <tr>
              <th className='align-left'>Electrical Resistivity (μΩm)</th>
              <td>45-75</td>
            </tr>
            <tr>
              <th className='align-left'>Softening Point of the Binder (°C)</th>
              <td>80-120°C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarbonElectrode;
