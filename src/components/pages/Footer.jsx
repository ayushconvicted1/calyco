import React, { useState } from 'react';
import './Pages.css'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const [showProductList, setShowProductList] = useState(false);
  const [showEmailList, setShowEmailList] = useState(false);
  const[showLearnlist,setshowlearnlist] =useState(false);
  const[showcareerslist,setshowcareerlist]=useState(false)

  const handleProductClick = (productName) => {
    console.log(`Clicked product ID: ${productName}`);
    navigate(`/products/${productName}`);
    window.scrollTo(0, 0);
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
  };

  const toggleEmailList = () => {
    setShowEmailList(!showEmailList);
  };
  const toggleCareerlist = () => {
    setshowcareerlist(!showcareerslist);
  };

  const togglelearnList = () => {
    setshowlearnlist(!showLearnlist);
  };

  return (
    <div>
      <footer>
        <div className='Follow-us'>
          <h2 className='follow-button'>Follow us on</h2>
          <hr/>
          <li><FontAwesomeIcon className='linkdin' icon={faLinkedin} /></li>
        </div>
        <div className='Product-info'>
          <h2 onClick={toggleProductList}>Products</h2>
          <hr/>
          <ul className={showProductList ? 'product-list show' : 'product-list'}>
            <li className='custom-footer-Link' onClick={() => handleProductClick("Calcined-Petroleum-Coke")}>Calcined Petroleum Coke</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Calcined-Anthracite')}>Calcined Anthracite</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Carbon-Anode-Paste')}>Carbon Anode Paste</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Carbon-Raiser')}>Carbon Raiser</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Carbon-Electrode-Paste')}>Carbon Electrode Paste</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Carbon-Tamping-Paste')}>Carbon Tamping Paste</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Graphite-Granules-Fines')}>Graphite Granules & Fines</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Coal')}>Coal</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Ferro-Alloys')}>Ferro Alloys</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Metallurgical-Coke')}>Metallurgical Coke</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Amorphous-Graphite')}>Amorphous Graphite</li>
            <li className='custom-footer-Link' onClick={() => handleProductClick('Pellet-Coke')}>Pellet Coke</li>
          </ul>
        </div>
        <div className='Learn'>
          <h2 onClick={togglelearnList}>Learn</h2>
          <hr/>
          <ul className={showLearnlist ? 'Learn-list show' : 'Learn-list'}>
          <li><Link className='custom-footer-Link' to='/aboutus'>About Us</Link></li>
          <li><Link className='custom-footer-Link' to="/FAQ">FAQs</Link></li>
          </ul>
        </div>
        <div className='contact-info'>
          <h2 onClick={toggleEmailList}>Connect</h2>
          <hr/>
          <ul className={showEmailList ? 'email-list show' : 'email-list'}>
          <li>
            <Link to="mailto:Sales@Calyco.co" className='custom-footer-Link'>Sales@Calyco.co</Link>
          </li>
          <li><Link to="mailto:Technicalservices@Calyco.co" className='custom-footer-Link'>Technicalservices@Calyco.co</Link></li>
          <li><Link to="mailto:Generalinfo@Calyco.Co" className='custom-footer-Link'>Generalinfo@Calyco.Co</Link></li>
          <li><Link to="/contact" className='custom-footer-Link'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='Careers'>
          <h2 onClick={toggleCareerlist}>Careers</h2>
          <hr/>
          <ul className={showcareerslist ? 'career-list show' : 'career-list'} >
          <li>
            <Link to="/join-our-team" className='custom-footer-Link'>Join Our Team</Link>
          </li>
          </ul>
        </div>
      </footer>
      <div className='footer-bottam-heading'>
        <h1>calyco</h1>
      </div>
    </div>
  );
}

export default Footer;
