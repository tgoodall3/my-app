import '../../styles/card.css';
import React from 'react';

  function Card(props) {
    return (
      <div className='Cards'>
      <div className={`Card ${props.className}`}>
      <p className='CardText'>{props.text}</p>
      </div>
      </div>
    );
  };

export default Card;
