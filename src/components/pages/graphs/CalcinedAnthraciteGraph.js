import React from 'react';
import '../Pages.css';

function CalcinedAnthraciteGraph() {
  // Updated data for each type of Calcined Anthracite
  const data = [
    {
      heading: 'Calcined Anthracite for steelmaking and iron foundries / carbon additive or carbon raiser:',
      composition: [
        { name: 'Fixed Carbon', range: '90-95%', height: 250 },
        { name: 'Sulfur', range: '0.2-0.6%', height: 100 },
        { name: 'Ash', range: '4-8%', height: 150 },
        { name: 'Volatile Matter', range: '0.5-1.5%', height: 80 },
        { name: 'Moisture', range: '0.5-1%', height: 180 },
        { name: 'Grain Size', range: 'Customized', height: 300 }
      ]
    },
    {
      heading: 'Calcined Anthracite for aluminum smelting:',
      composition: [
        { name: 'Fixed Carbon', range: '92-96%', height: 200 },
        { name: 'Sulfur', range: '0.2-0.5%', height: 90 },
        { name: 'Ash', range: '4-8%', height: 130 },
        { name: 'Volatile Matter', range: '0.5-1.5%', height: 70 },
        { name: 'Moisture', range: '0.5-1%', height: 150 },
        { name: 'Grain Size', range: 'Customized', height: 250 }
      ]
    },
    {
      heading: 'Calcined Anthracite for water treatment:',
      composition: [
        { name: 'Fixed Carbon', range: '90-95%', height: 220 },
        { name: 'Sulfur', range: '0.2-0.6%', height: 100 },
        { name: 'Ash', range: '4-8%', height: 150 },
        { name: 'Volatile Matter', range: '0.5-1.5%', height: 70 },
        { name: 'Moisture', range: '0.5-1%', height: 180 },
        { name: 'Grain Size', range: 'Customized', height: 270 }
      ]
    }
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

export default CalcinedAnthraciteGraph;
