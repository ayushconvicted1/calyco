import React, { useState, useEffect } from 'react';
import './Pages.css';
import email_icon from '../images/email_icon (1).png';
import location_icon from '../images/location.png';
import map_photo from '../images/map_photo.png';
import { Link } from 'react-router-dom';
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

const Article = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleLocationClick = (index) => {
    setActiveLocation(index === activeLocation ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (!isMobileView) {
        setActiveLocation(null);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 


  const contactData = [
    {
      heading: 'India',
      address: 'B-37, Sector - 1, Noida NCR, India',
      email: 'India@calyco.co'
    },
    {
      heading: 'Thailand',
      address: '75 Ocean Tower - II, 18C Floor Sukhumvit Road, Bangkok, Thailand',
      email: 'Thailand@calyco.co'
    },
    {
      heading: 'Korea',
      address: 'Regus Gangnam Station 16F, Seocho-dong, Seoul, Korea',
      email: 'Korea@calyco.co'
    },
    {
      heading: 'Japan',
      address: '19F Parks Tower, Nanbanaka, Naniwa-ku, Osaka-shi, Japan',
      email: 'Japan@calyco.co'
    },
    {
      heading: 'Turkey',
      address: 'Karamehmet Mh. Avrupa Serbest Bolgesi, Ergene/Tekirdag, Turkey',
      email: 'Turkey@calyco.co'
    },
    {
      heading: 'USA',
      address: '3001, Mallard Fox Drive N W Decatur, Alabama, USA',
      email: 'USA@calyco.co'
    },
    {
      heading: 'Singapore',
      address: 'Levels 21 Centennial Tower, 3 Temasek Avenue, Singapore',
      email: 'Singapore@calyco.co'
    },
    {
      heading: 'Netherlands',
      address: 'Zuidplein 126WTC, Toren H, 1077 XV Amsterdam, The Netherlands',
      email: 'Netherlands@calyco.co'
    },
    {
      heading: 'Indonesia',
      address: 'Jl. Modern Industri XVIII, Desa Nambo Udik, Cikande, Serang - Banten, Indonesia',
      email: 'Indonesia@calyco.co'
    }
  ];

  return (
    <div  className='contact-section-main'>
      <div className='contact-page'>
        <p>Contact us</p>
        <h1>Let’s <span>Get in Touch</span></h1>
      </div>
      <div className="article">
        <div className="row">
          {contactData.map((data, index) => (
            <div key={index} className={`location ${activeLocation === index && isMobileView ? 'active' : ''}`}>
              <div className="header" onClick={() => handleLocationClick(index)}>
                <h2 className={`summary ${isMobileView ? 'clickable' : ''}`} >
                  {data.heading}
                </h2>
                {isMobileView && (
                  <button className="toggle-button" onClick={() => handleLocationClick(index)}>
                    {activeLocation === index ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                )}
              </div>
              {(activeLocation === index && isMobileView) || !isMobileView ? (
                <div className="content">
                  <div className="content-row">
                    <img src={email_icon} 
                    style={{
                      height: '28px',
                      paddingLeft: '6px',
                  
                    }}

                    alt="Email Icon" />
                    <p>
                      <Link to={`mailto:${data.email}`} className="email-link">{data.email}</Link>
                    </p>
                  </div>
                  <div className="content-row">
                    <img src={location_icon} className="icon" alt="Location Icon" />
                    <p>{data.address}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="map">
        <img src={map_photo} alt="Map" />
      </div>
    </div>
  );
};

export default Article;