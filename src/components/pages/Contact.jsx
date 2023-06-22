import React from 'react'
import Ourculture from './Aboutus/Ourculture'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope,faLocationDot
} from '@fortawesome/free-solid-svg-icons'; 

function Contact() {
  return (
    <div style={{backgroundColor:"#e4e0db"}}>
        <h3  style={{
    fontFamily: "sans-serif",
    padding: "25px 15px 20px 24px",
    fontSize: "18px",
    fontWeight: "500"

    }}>Let's get in touch</h3>
        <div className='outculture-items'>
        <Ourculture 
       heading="India"style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
       fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
         <p><FontAwesomeIcon icon={faEnvelope} />   <span>India@RefraTherm.Com</span></p> 
        <p><FontAwesomeIcon icon={faLocationDot} />  <span>B-37, Sector - 1, Noida NCR, India</span></p> 
            </div>
        }
        />
         <Ourculture 
      heading="Thailand"style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
      fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
           <p><FontAwesomeIcon icon={faEnvelope} />   <span>Thailand@RefraTherm.Com</span></p>
           <p><FontAwesomeIcon icon={faLocationDot} /><span>75 Ocean Tower - II, 18C Floor Sukhumvit Road, Bangkok, Thailand</span></p>
            </div>
        }
        />
     <Ourculture 
       heading="Korea"style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
       fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
         <p><FontAwesomeIcon icon={faEnvelope} />    <span>Korea@RefraTherm.Com</span></p>
         <p><FontAwesomeIcon icon={faLocationDot} />  <span>Regus Gangnam Station 16F, Seocho-dong, Seoul, Korea</span></p>
            </div>
        }
        />
     <Ourculture 
        heading="Japan "style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
        fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
        <p><FontAwesomeIcon icon={faEnvelope} />     <span>Japan@RefraTherm.Com</span></p>
        <p><FontAwesomeIcon icon={faLocationDot} />  <span>19F Parks Tower, Nanbanaka, Naniwa-ku, Osaka-shi, Japan</span></p>
            </div>
        }
        />
     <Ourculture 
      heading="Turkey"style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
      fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
        <p><FontAwesomeIcon icon={faEnvelope} />     <span>Turkey@RefraTherm.Com</span></p>
        <p><FontAwesomeIcon icon={faLocationDot} />  <span>Karamehmet Mh. Avrupa Serbest Bolgesi, Ergene/Tekirdag, Turkey</span></p>
            </div>
        }
        />
     <Ourculture 
         heading="USA"style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
         fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
         <p><FontAwesomeIcon icon={faEnvelope} />    <span>USA@RefraTherm.Com</span></p>
         <p><FontAwesomeIcon icon={faLocationDot} />  <span>3001, Mallard Fox Drive N W Decatur, Alabama, USA</span></p>
            </div>
        }
        />
         <Ourculture 
       heading="Singapore" style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
       fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
           <p><FontAwesomeIcon icon={faEnvelope} />  <span>Singapore@RefraTherm.Com</span></p>
           <p><FontAwesomeIcon icon={faLocationDot} /> <span>Levels 21 Centennial Tower, 3 Temasek Avenue, Singapore</span></p>
            </div>
        }
        />
     <Ourculture 
      heading="Netherlands " style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
      fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
           <p><FontAwesomeIcon icon={faEnvelope} />  <span>Netherlands@RefraTherm.Com</span></p>
           <p><FontAwesomeIcon icon={faLocationDot} /> <span>Zuidplein 126WTC, Toren H, 1077 XV Amsterdam, The Netherlands</span></p>
            </div>
        }
        />
     <Ourculture 
        heading="Indonesia " style={{ backgroundColor: "#333333",color:"white",padding: "9px 0px 5px 8px" ,
        fontSize: "25px", fontFamily: "math" }}
        para={
            <div>
           <p><FontAwesomeIcon icon={faEnvelope} />  <span>Indonesia@RefraTherm.Com</span></p>
           <p><FontAwesomeIcon icon={faLocationDot} /> <span>Jl. Modern Industri XVIII, Desa Nambo Udik, Cikande, Serang - Banten, Indonesia</span></p>
            </div>
        }
        />
        </div>



    </div>
  )
}

export default Contact