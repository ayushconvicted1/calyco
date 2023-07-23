import React from 'react';
import '../Pages.css';

function MetallurgicalCokeGraph() {
  // Updated data for each type of Metallurgical Coke
  const data = [
    {
      heading: 'Blast Furnace Coke:',
      properties: [
        { name: 'Size', value: '40-80mm', height: 200 },
        { name: 'Ash', value: '9-13%', height: 150 },
        { name: 'Volatile Matter', value: '1-1.5%', height: 180 },
        { name: 'Sulfur', value: '≤ 0.65%', height: 220 },
        { name: 'Moisture', value: '≤ 5%', height: 100 },
        { name: 'Calorific value', value: '7200-7600 Kcal/kg', height: 250 },
      ],
    },
    {
      heading: 'Foundry Coke:',
      properties: [
        { name: 'Size', value: '80-120mm', height: 200 },
        { name: 'Ash', value: '8-10%', height: 150 },
        { name: 'Volatile Matter', value: '1.5-2%', height: 180 },
        { name: 'Sulfur', value: '≤ 0.65%', height: 220 },
        { name: 'Moisture', value: '≤ 5%', height: 100 },
        { name: 'Calorific value', value: '7200-7600 Kcal/kg', height: 250 },
      ],
    },
    {
      heading: 'Nut Coke:',
      properties: [
        { name: 'Size', value: '10-40mm', height: 200 },
        { name: 'Ash', value: '9-13%', height: 150 },
        { name: 'Volatile Matter', value: '1-1.5%', height: 180 },
        { name: 'Sulfur', value: '≤ 0.65%', height: 220 },
        { name: 'Moisture', value: '≤ 5%', height: 100 },
        { name: 'Calorific value', value: '7200-7600 Kcal/kg', height: 250 },
      ],
    },
    {
      heading: 'Breeze Coke:',
      properties: [
        { name: 'Size', value: '0-10mm (may vary)', height: 200 },
        { name: 'Ash', value: '9-13%', height: 150 },
        { name: 'Volatile Matter', value: '1-1.5%', height: 180 },
        { name: 'Sulfur', value: '≤ 0.65%', height: 220 },
        { name: 'Moisture', value: '≤ 5%', height: 100 },
        { name: 'Calorific value', value: '7200-7600 Kcal/kg', height: 250 },
      ],
    },
  ];

  return (
    <div> className='graph-box'
      {data.map((cokeData, index) => (
        <div key={index} className='graph' style={{ display: 'flex' }}>
          <div className='Main-graph-container'>
            <h1>{cokeData.heading}</h1>
            <div className='container'>
              {cokeData.properties.map((prop, i) => (
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

export default MetallurgicalCokeGraph;
