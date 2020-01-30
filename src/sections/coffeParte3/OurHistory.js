import React from 'react';
import Texts from '../../components/textos/texts'
import './ourHistory.scss';


const Ourhistory = props => {
return(
    <section className="section-fondo">
        <Texts className="section-title" title= "OUR HISTORY"
           parrafo ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
            classTitle="section-title white"
            classParrafo="section-parrafo gray">></Texts>
        <img className="image" src={props.image} alt={props.altimage}/>
    </section>
)
}

export default Ourhistory;