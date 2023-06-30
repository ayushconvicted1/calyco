import React from 'react';
import './Table.css'; // Import the CSS file

function Cpc() {
  return (
    <div className='table'>
    <table className="custom-table"> {/* Add the CSS class */}
      <thead>
        <tr>
          <th className="align-right">in %</th>
          <th>Fixed Carbon</th>
          <th>Sulfur</th>
          <th>Ash</th>
          <th>Volatile Matter</th>
          <th>Moisture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='align-left'>Steelmaking & iron foundries</th>
          <td>98-99</td>
          <td>0.5-3</td>
          <td>0.5-1</td>
          <td>0.5-1</td>
          <td>0.5-1</td>
        </tr>
        <tr>
          <th className='align-left'>Aluminum smelting</th>
          <td>98.5-99.5</td>
          <td>1-3</td>
          <td>0.1-0.5</td>
          <td>0.5-1</td>
          <td>0.5-1</td>
        </tr>
        <tr>
          <th className='align-left'>Graphite electode</th>
          <td>98-99</td>
          <td>0.05-0.5</td>
          <td>0.5-1</td>
          <td>0.5-1</td>
          <td>0.5-1</td>
        </tr>
        
      </tbody>
    </table>
    <p className='paragraph-bottom-discription'>*Particle size distribution is 90%.</p>
    </div>
  );
}

export default Cpc;
