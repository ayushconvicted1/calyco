import React from 'react';
import '../Pages.css';

function AmorphousGraphiteGraph() {
  // Updated data for each type of Amorphous Graphite
  const data = [
    {
      heading: 'Flake Amorphous Graphite:',
      properties: [
        { name: 'Carbon', value: '70-85%', height: 250 },
        { name: 'Moisture', value: '0.5-1.5%', height: 100 },
        { name: 'Ash', value: '5-12%', height: 180 },
        { name: 'Volatile Matter', value: '3-8%', height: 150 },
        { name: 'Particle size', value: '80-200 mesh', height: 220 },
        { name: 'Bulk density', value: '0.45-0.65 g/cm3', height: 200 },
        { name: 'pH value', value: '6-8', height: 120 },
      ],
    },
    {
      heading: 'Lump Amorphous Graphite:',
      properties: [
        { name: 'Fixed Carbon', value: '60-85%', height: 250 },
        { name: 'Ash', value: '5-18%', height: 180 },
        { name: 'Volatile Matter', value: '4-8%', height: 150 },
        { name: 'Moisture', value: '1-3%', height: 120 },
        { name: 'Particle Size', value: '0-500mm', height: 220 },
      ],
    },
    {
      heading: 'Granular Amorphous Graphite:',
      properties: [
        { name: 'Fixed Carbon', value: '80-85%', height: 250 },
        { name: 'Ash', value: '10-15%', height: 180 },
        { name: 'Moisture', value: '1% max', height: 100 },
        { name: 'Volatile Matter', value: '2-5%', height: 150 },
        { name: 'Particle Size', value: '0.5-6mm (90% min)', height: 220 },
      ],
    },
    {
      heading: 'Fine Powder Amorphous Graphite:',
      properties: [
        { name: 'Fixed Carbon', value: '70% - 85%', height: 250 },
        { name: 'Ash', value: '5% - 15%', height: 180 },
        { name: 'Volatile Matter', value: '2% - 12%', height: 150 },
        { name: 'Moisture', value: '0.5% - 3%', height: 120 },
        { name: 'Particle Size', value: '45 microns - 500 microns', height: 220 },
        { name: 'Bulk Density', value: '0.3 g/cm3 - 0.8 g/cm3 (customizable)', height: 200 },
      ],
    },
  ];

  return (
    <div className='graph-box'>
      {data.map((graphiteData, index) => (
        <div key={index} className='graph' style={{ display: 'flex' }}>
          <div className='Main-graph-container'>
            <h1>{graphiteData.heading}</h1>
            <div className='container'>
              {graphiteData.properties.map((prop, i) => (
                <div key={i}>
                  <div className='boxes'>
                    <div
                      className='child-box'
                      style={{ height: `${prop.height}px` }}
                    ></div>
                    <span>{prop.value}</span>
                  </div>
                  <span>{prop.name}</span>
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

export default AmorphousGraphiteGraph;
