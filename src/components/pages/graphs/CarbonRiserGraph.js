import React from 'react';
import '../Pages.css';

function CarbonRiserGraph() {
  // Updated data for each type of Carbon Riser
  const data = [
    {
      heading: 'Graphite carbon raiser:',
      composition: [
        { name: 'Carbon Content', range: '95% to 99%', height: 250 },
        { name: 'Ash Content', range: 'Usually below 1%', height: 100 },
        { name: 'Volatile Matter', range: 'Generally below 1%', height: 70 },
        { name: 'Particular Size', range: 'Varies or Customized', height: 180 ,style: {
          writingMode:"vertical-lr",
          marginTop:"50px"
         }},
      ]
    },
    {
      heading: 'Petroleum coke carbon raiser:',
      composition: [
        { name: 'Carbon Content', range: '85% to 95%', height: 220 },
        { name: 'Ash Content', range: 'Usually below 1%', height: 100 },
        { name: 'Volatile Matter', range: 'Generally below 15%', height: 140 },
        { name: 'Particular Size', range: 'Varies or Customized', height: 200  ,style: {
          writingMode:"vertical-lr",
          marginTop:"50px"
         }},
      ]
    },
    {
      heading: 'Coal base carbon raiser:',
      composition: [
        { name: 'Carbon Content', range: '75% to 90%', height: 180 },
        { name: 'Ash Content', range: 'Usually below 5%', height: 120 },
        { name: 'Volatile Matter', range: 'Generally below 25%', height: 160 },
        { name: 'Particular Size', range: 'Varies or Customized', height: 220,style: {
          writingMode:"vertical-lr",
          marginTop:"50px"
         } },
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
                    <span style={{...item.style}}>{item.range}</span>
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

export default CarbonRiserGraph;
