import React from 'react'
import Faq_questions from './home page product/Faq_questions'

function About_products() {

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
    question="What is the difference between CPC and Met Coke?"
    answer="CPC is produced by heating raw petroleum coke to remove moisture and volatile matter. It results in a high-purity carbon product used as a key raw material in the production of aluminum, steel, and other carbon products.
    Met coke is produced by heating coal in the absence of air to remove moisture and volatile matter. It results in a carbon-rich product used as a  fuel in various industrial processes, such as steelmaking, iron production, and chemical manufacturing."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
          <Faq_questions
    question="What is the difference between CPC and Met Coke as related to induction furnaces?"
    answer="CPC is a carbon additive used in induction furnace operations to increase carbon and improve the melting process. It's produced by heating raw petroleum coke to remove moisture and volatile matter, resulting in a high-purity carbon product with low ash and high conductivity, making it ideal for use in induction furnaces.
    Met coke on the other hand, is not commonly used as a carbon additive in induction furnace operations because it contains impurities and ash that can negatively affect furnace performance. It is primarily used as a fuel in blast furnaces and other high-heat industrial processes."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
          <Faq_questions
    question="What is the difference between CPC and Anthracite?"
    answer="CPC is a pure carbon substance with high carbon and low ash . It's produced by heating raw petroleum coke to remove moisture and volatile matter, and used as a raw material in the production of aluminum, steel, and carbon products. It's also used as a carbon additive and fuel in some industrial processes.
    Anthracite is a dense, high-carbon variety of coal with low impurities. It is mainly used as a fuel in heating applications and in some industrial processes. Anthracite is also a common filter media in water treatment due to its strong adsorption properties."
    showBorder={true} 
    title={title}
    answer_styling={answer_styling}
    />
          <Faq_questions
    question="What is the difference between Carburizer and Recarburizer?"
    answer="Carburizer introduces carbon into molten metal. It is made of substances like graphite or coal. It increases carbon to enhance properties such as hardness and strength.
    Recarburizer is a type of carburizer that adds carbon to molten metal that has already been produced but has lost some carbon during the manufacturing process. It is made of the same materials as carburizers, but added later."
    showBorder={false} 
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
    question="What is the melting point of calcined petroleum coke ?"
    answer="Typically ranges from 1300°C to 1400°C (2372°F to 2552°F). The precise melting point can vary depending on the specific composition and quality of the CPC."
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

export default About_products