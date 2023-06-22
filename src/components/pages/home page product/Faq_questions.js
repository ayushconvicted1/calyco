import React from 'react';
import './Product_detail.css';

function Faq_questions(props) {
  const boxShadow = props.showBorder ? '0px 1px darkgray' : 'none';

  return (
    <div className='question-box' style={{ boxShadow: boxShadow }}>
      <details>
        <summary><h2>{props.question}</h2></summary>
        <p>{props.answer}</p>
      </details>
    </div>
  );
}

export default Faq_questions;
