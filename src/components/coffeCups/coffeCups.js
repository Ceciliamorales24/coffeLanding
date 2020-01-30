import React from 'react';

const CoffeCups = props => {
    return (
        <article className="coffeCup-container">
            <img src={props.coffeCupImg} />
            <h3>{props.coffeCupTitle}</h3>
            <p className="section-parrafo gray">{props.coffeCupInfo}</p>
        </article >
    )
}

export default CoffeCups;