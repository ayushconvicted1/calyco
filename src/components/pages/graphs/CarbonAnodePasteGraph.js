import React from 'react';
import '../Pages.css';

function CarbonAnodePasteGraph() {
  // Updated data for each type of Carbon Anode Paste
  const data = [
    {
      heading: 'Carbon Anode Paste for Almunium Smelting:',
      composition: [
        { name: 'Fixed Carbon', range: '94-96%', height: 220 },
        { name: 'Ash', range: '2-5%', height: 120 },
        { name: 'Volatile Matter', range: '0.5-1.5%', height: 90 },
        { name: 'Moisture', range: '0.5-1.5%', height: 80 },
        { name: 'Electrical Resistivity (μΩ·cm)', range: '50-65 micro-ohm-cm', height: 150 },
        { name: 'Compressive Strength (MPa)', range: '14-20 MPa', height: 200 },
      ]
    },
    {
      heading: 'Carbon Anode Paste for Graphite Electrodes:',
      composition: [
        { name: 'Fixed Carbon', range: '98% min', height: 250 },
        { name: 'Ash', range: '0.5% max', height: 100 },
        { name: 'Volatile Matter', range: '1.5% max', height: 70 },
        { name: 'Moisture', range: '1.5% max', height: 60 },
        { name: 'Particle Size Distribution', range: '90% min. between 0.5 and 4.0 mm', height: 180 },
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

export default CarbonAnodePasteGraph;
