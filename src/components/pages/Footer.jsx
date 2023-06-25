import React from 'react';
import './Pages.css'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
    <footer>
   {/* <div className='company'>
    <h2>Company</h2>
    <hr/>
    <li>Home</li>
    <li>About Us</li>
    <li>Join Our Team</li>
   </div>
   <div className='get-help'>
   <h2>Get Help</h2>
    <hr/>
   <li>Contact Us</li>
   <li>FAQ</li>
   </div> */}
   <div className='contact-info'>
   <h2>Contact Info</h2>
    <hr/>
   <li>
   <Link to="mailto:Sales@Calyco.co" className='custom-footer-Link'>Sales@Calyco.co</Link></li>
   <li><Link to="mailto:Technicalservices@Calyco.co" className='custom-footer-Link'>Technicalservices@Calyco.co</Link>
</li> 
   <li><Link to="mailto:Generalinfo@Calyco.Co" className='custom-footer-Link'>Generalinfo@Calyco.Co</Link></li>
   </div>
   <div className='Follow-us'>
   <h2>Follow us</h2>
    <hr/>
    <li><FontAwesomeIcon className='linkdin' icon={faLinkedin} /></li>
    
   </div>
    </footer>
    <div className='footer-bottam-heading'>
    <h1>calyco</h1>
    </div>
    </div>
  );
}

export default Footer;
