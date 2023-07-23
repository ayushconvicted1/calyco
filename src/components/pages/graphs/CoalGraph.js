import React from 'react';
import '../Pages.css';

function CoalGraph() {
  // Updated data for each type of Coal
  const data = [
    {
      heading: 'RB2 South Africa (typical):',
      specifications: [
        { name: 'Total Moisture (ARB)', value: '9% Max', height: 200 },
        { name: 'Inherent Moisture', value: '2-4%', height: 150 },
        { name: 'Ash (ADB)', value: '19+/-1%', height: 180 },
        { name: 'Volatile Matter (ADB)', value: '21-28%', height: 220 },
        { name: 'Sulphur (ADB)', value: '0.80% Max', height: 120 },
        { name: 'Net Calorific Value (ARB)', value: '5,500 KCAL/KG', height: 250 },
        { name: 'Fixed Carbon', value: 'By difference', height: 100 },
        { name: 'Nominal Top Size', value: '50 mm', height: 200 },
      ]
    },
    {
      heading: 'Indonesia (typical):',
      specifications: [
        { name: 'Total Moisture (ARB)', value: '29.06 % (ARB)', height: 250 },
        { name: 'Ash (ADB)', value: '4.27% (ADB)', height: 120 },
        { name: 'Volatile Matter (ADB)', value: '40.28% (ADB)', height: 280 },
        { name: 'Sulphur (ADB)', value: '0.4 % (ADB)', height: 100 },
        { name: 'Net Calorific Value (ARB)', value: '4,200 KCAL/KG (ADB)', height: 220 },
        { name: 'Fixed Carbon', value: '27 By difference', height: 150 },
        { name: 'Nominal Top Size', value: '48 mm', height: 200 },
      ]
    },
    {
      heading: 'Russia (typical):',
      specifications: [
        { name: 'Total Moisture (ARB)', value: '2 % (ARB)', height: 100 },
        { name: 'Ash (ADB)', value: '12 - 12.2 % (ADB)', height: 180 },
        { name: 'Volatile Matter (ADB)', value: '22 - 22.5% (ADB)', height: 220 },
        { name: 'Sulphur (ADB)', value: '0.41 % (ADB)', height: 100 },
        { name: 'Net Calorific Value (ARB)', value: '7,392 KCAL/KG (ADB)', height: 250 },
        { name: 'Fixed Carbon', value: 'By difference', height: 100 },
        { name: 'Nominal Top Size', value: '48 mm', height: 200 },
      ]
    },
  ];

  return (
    <div className='graph-box'>
      {data.map((coalData, index) => (
        <div key={index} className='graph' style={{ display: "flex" }}>
          <div className='Main-graph-container'>
            <h1>{coalData.heading}</h1>
            <div className='container'>
              {coalData.specifications.map((spec, i) => (
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

export default CoalGraph;
