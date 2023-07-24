import React from 'react'
import Faq_questions from './home page product/Faq_questions'
import { Link } from 'react-router-dom'

function About_calyco() {

const title={
  fontSize: 'clamp(24px, 5vw, 33px)',
  fontWeight: 'bold'
}

const answer_styling={
   padding:"0px"
}



  return (
    <div>
           <Faq_questions
    question="Why choose Calyco Products ?"
    answer={
    <>
    • We are the top producers of CPC (Calcined Petroleum Coke) in the state of Maharashtra, India.  
    <br/>                       
    • We are the top suppliers of CPC, Carbon electrode paste, graphite electrode and other carbon products to a variety of industries like Aluminum, Steel, Cement and Chemical manufactures in India as well as various importers globally.
    <br/>
    • We run a modern manufacturing plant that can produce up to 30,000 metric tons per year, utilizing advanced technology and equipment. 
    <br/>
    • We also export our products and operates worldwide, with a presence of multiple countries. Contact us at{' '}  <Link to='mailto:global@calyco.co' className='link'>global@calyco.co </Link>{' '} to reach our authorized representative.
We are committed to providing high-quality products with excellent customer service to meet the needs of out clients and also provide technical consulting service to customers to help them optimize their use of carbon products and improve their overall efficiency.
<br/>
  </>}
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
      <Faq_questions
    question="What are the advantages of our factory in Nagpur, India ?"
    answer='As Nagpur is located in the center of India and known as the “Heart of India”, our factory in Nagpur is well-connected to major cities in India via rail, road, and air. This connectivity enables us to offer our customers timely delivery and reliable service.
    Nagpur is known for its rich mineral resources, including coal, iron ore, and manganese. The city also has a large agricultural hinterland, which makes it easier to source raw materials for manufacturing processes.'
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
     
     <Faq_questions
    question="Does Calyco have a railway siding ?"
    answer="	We pride ourselves on the fact that we have our very own private railway siding located in Butibori about 2 km from our factory. We have the ability to handle shipment sizes ranging from a 50 railcars to full unit trains of 120 railcars."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
   
    <Faq_questions
    question="Are there any environmental considerations related to Calcined Pet Coke ?"
    answer="We have insured proper precautions and safety measures because emissions from the combustion of petcoke can have impacts on human health and the environment, including the release of common pollutants, hazardous substances, and high levels of the greenhouse gas, carbon dioxide."
    showBorder={false} 
    title={title}
    answer_styling={answer_styling}
   />
  
      
    </div>
  )
}

export default About_calyco