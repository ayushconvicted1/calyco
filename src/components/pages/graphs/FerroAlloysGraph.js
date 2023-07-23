import React from 'react';
import '../Pages.css';

function FerroAlloysGraph() {
  // Updated data for each type of Ferro Alloys
  const data = [
    {
      heading: 'Ferro Manganese:',
      specifications: [
        { name: 'Manganese', value: '70-80%', height: 200 },
        { name: 'Carbon', value: '6-8%', height: 150 },
        { name: 'Silicon', value: '≤ 2%', height: 180 },
        { name: 'Phosphorus', value: '≤ 0.35%', height: 220 },
        { name: 'Sulfur', value: '≤ 0.03%', height: 100 },
      ]
    },
    {
      heading: 'Ferro Silicon:',
      specifications: [
        { name: 'Silicon', value: '72-80%', height: 200 },
        { name: 'Iron', value: 'Balance', height: 150 },
        { name: 'Aluminum', value: '≤ 2%', height: 180 },
        { name: 'Calcium', value: '≤ 1.5%', height: 220 },
        { name: 'Phosphorus', value: '≤ 0.04%', height: 100 },
        { name: 'Sulfur', value: '≤ 0.02%', height: 180 },
      ]
    },
    {
      heading: 'Ferrochrome:',
      specifications: [
        { name: 'Chromium', value: '60-72%', height: 200 },
        { name: 'Carbon', value: '4-9%', height: 150 },
        { name: 'Silicon', value: '≤ 1%', height: 180 },
        { name: 'Sulfur', value: '≤ 0.05%', height: 220 },
        { name: 'Phosphorus', value: '≤ 0.03%', height: 100 },
      ]
    },
    {
      heading: 'Silico Manganese:',
      specifications: [
        { name: 'Manganese', value: '65-72%', height: 200 },
        { name: 'Silicon', value: '16-22%', height: 150 },
        { name: 'Iron', value: 'Balance', height: 180 },
        { name: 'Carbon', value: '1.5-2.5%', height: 220 },
        { name: 'Phosphorus', value: '≤ 0.3%', height: 100 },
        { name: 'Sulfur', value: '≤ 0.03%', height: 180 },
      ]
    },
  ];

  return (
    <div className='graph-box'>
      {data.map((ferroData, index) => (
        <div key={index} className='graph' style={{ display: "flex" }}>
          <div className='Main-graph-container'>
            <h1>{ferroData.heading}</h1>
            <div className='container'>
              {ferroData.specifications.map((spec, i) => (
                <div key={i}>
                  <div className='boxes'>
                    <div
                      className='child-box'
                      style={{ height: `${spec.height}px` }}
                    ></div>
                    <span>{spec.value}</span>
                  </div>
                  <span>{spec.name}</span>
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

export default FerroAlloysGraph;
