import React from 'react'
import './Product_detail.css'

function Section3(props) {
  return (
    <div className='Rightpartsection'>
        <div className='vertical-line'></div>
       <img src={props.img}/>
        <div className='right-section-content'>
            <h3>{props.title}</h3>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default Section3