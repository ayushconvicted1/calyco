import React from 'react';
import './Product_detail.css';

function Faq_questions(props) {
  const { showBorder, title,question,answer,answer_styling} = props;
  const boxShadow = showBorder ? '0px 1px darkgray' : 'none';

  return (
    <div className='question-box' style={{ boxShadow: boxShadow }}>
      <details>
        <summary><h2 style={title}>{question}</h2></summary>
        <p style={answer_styling}>{answer}</p>
      </details>
    </div>
  );
}

export default Faq_questions;
