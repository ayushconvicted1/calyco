import React from 'react';
import '../Pages.css';

function PelletCokeGraph() {
  // Updated data for each type of Coke
  const data = [
    {
      heading: 'Pellet Coke:',
      properties: [
        { name: 'Fixed Carbon', value: '90-95%', height: 200 },
        { name: 'Ash', value: '4-7%', height: 150 },
        { name: 'Volatile Matter', value: '1-2%', height: 180 },
        { name: 'Moisture', value: '2-4%', height: 220 },
        { name: 'Sulfur', value: '<0.5%', height: 100 },
      ]
    },
    {
      heading: 'Fluid Coke:',
      properties: [
        { name: 'Fixed Carbon', value: '85-95%', height: 200 },
        { name: 'Ash', value: '0.1-2.0%', height: 150 },
        { name: 'Volatile Matter', value: '5-15%', height: 180 },
        { name: 'Moisture', value: '0.5-10%', height: 220 },
        { name: 'Sulfur', value: '0.5-7.0%', height: 100 },
      ]
    },
    {
      heading: 'Delayed Coke:',
      properties: [
        { name: 'Carbon', value: '90-95%', height: 200 },
        { name: 'Ash', value: '0.2-2%', height: 150 },
        { name: 'Moisture', value: '0.5-6%', height: 180 },
        { name: 'Sulfur', value: '1-3%', height: 220 },
        { name: 'Volatile Matter', value: '3-10%', height: 100 },
      ]
    },
  ];

  return (
    <div className='graph-box'>
      {data.map((cokeData, index) => (
        <div key={index} className='graph' style={{ display: "flex" }}>
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

export default PelletCokeGraph;
