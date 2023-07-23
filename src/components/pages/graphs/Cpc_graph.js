import React from 'react';
import '../Pages.css';

function Cpc_graph() {
  // Updated data for each type of Calcined Petroleum Coke
  const data = [
    {
      heading: 'Calcined Petroleum Coke for steelmaking and iron foundries / titanium dioxide production / carbon raiser or carbon additive:',
      composition: [
        { name: 'Fixed Carbon', range: '98-99%', height: 200 },
        { name: 'Sulfur', range: '0.5-3%', height: 100 },
        { name: 'Ash', range: '0.5-1%', height: 120 },
        { name: 'Volatile Matter', range: '0.5-1%', height: 80 },
        { name: 'Moisture', range: '0.5-1%', height: 150 },
        { name: 'Grain Size', range: 'Customized', height: 300 }
      ]
    },
    {
      heading: 'Calcined Petroleum Coke for aluminum smelting:',
      composition: [
        { name: 'Fixed Carbon', range: '98.5-99.5%', height: 180 },
        { name: 'Sulfur', range: '1-3%', height: 90 },
        { name: 'Ash', range: '0.1-0.5%', height: 140 },
        { name: 'Volatile Matter', range: '0.5-1%', height: 110 },
        { name: 'Moisture', range: '0.5-1%', height: 220 },
        { name: 'Grain Size', range: 'Customized', height: 250 }
      ]
    },
    {
      heading: 'Calcined Petroleum Coke for graphite electrode production:',
      composition: [
        { name: 'Fixed Carbon', range: '98-99%', height: 240 },
        { name: 'Sulfur', range: '0.05-0.5%', height: 130 },
        { name: 'Ash', range: '0.5-1%', height: 180 },
        { name: 'Volatile Matter', range: '0.5-1%', height: 90 },
        { name: 'Moisture', range: '0.5-1%', height: 190 },
        { name: 'Grain Size', range: 'Customized', height: 280 }
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

export default Cpc_graph;
