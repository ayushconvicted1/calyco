import React from 'react'
import Faq_questions from './home page product/Faq_questions'

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
    question="What is Calyco?"
    answer="Calyco is a leading manufacturer of high-quality calcined coke products. Our company was established 15 years ago and since then, we have become a reliable and reputable name in the industry. We take pride in our state-of-the-art factory, equipped with advanced infrastructure and the latest machinery and tools that enable us to produce high-quality products that meet international standards.?"
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
      <Faq_questions
    question="Does Calyco provide consulting in Calcining services?"
    answer="In addition to manufacturing calcined products, Calyco also provides technical consulting services to customers to help them optimize their use of carbon products and improve their overall efficiency.
    Please contact us at consult@calyco.co to reach our consulting team."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
           <Faq_questions
    question="What is Calyco's production capacity?"
    answer="Calyco runs a modern manufacturing plant that can produce up to 30,000 metric tons per year, utilizing advanced technology and equipment."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Which industries are served by Calyco?"
    answer="Calyco is one of the top suppliers of calcined petroleum coke, carbon electrode paste, graphite electrodes, and more. The company's products cater to a variety of industries, including aluminum, steel, and chemical."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
    
    <Faq_questions
    question="Does Calyco export its products?"
    answer="Calyco operates worldwide, with a presence in multiple countries around the globe.
    Please contact us at global@calyco.co to reach our authorized representative."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="What are the advantages of our factory location in Nagpur, India?"
    answer='As Nagpur is located in the center of India and known as the Heart of India, our factory in Nagpur is well-connected to major cities in India via rail, road, and air. This connectivity enables us to offer our customers timely delivery and reliable service.
    Nagpur is known for its rich mineral resources, including coal, iron ore, and manganese. The city also has a large agricultural hinterland, which makes it easier to source raw materials for manufacturing processes.'
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Does Calyco have a railway siding?"
    answer="We pride ourselves on the fact that we have our very own private railway siding located in Butibori about 2 km from our factory. We have the ability to handle shipment sizes ranging from a 50 railcars to full unit trains of 120 railcars.
    Our extensive knowledge and experience in the railroad and trucking industry allows us to provide a wide range of haulage services at competitive rates. At Calyco, we have the capability to haul more than a million tons per year of various products, including petroleum coke, in key markets throughout India, Nepal and Bhutan."
    showBorder={false} 
    title={title}
    answer_styling={answer_styling}
   />
  
    

    </div>
  )
}

export default About_calyco