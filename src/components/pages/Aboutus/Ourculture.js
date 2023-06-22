 import React from 'react'
 import './Aboutus.css'
 
 function Ourculture(props) {
   return (
     <div className='Our-culture' >
        <h3 style={props.style}>{props.heading}</h3>
        <p>{props.para}</p>
     </div>
   )
 }
 
 export default Ourculture