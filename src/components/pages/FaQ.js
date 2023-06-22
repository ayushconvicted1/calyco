import React from 'react'
import "./Pages.css"

function FaQ() {
  return (
    <div style={{backgroundColor:"#e4e0db", height:"100vh"}}>
        <h3>Frequently asked questions</h3>
        <div className='faq-box'>
            <div className='number'>01</div>
            <div className='questions'>
                <h3>Why Choose RefraTherm International?</h3>
                <ol>
                <li>We are the only license holder of CPC in the state of Maharashtra in India, making us one of the exclusive manufacturers of this product.</li>
                <li> Our clients include some of the top steel, aluminum, and cement manufacturers in India, as well as various importers in the Middle East and Asia.</li>
                <li>We are committed to providing high-quality products and excellent customer service to meet the needs of our clients.</li>
                </ol>
            </div>
        </div>
    </div>
  ) 
}




export default FaQ