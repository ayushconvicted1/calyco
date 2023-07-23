import React from 'react';
import '../Pages.css';

function CarbonElectrodePasteGraph() {
  // Updated data for each type of Carbon Electrode Paste
  const data = [
    {
      heading: 'Carbon Electrode Paste for steel production',
      composition: [
        { name: 'Fixed Carbon', range: '98% min', height: 220 },
        { name: 'Ash', range: '1% max', height: 100 },
        { name: 'Volatile Matter', range: '1.5% max', height: 70 },
        { name: 'Moisture', range: '0.5% max', height: 80 },
        { name: 'Apparent Density (g/cm3)', range: '1.38-1.45 g/cm3', height: 150 },
        { name: 'Compressive Strength (MPa)', range: '25-40 MPa', height: 200 },
      ]
    },
    {
      heading: 'Carbon Electrode Paste for Non-ferrous metal production',
      composition: [
        { name: 'Fixed Carbon', range: '98.5% min', height: 230 },
        { name: 'Ash', range: '0.5% max', height: 100 },
        { name: 'Volatile Matter', range: '0.5% max', height: 80 },
        { name: 'Moisture', range: '0.5% max', height: 80 },
        { name: 'Compressive Strength (MPa)', range: '22-28 MPa (after baking)', height: 200 },
      ]
    },
    {
      heading: 'Ferroalloy electrode paste:',
      composition: [
        { name: 'Ash', range: '2-6%', height: 130 },
        { name: 'Volatile Matter', range: '12-18%', height: 100 },
        { name: 'Fixed Carbon', range: '76-84%', height: 180 },
        { name: 'Electrical Resistivity (μΩm)', range: '55-90 μΩm', height: 160 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
      ]
    },
    {
      heading: 'Calcium carbide electrode paste:',
      composition: [
        { name: 'Ash', range: '2-7%', height: 130 },
        { name: 'Volatile Matter', range: '12-18%', height: 100 },
        { name: 'Fixed Carbon', range: '76-84%', height: 180 },
        { name: 'Electrical Resistivity (μΩm)', range: '60-100 μΩm', height: 160 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
      ]
    },
    {
      heading: 'Low-ash electrode paste:',
      composition: [
        { name: 'Ash', range: '0.5-3%', height: 130 },
        { name: 'Volatile Matter', range: '8-14%', height: 100 },
        { name: 'Fixed Carbon', range: '82-89%', height: 180 },
        { name: 'Electrical Resistivity (μΩm)', range: '45-75 μΩm', height: 160 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
      ]
    },
    {
      heading: 'High-density electrode paste:',
      composition: [
        { name: 'Ash', range: '2-6%', height: 130 },
        { name: 'Volatile Matter', range: '10-15%', height: 100 },
        { name: 'Fixed Carbon', range: '80-88%', height: 180 },
        { name: 'Electrical Resistivity (μΩm)', range: '50-80 μΩm', height: 160 },
        { name: 'Softening Point of the Binder (°C)', range: '80-120°C', height: 150 },
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

export default CarbonElectrodePasteGraph;
