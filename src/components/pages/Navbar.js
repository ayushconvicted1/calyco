import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from '../images/home (1).png';
import productimg from '../images/package.png';
import aboutus from '../images/info.png';
import team from '../images/briefcase.png';
import contactus from '../images/contact-us.png';
import faqquestions from '../images/help.png';
import { VscChromeClose } from 'react-icons/vsc';
import navarrow from '../images/nav_arrow.png'

import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showTradingMenu, setShowTradingMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const getPageName = (pathname) => {
    if (pathname === '/') {
      return 'Calcyo';
    } else {
      const pathParts = pathname.split('/');
      return pathParts[pathParts.length - 1];
    }
  };


  useEffect(() => {
    const pageName = getPageName(location.pathname);
    document.title = pageName;
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const showSidebar = () => setSidebar(!sidebar);

  const toggleProductMenu = () => {
    setShowProductMenu(!showProductMenu);
  };

  const toggleTradingMenu = () => {
    setShowTradingMenu(!showTradingMenu);
  };

  const handleProductClick = (productName) => {
    // Perform actions based on the clicked product ID
    console.log(`Clicked product ID: ${productName}`);
    navigate(`/products/${productName}`);
    window.scrollTo(0, 0);
  };


  

  return (
    <>
    <div className='top-blank-bar'></div>
      <div className="navbar">
        <button className="menu-bars" onClick={showSidebar}>
          <FontAwesomeIcon icon={faBars} style={{ color: 'black' }} />
        </button>
        <h1 className="navbar-list-heading">
       <Link  to="/"  className='logo-name'>
          <span className="heading-1">calyco</span>
      </Link>   
        </h1>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}  id='product-nav-text'>
        <ul className="nav-menu-items" >
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px' }}>
            <li className="navbar-toggle">Menu</li>
            <VscChromeClose onClick={showSidebar} />
          </div>
          {!showProductMenu && ( 
            <>
            <Link to="/" className="custom-link">
              <li className="nav-text" onClick={showSidebar}>
                <img className="navbar-icons" src={home} /> 
                <span> Home</span>
              </li>
              </Link>
              <Link to="/aboutus" className="custom-link">
              <li className="nav-text" onClick={showSidebar}>
                <img className="navbar-icons" src={aboutus} />{' '}
               
               <span>   About us </span>
               
              </li>
              </Link>
            </>
          )}
          <li  className={`nav-text${showProductMenu ? 'hide' : ''}`} onClick={toggleProductMenu}
          

          >
            {!showProductMenu && <img className="navbar-icons" src={productimg} />}
            {showProductMenu ? (
              <div className="sub-menu" >
                <li className="nav-subtext" onClick={() => handleProductClick("Calcined-Petroleum-Coke")}>
                  Calcined Petroleum Coke
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Calcined-Anthracite')} >
                  Calcined Anthracite
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Carbon-Anode-Paste')}>
                  Carbon Anode Paste
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Carbon-Raiser')}>
                  Carbon Raiser
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Carbon-Electrode-Paste')}>
                  Carbon Electode Paste
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Carbon-Tamping-Paste')}>
                  Carbon Tamping Paste
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Graphite-Granules-Fines')}>
                  Graphite Granules &amp; Fines
                </li>
                <li className="nav-subtext" onClick={() => handleProductClick('Coal')}>Coal</li>
                <li className="nav-subtext" onClick={() => handleProductClick('Ferro-Alloys')}>Ferro Alloys</li>
                <li className="nav-subtext" onClick={() => handleProductClick('Metallurgical-Coke')}>Metallurgical Coke</li>
                <li className="nav-subtext"  onClick={() => handleProductClick('Amorphous-Graphite')}>Amorphous Graphite</li>
                <li className="nav-subtext"   onClick={() => handleProductClick('Pellet-Coke')}>Pellet Coke</li>
              </div>
            ) : (
              'Product'
            )}
           
           {location.pathname !== '' && !showProductMenu && (
    <span className="after"><img src={navarrow}/></span>
  )}
  
          </li>
          {!showProductMenu && (
            <>
             <Link className="custom-link">
              <li className={`nav-text ${showProductMenu ? 'hide' : ''}`}>
                <img className="navbar-icons" src={team} />
              <span>  Join our team</span>
              </li>
              </Link>
              <Link to="/contact" className="custom-link">
              <li className={`nav-text ${showProductMenu ? 'hide' : ''}`} onClick={showSidebar}>
                <img className="navbar-icons" src={contactus} />
                 <span>Contact us</span> 
              </li>
              </Link>
              <Link to="/FAQ" className="custom-link">
              <li className={`nav-text ${showProductMenu ? 'hide' : ''}`} onClick={showSidebar}>
                <img className="navbar-icons" src={faqquestions} />
                <span> FAQ</span>
              </li>
              </Link>
            </>
          )}
        </ul>
      </nav>
      <div className={`overlay ${sidebar ? 'visible' : ''}`} onClick={showSidebar} />

    </>
  );
};

export default Navbar;
