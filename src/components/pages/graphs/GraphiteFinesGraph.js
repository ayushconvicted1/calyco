import React from 'react';
import '../Pages.css';

function GraphiteFinesGraph() {
  // Updated data for each type of Graphite Fines
  const data = [
    {
      heading: 'Graphite Fines:',
      composition: [
        { name: 'Fixed Carbon', range: '98-99.5%', height: 200 },
        { name: 'Particle size', range: 'Customized (e.g., 0.1-1mm, 1-5mm, etc.)', height: 220 },
        { name: 'Moisture', range: '0.5-1%', height: 150 },
        { name: 'Ash', range: '0.1-0.5%', height: 120 },
        { name: 'Volatile Matter', range: '0.5-1%', height: 150 },
      ]
    },
    {
      heading: 'Natural Graphite:',
      composition: [
        { name: 'Carbon', range: '95-99%', height: 200 },
        { name: 'Ash', range: '1-5%', height: 120 },
        { name: 'Moisture', range: '0.5-1%', height: 150 },
        { name: 'Volatile Matter', range: '0.5-1%', height: 150 },
        { name: 'Particle size', range: '45 microns to 3 millimeters', height: 220 },
      ]
    },
    {
      heading: 'Synthetic graphite:',
      composition: [
        { name: 'Fixed Carbon', range: '99.5% min.', height: 200 },
        { name: 'Ash', range: '0.5% max.', height: 100 },
        { name: 'Volatile Matter', range: '0.5% max.', height: 100 },
        { name: 'Moisture', range: '0.5% max.', height: 100 },
        { name: 'Particle size distribution', range: 'Commonly between 1 to 5 microns.', height: 220 },
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

export default GraphiteFinesGraph;
