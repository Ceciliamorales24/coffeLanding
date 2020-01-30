import React from 'react';
import TheBestCoffeImage from '../../imagenes/theBestCoffe.jpg';
import Texts from '../../components/textos/texts';
import TheBestCoffeIcon from '../../components/coffeIcons/theBestCoffeIcon';

import './theBestCoffe.scss';

const TheBestCoffe = props => {
    return (
        <section style={{ backgroundImage: `url(${TheBestCoffeImage})` }}>
            <Texts title="THE BEST COFFEE SHOP"
                parrafo="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, omnis iste natus error sit voluptatem 
                accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque."
                classTitle="section-title white"
                classParrafo="section-parrafo white">
                <div>{TheBestCoffeIcon.map(icon =>{
                    return (
                        <div>
                            <img src={icon.icon}/>
                    <h3>{icon.title}</h3>
                            </div>
                    )
                })}
                </div>
                </Texts>
        </section>
    )
}

export default TheBestCoffe;