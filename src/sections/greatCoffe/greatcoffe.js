import React from 'react';
import greatCoffe from '../../imagenes/greatCoffe.jpg';
import Texts from '../../components/textos/texts'
import Texts2 from '../../components/textos2/texts2'
import './greatCoffe.scss';

const GreatCoffe = props => {
    return (
        <section className="parallax-effect"
            style={{ backgroundImage: `url(${greatCoffe})` }}>
            <Texts2 title= "WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE"
           parrafo ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
            classTitle=""
            >
                
            </Texts2>
        </section>
    )
}

export default GreatCoffe;