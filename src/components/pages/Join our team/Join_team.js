import React from 'react';
import './Join_team.css'
import join_cover from '../../images/Join_page_cover.jpg';
import join_us from '../../images/join-us.jpg'
import quatation from '../../images/quatation.png'
import { Link } from 'react-router-dom';
import join_email_icon from '../../images/join-email-icon.png'

const Join_team = () => {
  return (
    <div style={{position:"relative"}}>
       <div className='Join-page'>
        <p>Careers</p>
        <h1>Are you a talented individual with a passion for <span style={{color:"#9C5755"}}>innovation and excellence?</span></h1>
        <div className='Top-para-div'> </div>
        <h2>Calyco is always searching for individuals who share our commitment to creativity and growth, and who are eager to <span style={{color:"#9C5755"}}>join our team! </span> </h2>
      </div>
      <div className='Top-left-div'> </div>
    <div className="join-card-container">
      
      <img 
        className="join-card-image"
        src={join_cover}
      />
    </div>
    <div className='bottam-right-div'></div>
 
   <div className='Join-heading-para'>
    <div className='quatation-para' style={{paddingBottom:"60px"}}>
      <img  src={quatation} className='quatation-mark'/>
      <p> "The only way to do great work is to love what you do."</p>
      <span style={{float:"right" ,paddingTop:"15px"}}>-Steve Jobs</span>
    </div>

    <div>
      <p>
      At Calyco, we strive to create a <span className='para-highlights'> dynamic and fulfilling work environment </span>that empowers our employees to do their best work and achieve their professional goals.
      </p>
    </div>

    <div> 
      <p>
    We believe that diversity is the key to success, and we welcome individuals from all backgrounds and walks of life to <span className='para-highlights'> join us </span> in our mission. 
    </p>
    </div>

    <div  >
      <p>
 "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy."
 </p>
 <span style={{float:"right",paddingTop:"40px"}}>-Martin Luther King Jr.</span>
<br/>
<br/>
<span className='quation-mark-box'> 
  <img className='quatation-mark ' style={{transform:"scale(-1,1)"}} src={quatation}/>
  </span>
    </div>
   </div>

    <div className='join-form'>
      <div className='mobile-view-top-div'></div>
      
    
    <div className='join-left-part'>
     <p> Join us at <span>Calyco.</span></p>
     <p> <span>Be a part </span>of a dynamic team that is shaping the future of the carbon-based products industry.</p>

     <div className='join-email-box'>
     <span className='join-email-icon'><img src={join_email_icon}/></span>
      <div className='email-line'></div>
      <h2>
        <Link style={{textDecoration:"none",color:"inherit"}} to={'mailto:@jobs@calyco.co'}> <label className='join-email-text'>Email :</label>jobs@calyco.co</Link></h2>
     </div>
    </div>
   
    <div className='join-right-part'>
 <img src={join_us}/>
 <div className='mobile-view-bottam-div'></div>
    </div>
    
    </div>
       
    </div>
  );
};

export default Join_team;
