import React from 'react';
import './Table.css'; // Import the CSS file

function FerroAlloysTable() {
  return (
    <div>
      <h2 className="tables-headings">Ferro Manganese Specifications</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Alloy Type</th>
              <th>Manganese</th>
              <th>Carbon</th>
              <th>Silicon</th>
              <th>Phosphorus</th>
              <th>Sulfur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High Carbon Ferro Manganese (HC FeMn)</td>
              <td>70-80%</td>
              <td>6-8%</td>
              <td>≤ 2%</td>
              <td>≤ 0.35%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Medium Carbon Ferro Manganese (MC FeMn)</td>
              <td>70-80%</td>
              <td>1-2%</td>
              <td>≤ 1%</td>
              <td>≤ 0.3%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Low Carbon Ferro Manganese (LC FeMn)</td>
              <td>70-80%</td>
              <td>0.1-1%</td>
              <td>≤ 1.5%</td>
              <td>≤ 0.3%</td>
              <td>≤ 0.03%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="tables-headings">Ferro Silicon Specifications</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Alloy Type</th>
              <th>Silicon</th>
              <th>Iron</th>
              <th>Aluminum</th>
              <th>Calcium</th>
              <th>Phosphorus</th>
              <th>Sulfur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ferro Silicon</td>
              <td>72-80%</td>
              <td>Balance</td>
              <td>≤ 2%</td>
              <td>≤ 1.5%</td>
              <td>≤ 0.04%</td>
              <td>≤ 0.02%</td>
            </tr>
            <tr>
              <td>Ferro Silicon 65</td>
              <td>63-68%</td>
              <td>Balance</td>
              <td>≤ 2%</td>
              <td>≤ 1.5%</td>
              <td>≤ 0.04%</td>
              <td>≤ 0.02%</td>
            </tr>
            <tr>
              <td>Ferro Silicon 45</td>
              <td>40-47%</td>
              <td>Balance</td>
              <td>≤ 2%</td>
              <td>≤ 1.5%</td>
              <td>≤ 0.04%</td>
              <td>≤ 0.02%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="tables-headings">Ferrochrome Specifications</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Alloy Type</th>
              <th>Chromium</th>
              <th>Carbon</th>
              <th>Silicon</th>
              <th>Sulfur</th>
              <th>Phosphorus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High Carbon Ferrochrome (HC)</td>
              <td>60-72%</td>
              <td>4-9%</td>
              <td>≤ 1%</td>
              <td>≤ 0.05%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Medium Carbon Ferrochrome (MC)</td>
              <td>60-70%</td>
              <td>1-4%</td>
              <td>≤ 1%</td>
              <td>≤ 0.05%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Low Carbon Ferrochrome (LC)</td>
              <td>60-70%</td>
              <td>0.1-1%</td>
              <td>≤ 1%</td>
              <td>≤ 0.03%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Extra Low Carbon Ferrochrome</td>
              <td>60-70%</td>
              <td>≤ 0.1%</td>
              <td>≤ 1%</td>
              <td>≤ 0.03%</td>
              <td>≤ 0.03%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="tables-headings">Silico Manganese Specifications</h2>
      <div className='table'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Alloy Type</th>
              <th>Manganese</th>
              <th>Silicon</th>
              <th>Iron</th>
              <th>Carbon</th>
              <th>Phosphorus</th>
              <th>Sulfur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High Carbon Silico Manganese (HC SiMn)</td>
              <td>65-72%</td>
              <td>16-22%</td>
              <td>Balance</td>
              <td>1.5-2.5%</td>
              <td>≤ 0.3%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Medium Carbon Silico Manganese (MC SiMn)</td>
              <td>60-65%</td>
              <td>18-24%</td>
              <td>Balance</td>
              <td>0.5-1.5%</td>
              <td>≤ 0.3%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Low Carbon Silico Manganese (LC SiMn)</td>
              <td>60-65%</td>
              <td>18-24%</td>
              <td>Balance</td>
              <td>≤ 0.5%</td>
              <td>≤ 0.3%</td>
              <td>≤ 0.03%</td>
            </tr>
            <tr>
              <td>Extra Low Carbon Silico Manganese (ELC SiMn)</td>
              <td>60-65%</td>
              <td>18-24%</td>
              <td>Balance</td>
              <td>≤ 0.1%</td>
              <td>≤ 0.3%</td>
              <td>≤ 0.03%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FerroAlloysTable;
