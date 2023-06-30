import React from 'react';
import './Table.css'; // Import the CSS file

function Carbon_anode_paste() {
  return (
    <div className='table'>
    <table className="custom-table"> {/* Add the CSS class */}
      <thead>
        <tr>
            <th></th>
          <th>Fixed Carbon</th>
          <th>Ash</th>
          <th>Volatile Matter</th>
          <th>Moisture</th>
          <th>Electrical Resistivity</th>
          <th>Compressive Strength</th>
          <th>Particle Size</th>
        </tr>
        <tr>
            <th></th>
          <th>in %</th>
          <th>in %</th>
          <th>in %</th>
          <th>in %</th>
          <th>in μΩ.cm</th>
          <th>in MPa</th>
          <th>in mm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='align-left'>Aluminum smelting</th>
          <td>94-96</td>
          <td>2-5</td>
          <td>0.5-1.5</td>
          <td>0.5-1.5</td>
          <td>50-65</td>
          <td>14-20</td>
          <td>-</td>
        </tr>
        <tr>
          <th className='align-left'>Graphite electode</th>
          <td>98 &le;</td>
          <td>0.5 &ge;</td>
          <td>1.5 &ge;</td>
          <td>1.5 &ge;</td>
          <td>-</td>
          <td>-</td>
          <td>1.5&ge;
            <br/>
            4.0 &le;
          </td>

        </tr>
        
      </tbody>
    </table>
    <p className='paragraph-bottom-discription'>*Particle size distribution is 90%.</p>
    </div>
  );
}

export default Carbon_anode_paste;
