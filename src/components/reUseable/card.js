import '../../styles/card.css';
import React from 'react';

function Card(props) {
  return (
    <div className='Card' data-aos="fade-up">
      <img className='CardImage' src={props.image} alt={props.text} />
      <p className='CardText'>{props.text}</p>
    </div>
  );
}

export default Card;
