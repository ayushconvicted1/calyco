import React from 'react'
// import image4 from '../images/image4.jpg';
import logo from './images/logo.png'
import './Card.css'

function Card_detail(props) {
  const { customClass } = props;

  return (
    
    <div className={`item-card ${customClass}`} onClick={props.onClick}>
        <img src={props.img} />
        <div className='bottam-text'>
           <p> {props.para}</p>
           </div>
        </div>
    
  )
}

export default Card_detail