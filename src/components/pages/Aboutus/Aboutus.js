import React from 'react'
import aboutus from "../../images/aboutus.png"
import "./Aboutus.css"
import Ourculture from './Ourculture'


function Aboutus() {
  return (
    <div className='about-section'>
        <h3> Get to know us more </h3>
        <div className='aboutus-detail'>
        <img src={aboutus}/>
            <div>
            <h1>Pioneers In Manufacturing Of Carbon And Graphite Products In India</h1>
             <p>
             RefraTherm was established 15 years ago and has since grown to become a leading manufacturer of high-quality calcined coke products. Our factory is equipped with advanced infrastructure and the latest machinery and tools, allowing us to produce high-quality products that meet international standards. We are committed to providing our clients with the best possible products and services.

Our advanced infrastructure and latest machinery and tools for bulk production enable us to provide our customers with consistent and high-quality CPC products. We receive large quantities of raw pet coke under license from Government of India-owned refineries, Indian Oil Corporation (IOCL) and Bharat Petroleum Corporation Ltd (BPCL).

Our technical team has extensive knowledge and experience in the carbon industry and can provide customized solutions to meet specific customer requirements. We also offer logistical support, including shipping and transportation, to ensure timely delivery of our products.

RefraTherm is a reliable partner for customers in various industries around the world, providing high-quality carbon products, customized solutions, and logistical support to meet their specific requirements.
             </p>
        </div> 
        </div>
        <h3>Our Vision</h3>
        <div className='aboutus-paragraph'>
          <p>Our goal is to be the preferred supplier of customized graphite products for various industries, forging partnerships and researching customer needs to enhance shareholder value.</p>
        </div>
        <h3 >OUR CULTURE</h3>
       <div className='outculture-items'>
        <Ourculture
        heading="Worldwide Marketing Collaborations"
        para="RefraTherm collaborates with global players to discover new business opportunities and innovative applications for our high-quality carbon products."
        />
         <Ourculture
        heading="Increased Proportion Of Value-Added Products"
        para="Our high-purity flexible graphite enables us to add value to our products by using a wide range of raw materials."
        />
         <Ourculture
        heading="Low-Cost Capacity Expansion"
        para="We strive to increase our production capacity in a cost-efficient manner by leveraging our core competence and economies of scale."
        />
         <Ourculture
        heading="Wide Product Range"
        para="RefraTherm provides carbon and graphite products to various industries and applications."
        />
         <Ourculture
        heading="Economical Manufacturing Cost"
        para="We combine innovation with experience to minimize manufacturing costs, benefiting all stakeholders."
        />
       <Ourculture
        heading="Efficient Deliveries"
        para="RefraTherm delivers products on time by working with efficient global partners and having manufacturing facilities near inland customers and sea ports."
        />

        </div> 
    </div>
  )
}

export default Aboutus