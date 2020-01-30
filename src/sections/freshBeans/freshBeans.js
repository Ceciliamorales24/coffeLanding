import React from 'react';
import ImageFreshBeans from '../../imagenes/coffe-fresh.jpg';
import Texts2 from '../../components/textos2/texts2';
import './freshBeans.scss';

const FreshBeans = props => {
    return (
        <section className="section-fresh">
            <div>
                <Texts2 title="FRESH BEANS"
                    parrafo="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo."
                    classTitle=""
                    referencia=""></Texts2>
            </div>
            <div className="image">
                <img className="image" src={ImageFreshBeans} alt="Esta es una imagen de café" />
            </div>
        </section>
    )
}


export default FreshBeans;