import React from 'react';
import  "./parallax.scss";


const Parallax = props =>{
    return(
        <section className="parallax-effect"
            style= {{backgroundImage: `url(${props.headerImg})`}}>
                {props.children}
        </section>
    )
}

export default Parallax;
