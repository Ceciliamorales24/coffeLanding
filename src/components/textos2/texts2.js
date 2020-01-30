import React from 'react';

import './texts2.scss'

const Texts2 = props => {
    return (
        <div className="textss2">
            <h2 className={props.classTitle}> {props.title}</h2>
            <p className={props.classParrafo}>{props.parrafo}.</p>
            <a href={props.referencias}>LEARN MORE</a>
        </div>
    )
}

export default Texts2;