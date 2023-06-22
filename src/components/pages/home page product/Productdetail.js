import React from 'react'
import coal from '../../images/coal.png'
import './Product_detail.css'

function Productdetail(props) {
  return (
    <div className='productdetails' style={props.style}> 
        <img src={props.product_img} className='home-product-image'/>
        <div class="homepage-products-info">
              <h1>{props.Product_main_heading}</h1>
              <h3>{props.Product_sub_heading}</h3>
               <p className='paras'>
                {props.product_description}
               </p>
             <button onClick={props.onclickbtn}>Know more</button>
            </div>
    </div>  
  )
}

export default Productdetail