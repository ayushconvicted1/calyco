import React from 'react'
import "./Card.css"

function Card_info_box(props) {
  const { style ,paragraph,btn,title,onClick} = props;
  return (
    <div className='Card-info' style={style}>
      <h1 className='heading'>
        {title}
      </h1>
      {/* <p>We are a leading manufacturer of high-quality calcined petroleum coke (CPC) and allied products based in Nagpur, India.</p> */}
      <p>{paragraph}</p>
      <button className='info-button' onClick={onClick}>{btn}</button>
    </div>
  )
}

export default Card_info_box