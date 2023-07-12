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
    We are the top producers of CPC (Calcined Petroleum Coke) in the state of Maharashtra, India.                         
    We are the top suppliers of CPC, Carbon electrode paste, graphite electrode and other carbon products to a variety of industries like Aluminum, Steel, Cement and Chemical manufactures in India as well as various importers globally.
    We run a modern manufacturing plant that can produce up to 30,000 metric tons per year, utilizing advanced technology and equipment. 
    We also export our products and operates worldwide, with a presence of multiple countries. Contact us at{' '}  <Link to='mailto:global@calyco.co' className='link'>global@calyco.co </Link>{' '} to reach our authorized representative.
We are committed to providing high-quality products with excellent customer service to meet the needs of out clients and also provide technical consulting service to customers to help them optimize their use of carbon products and improve their overall efficiency.
  </>}
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
      <Faq_questions
    question="What are the advantages of our factory in Nagpur, India ?"
    answer='As Nagpur is located in the center of India and known as the “Heart of India”, our factory in Nagpur is well-connected to major cities in India via rail, road, and air. This connectivity enables us to offer our customers timely delivery and reliable service.
    Nagpur is known for its rich mineral resources, including coal, iron ore, and manganese. The city also has a large agricultural hinterland, which makes it easier to source raw materials for manufacturing processes.
    Nagpur has a large pool of skilled and semi-skilled labor, which is a key advantage for any manufacturing unit. The city has several technical and vocational training institutes that produce a skilled workforce in areas like engineering, electronics, and manufacturing.'
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
     
     <Faq_questions
    question="Does Calyco have a railway siding ?"
    answer="	We pride ourselves on the fact that we have our very own private railway siding located in Butibori about 2 km from our factory. We have the ability to handle shipment sizes ranging from a 50 railcars to full unit trains of 120 railcars.
    At Calyco, we have the capability to haul more than a million tons per year of various products, including petroleum coke, in key markets throughout India, Nepal and Bhutan.
    With our varied portfolio of logistics services across product lines and geographical regions, as well as excellent relationships with many short line railroads, we are uniquely positioned to provide comprehensive and reliable solutions to meet all of our customers' rail requirements. 
    We believe that our expertise in the railroad industry sets us apart, and we are dedicated to providing exceptional service to our customers."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
   
   <Faq_questions
    question="What is difference between CPC, Met Coke and Anthracite?"
    answer={<>•	CPC is a pure carbon substance which is produced by heating raw Petroleum Coke / Green Coke to remove moisture and volatile matter. 
    Met coke is also a carbon product like CPC. It is produced by heating coal in the absence of air to remove moisture and volatile matter. 
    Anthracite is a dense, high-carbon variety of coal with low impurities and has carbon content of over 87% on a dry ash-free basis and has highest heating value per ton on mineral matter free basis.
    <br/>
    <br/>
    • CPC is high-purity carbon product with low ash and high conductivity. 
    Met Coke results in carbon rich products used as a fuel in various industrial processes such as steelmaking, iron production and chemical manufacturing. 
    Anthracite is formed when bituminous coal undergoes very low-grade metamorphism and structural deformation. 
    <br/>
    <br/>
    •	CPC is used as carbon additive in induction furnace operations to increase carbon and improve melting. CPC is highly used in Aluminum and Steel industry.
    Met coke is used as a fuel in blast furnace and other high heat industrial process and not in induction furnace because it contains impurities and ash that can negatively affect furnace performance.
    It is a coal used as a fuel mainly in heating applications. Also, Anthracite is a common filter media in water treatment due to its strong absorption properties.</>}
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="What is difference between Carburizer and Recarburizer ?"
    answer="	Carburizer and Recarburizer are both carbon additives used in the production of steel and other metals.
    Carburizer introduces carbon into molten metal. It is made of substances like graphite or coal. It increases carbon to enhance properties such as hardness and strength.
    Recarburizer is a type of carburizer that adds carbon to molten metal that has already been produced but has lost some carbon during the manufacturing process. It is made of the same materials as carburizers, but added later."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="What is difference between Tamping and Anode paste ?"
    answer="Tamping paste and anode paste are both types of pastes used in the aluminum smelting industry, but they serve different purposes.
    Tamping paste, also known as ramming paste or ramming mass, is used for tamping or filling the gaps or spaces between the carbon blocks or electrodes in an aluminum electrolysis cell.
    Anode paste, on the other hand, is used as the material for the anodes in the aluminum electrolysis cell. An anode is the positive electrode, and it plays a crucial role in the production of aluminum through the electrochemical process."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Can Calcined Pet Coke be customized based on specific requirements ?"
    answer="The CPC can be further processed in an anode baking oven in order to produce anode coke of desired shape and physical properties.
    To meet customers specifications,the properties of CPC like Sulphur, Partical size distribution and Ash content can be tailored."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Does Calyco have a railway siding ?"
    answer="	We pride ourselves on the fact that we have our very own private railway siding located in Butibori about 2 km from our factory. We have the ability to handle shipment sizes ranging from a 50 railcars to full unit trains of 120 railcars.
    At Calyco, we have the capability to haul more than a million tons per year of various products, including petroleum coke, in key markets throughout India, Nepal and Bhutan.
    With our varied portfolio of logistics services across product lines and geographical regions, as well as excellent relationships with many short line railroads, we are uniquely positioned to provide comprehensive and reliable solutions to meet all of our customers' rail requirements. 
    We believe that our expertise in the railroad industry sets us apart, and we are dedicated to providing exceptional service to our customers."
    showBorder={true}  
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Are there any environmental considerations related to Calcined Pet Coke ?"
    answer="We have insured proper precautions and safety measures because emissions from the combustion of petcoke can have impacts on human health and the environment, including the release of common pollutants, hazardous substances, and high levels of the greenhouse gas, carbon dioxide."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="What is the melting point of calcined petroleum coke ?"
    answer="Typically ranges from 1300°C to 1400°C (2372°F to 2552°F). The precise melting point can vary depending on the specific composition and quality of the CPC."
    showBorder={true}  
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Does Calyco have a railway siding?"
    answer="	We pride ourselves on the fact that we have our very own private railway siding located in Butibori about 2 km from our factory. We have the ability to handle shipment sizes ranging from a 50 railcars to full unit trains of 120 railcars.
    At Calyco, we have the capability to haul more than a million tons per year of various products, including petroleum coke, in key markets throughout India, Nepal and Bhutan.
    With our varied portfolio of logistics services across product lines and geographical regions, as well as excellent relationships with many short line railroads, we are uniquely positioned to provide comprehensive and reliable solutions to meet all of our customers' rail requirements. 
    We believe that our expertise in the railroad industry sets us apart, and we are dedicated to providing exceptional service to our customers."
    showBorder={true}  
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Is calcined petroleum coke Flammable?"
    answer="Calcined petroleum coke is not considered flammable under normal conditions. It is a carbonaceous material that has undergone high-temperature treatment to remove volatile components, including any flammable substances. As a result, the remaining carbon content in calcined petroleum coke is relatively stable and non-flammable."
    showBorder={true}  
    title={title}
    answer_styling={answer_styling}
   />
    <Faq_questions
    question="Why is Pet coke used in cement industry ?"
    answer="Pet coke is a high-energy fuel with low Ash content, it is easily available, cost effective, stable and consistent combustion."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
     <Faq_questions
    question="Is Pet coke explosive?"
    answer="Pet coke, or petroleum coke, is not inherently explosive. It is a solid carbonaceous material and does not possess the same explosive characteristics as gases or volatile substances."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
   />
     <Faq_questions
    question="Does India import Pet coke?"
    answer="CPC is not considered flammable under normal conditions. It is a carbonaceous material that has undergone high-temperature treatment to remove volatile components, including any flammable substances. As a result, the remaining carbon content in CPC is relatively stable and non-flammable."
    showBorder={true}  
    title={title}
    answer_styling={answer_styling}
   />
     <Faq_questions
    question="What are the environmental impact of Pet coke ?"
    answer="Air pollution, Green house gas emissions, Particulate matter emission, Water and Soil contamination and Waste generations."
    showBorder={false} 
    title={title}
    answer_styling={answer_styling}
   />
       


    </div>
  )
}

export default About_calyco