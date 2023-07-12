import React from 'react'
import './Pages.css'
import Card from '../Card'
import ImageBanner from './home page product/Section2.js'
import Section3 from './home page product/Section3.js'
import Moblity from '../images/mobility.png'
import settings from '../images/settings.png'
import helmet from '../images/helmet.png'
import planet from '../images/planet-earth.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Faq_questions from './home page product/Faq_questions'
import { Link } from 'react-router-dom'

function Home() {
 
  return (
    <>
    <div>
    <div className='banner-box'>
        <div className='text-box' >
            <h1>Innovating tomorrow with Carbon today.</h1>
            <p>Precision. Performance. <span>Carbon Excellence.</span> </p>
        </div>
    </div>
    <Card/>
    <ImageBanner/>
    <div className='explore-products'>
      <div className='left-part'>
        <h1>Crafting Quality with Carbon <span style={{color:"#9C5755",margin:'0px'}}> Expertise</span> </h1>
        <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",paddingRight:'12px'}} /> Explore products</button>
       </div>
      <div className='Right-part'>
        <Section3
        img={Moblity}
        title="Seamless Mobility"
        para="Proven track record for providing timely and efficient service to major industries."
        />
         <Section3
        img={settings}
        title="Manufacturing Excellence"
        para="Creating Superior Products through Advanced Manufacturing."
        />
         <Section3
        img={helmet}
        title="Prioritising Safety"
        para="Protecting Lives, Preventing Hazards: Safe Practices for Operating Machines."
        />
         <Section3
        img={planet}
        title="Embracing Sustainability"
        para="The time is always right to do what is right."
        />
      </div>
    </div>
<div  className='faq-question'>
<h1>FAQs</h1>
    <Faq_questions
    question="What is Calyco?"
    answer="Calyco is a leading manufacturer of high-quality calcined coke products. Our company was established 15 years ago and since then, we have become a reliable and reputable name in the industry. We take pride in our state-of-the-art factory, equipped with advanced infrastructure and the latest machinery and tools that enable us to produce high-quality products that meet international standards.?"
    showBorder={true} 
    />
    <Faq_questions
    question="Why Choose Calyco Prodcts?"
    answer="We are the top producer of CPC in the state of Maharashtra, India
    Our clients include some of the top steel, aluminum, and cement manufacturers in India, as well as various importers globally.
    We are committed to providing high-quality products and excellent customer service to meet the needs of our clients."
    showBorder={true} 
    />
  <Faq_questions
            question="Does Calyco provide consulting in Calcining services?"
            answer={
              <>
                In addition to manufacturing calcined products, Calyco also provides technical consulting services to customers to help them optimize their use of carbon products and improve their overall efficiency.
                Please contact us at{' '}
                <Link to='mailto:consult@calyco.co' className='link'>
                  consult@calyco.co
                </Link>{' '}
                to reach our consulting team.
              </>
            }
            showBorder={true}
          />
       <Faq_questions
    question="What is Calyco's production capacity?"
    answer="Calyco runs a modern manufacturing plant that can produce up to 30,000 metric tons per year, utilizing advanced technology and equipment."
    showBorder={true} 
   />

 </div>
  
    <div>

    </div>
      
    </div>
    </>
  )
}

export default Home