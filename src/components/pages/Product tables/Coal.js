import React from 'react';
import './Table.css'; // Import the CSS file

function Coal() {
  return (
    <div className='table'>
    <table className="custom-table"> {/* Add the CSS class */}
      <thead>
        <tr>
            <th></th>
          <th>Carbon</th>
          <th>Sulfur ADB</th>
          <th>Ash</th>
          <th>Volatile Matter</th>
          <th>Total Moisture ARB</th>
          <th>Inherent Moisture</th>
          <th>Net Calorific Value ARB</th>
          <th>Nominal Top Size</th>
        </tr>
        <tr>
            <th></th>
          <th >by difference</th>
          <th>in %</th>
          <th>in %</th>
          <th>in %</th>
          <th>in %</th>
          <th>in kcal</th>
          <th>in mm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='align-left'>RB2 South Africa (typical)</th>
          <td>-</td>
          <td>0.80 Max</td>
          <td>19+/-1</td>
          <td>21-28</td>
          <td>9 Max</td>
          <td>2-4</td>
          <td>5,500</td>
          <td>50</td>
        </tr>
        <tr>
          <th className='align-left'>Indonesia (typical)</th>
          <td>27</td>
          <td>0.4(ADB)</td>
          <td>4.27 (ADB)</td>
          <td>40.28 (ADB)</td>
          <td>29.06 (ARB)</td>
          <td>15.68  (ADB)</td>
          <td>4,200(ADB)</td>
          <td>48</td>
        </tr>
        <tr>
          <th className='align-left'>Russia (typical)</th>
          <td>-</td>
          <td>0.41  (ADB)</td>
          <td>12 - 12.2 (ADB)</td>
          <td>22 - 22.5 (ADB)</td>
          <td>0.5-1</td>
          <td>2 (ARB)</td>
          <td>-</td>
          <td>7,392(ADB)</td>
          <td>48</td>
        </tr>
        
      </tbody>
    </table>
    <p className='paragraph-bottom-discription'>*Particle size distribution is 90%.</p>
    </div>
  );
}

export default Coal;
