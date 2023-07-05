import React from 'react';
import './Pages.css';

const DetailComponent = (props) => {
  const { product_category, Fixed_carbon, Ash_content, Volatile, Sulfur, Moisture_content } = props;

  return (
    <div>
      <div className='Main-graph-container'>
        <h1>{product_category}</h1>
        <div className='container'>
          <div>
            <div className='boxes'>
              <div className='child-box' style={{ height: `calc(${Fixed_carbon} + 40px)` }}></div>
              <span>{Fixed_carbon}</span>
            </div>
            <span>Fixed<br />Carbon</span>
          </div>
          <div>
            <div className='boxes'>
              <div className='child-box' style={{ height: `calc(${Ash_content} + 40px)` }}></div>
              <span>{Ash_content}</span>
            </div>
            <span>Ash<br />Content</span>
          </div>
          <div>
            <div className='boxes'>
              <div className='child-box' style={{ height: `calc(${Volatile} + 40px)` }}></div>
              <span>{Volatile}</span>
            </div>
            <span>Volatile<br />Matter</span>
          </div>
          <div>
            <div className='boxes'>
              <div className='child-box' style={{ height: `calc(${Sulfur} + 40px)` }}></div>
              <span>{Sulfur}</span>
            </div>
            <span>Sulfur</span>
          </div>
          <div>
            <div className='boxes'>
              <div className='child-box' style={{ height: `calc(${Moisture_content}  + 40px)` }}></div>
              <span>{Moisture_content}</span>
            </div>
            <span>Moisture<br />Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
