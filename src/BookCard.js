import React from 'react';
import App from './App';

const BookCard = props => {
  return (
    <div className='card-container'>
      <img src={props.image} alt='' />
      <div className='desc'>
        <h2>{props.title}</h2>
        <p>AUTHOR: {props.author}</p>
        <p>
          PUBLISHED:{' '}
          {props.published === '0000'
            ? 'Not Available'
            : props.published.substring(0, 4)}
        </p>
        <p>LINK: {props.link}</p>
        <p>DESCRIPTION: {props.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
