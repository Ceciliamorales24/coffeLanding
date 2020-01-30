import React from 'react';


const Cards = props => {
    return (
        <article className="section-card">
            <img src={props.cardImage} alt={props.cardAlt} />
            <h3>{props.cardTitle}</h3>
            <p>{props.cardInfo}</p>
            <p>{props.cardDate}</p>
        </article >
    )
}
export default Cards;