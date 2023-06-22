import React from 'react'
import image1 from '../../images/pexels-enes-çimen-7505186.jpg'
import image2 from '../../images/pexels-brandin-t-10042243.png'
import image3 from '../../images/pexels-brandin-t-10042242.png'
import image4 from '../../images/pexels-brandin-t-10042239.png'
import image5 from '../../images/pexels-brandin-t-10042238.png'
import './Product_detail.css'



function Section2() {
  return (
    <div>
      <div className='image-box'> 
      <div className='imagebox'>
        <img src={image1} 
         />
        </div>
        
     <div className='box1'>
        <img src={image2}
        className='box1-img' />
        <img src={image3} className='box1-img'/>
        </div> 
    <div className='box2'>
         <img src={image4} />
         <img src={image5} /> 
   </div>
    </div>
    </div> 
  )
}

export default Section2;