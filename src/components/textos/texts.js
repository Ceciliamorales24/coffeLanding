import React from 'react';

import './texts.scss'

const Texts = props => {
    return (
        <div className="textss">
            <h2 className={props.classTitle}>{props.title}</h2>
            {props.children}
            <p className={props.classParrafo}>{props.parrafo}.</p>
        </div>
    )
}

export default Texts;