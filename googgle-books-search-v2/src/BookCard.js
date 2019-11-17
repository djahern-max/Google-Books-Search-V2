import React from 'react';
import App from './App';

const BookCard = (props) => {
    return (

        <div className="card-container">

            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.athor}</h3>
                <p>{props.publishedDate}</p>
            </div>

        </div>
    )
}

export default BookCard;