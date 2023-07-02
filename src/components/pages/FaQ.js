import React, { useState } from 'react';
import "./Pages.css";
import About_calyco from './About_calyco';
import About_products from './About_products';
import HelpCenterForm from './HelpCenterForm';

function FaQ() {
  const [showCalyco, setShowCalyco] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showfeedbackform, setShowFeedBackForm] = useState(false);

  const handleCalycoClick = () => {
    setShowCalyco(true);
    setShowProducts(false);
  };

  const handleProductsClick = () => {
    setShowCalyco(false);
    setShowProducts(true);
  };

  const contactform=()=> {  console.log('contactform clicked');
  setShowFeedBackForm(!showfeedbackform)}
  

  return (
    <div className='FAG-PAGE'>
      <div className='contact-page'>
        <p>Help center</p>
        <h1>Frequently Asked <span>Questions</span></h1>
      </div>
      <div className='faq-main-box'>
        <div className='Right-faq-heading'>
          <div>
            <div className={showCalyco ? 'vertical-line active' : 'vertical-line'} />
            <h3 className={showCalyco ? 'active' : ''} onClick={handleCalycoClick}> <span>About</span> Calyco</h3>
          </div>
          <div>
            <div className={showProducts ? 'vertical-line active' : 'vertical-line'} />
            <h3 className={showProducts ? 'active' : ''} onClick={handleProductsClick}><span>About</span> Products</h3>
          </div>
        </div>
        <div className='left-faq-heading'>
          {showCalyco && <About_calyco />}
          {showProducts && <About_products />}
        </div>
      </div>
      <div  className='bottam-help-line'>
        <h3 onClick={contactform}>Have a <span>Question?</span> Get an <span>Answer.</span></h3>
        <div className={showfeedbackform ? 'Feedbackfrom active' : 'Feebackform'} />
       <div className={showfeedbackform ? 'contactform active' : 'contactform'}   >
       <HelpCenterForm  onClick={contactform}/>
       </div>
        
      </div>
    </div>
  );
}

export default FaQ;
