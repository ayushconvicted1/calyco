import React from 'react'
import aboutus from "../../images/building_line.png";
import about_infra from "../../images/build_line.png"
import "./Aboutus.css"
import Ourculture from './Ourculture'
import quates from '../../images/quatation.png'
import collaborate from '../../images/collaborate.png'
import engineering from '../../images/engineering.png'
import delivery from '../../images/fast-delivery.png'
import induction from '../../images/induction-stove.png'
import money from '../../images/money.png'
import train_tracks from '../../images/train-tracks.png'



function Aboutus() {
  return (
    <div className='about-section'>
        <div className='aboutus-detail'>
<div className='about-title'>
<h3 className='about-page'> About us </h3>
        <h1>Transforming  <br/>
India's <span>Industrial Landscape </span >with <span>Carbon and Graphite Expertise </span> </h1>
</div>
          <div className='about-images'>
        <img src={aboutus}/>
        </div>
           
        
        </div>
        <div className='aboutus-paragraph'>
          <img src={quates}/>
          <p>Our goal is to be the preferred supplier of high-quality carbon products, <span>customized solutions</span>, and logistical support to meet our customers' needs and to conduct research to <span>develop specific customer requirements.</span> </p>
        </div>
       <div className='outculture-items'>
        <div className='row1'> 
        <Ourculture
        ourculture_image={collaborate}
        heading="Worldwide Collaborations"
        para="Calyco collaborates with global players to discover new business opportunities and innovative applications for our high-quality carbon products."
        />
         <Ourculture
         ourculture_image={engineering}
        heading="Latest Rotary Kilns"
        para="Calyco is well-equipped with the latest rotary kilns and other plant and machinery such as Conveyor, Cranes, chimneys, compressors required for bulk production."
        />
         <Ourculture
         ourculture_image={money}
        heading="Economical Manufacturing"
        para="We combine innovation with experience to minimize manufacturing costs, benefiting all stakeholders."
        />
        </div>
        <div className='row2'>
         <Ourculture
         ourculture_image={delivery}
        heading="Efficient Deliveries"
        para="Calyco works with efficient global partners near inland customers and sea ports to ensure efficient delivery."
        />
         <Ourculture
         ourculture_image={induction}
        heading="Higher input-output Ratio"
        para="Our plant configuration achieve much lower induction loss (25%) as compared to other plants  (30-35%)."
        />
       <Ourculture
       ourculture_image={train_tracks}
        heading="Private Railway Siding"
        para="We have a private railway siding with loading/unloading capacity upto 80 rail cabins at a time."
        />
        </div>

        </div> 
        <div class="about-infra">
  <img src={about_infra} alt="Image" />
  <div class="text-overlay">
    <h2>Our 
      <br/>
Infrastructure</h2>
    <p style={{marginTop:"30px"}}> <span style={{color:"#FE5E00"}}>11 Acres of Industrial Land </span> at <br/>Butibori Industrial Estate in Nagpur</p>
    <p style={{paddingTop:"10px"}}>
      Total constructed area of <span style={{color:"#FE5E00"}}> 62440 sq. ft.</span>
    </p>
  </div>
</div>

    </div>
  )
}

export default Aboutus