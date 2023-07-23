import React from 'react';
import '../Pages.css';

function CarbonTampingPasteGraph() {
  // Updated data for each type of Carbon Tamping Paste
  const data = [
    {
      heading: 'Carbon Tamping Paste:',
      composition: [
        { name: 'Ash', range: '2-8%', height: 160 },
        { name: 'Volatile Matter', range: '10-18%', height: 120 },
        { name: 'Fixed Carbon', range: '75-85%', height: 200 },
        { name: 'Electrical Resistivity (μΩm)', range: '60-100 μΩm', height: 150 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
        { name: 'Compressive Strength (MPa)', range: '15-25 MPa', height: 200 },
      ]
    },
    {
      heading: 'Low-ash paste:',
      composition: [
        { name: 'Ash', range: '0.5-3%', height: 130 },
        { name: 'Volatile Matter', range: '8-14%', height: 100 },
        { name: 'Fixed Carbon', range: '80-90%', height: 180 },
        { name: 'Electrical Resistivity (μΩm)', range: '50-90 μΩm', height: 160 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
        { name: 'Compressive Strength (MPa)', range: '18-28 MPa', height: 200 },
      ]
    },
    {
      heading: 'High-density carbon tamping paste:',
      composition: [
        { name: 'Ash', range: '2-6%', height: 130 },
        { name: 'Volatile Matter', range: '10-15%', height: 100 },
        { name: 'Fixed Carbon', range: '80-88%', height: 180 },
        { name: 'Electrical Resistivity (μΩm)', range: '50-80 μΩm', height: 160 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
        { name: 'Compressive Strength (MPa)', range: '20-30 MPa', height: 200 },
      ]
    },
  ];

  return (
    <div className='graph-box'>
      {data.map((graphData, index) => (
        <div key={index} className='graph' style={{ display: "flex" }}>
          <div className='Main-graph-container'>
            <h1>{graphData.heading}</h1>
            <div className='container'>
              {graphData.composition.map((item, i) => (
                <div key={i}>
                  <div className='boxes'>
                    <div
                      className='child-box'
                      style={{ height: `${item.height}px` }}
                    ></div>
                    <span>{item.range}</span>
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='line'></div>
        </div>
      ))}
    </div>
  );
}

export default CarbonTampingPasteGraph;
