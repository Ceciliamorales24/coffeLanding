import React from 'react';
import CoffeCups from '../../components/coffeCups/coffeCups';
import CoffeCupsInfo from '../../components/coffeCups/coffeCupsInfo';
import Parte2Background from '../../imagenes/coffeCupBackground.jpg';

import './coffeEstilos.scss';
import Texts from '../../components/textos/texts';

const CoffeParte2 = () => {
    return (
        <section className="mainParte2" style={{ backgroundImage: `url(${Parte2Background})` }}>
           <Texts title= "WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE"
           parrafo ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                classTitle="section-title black"
                classParrafo ="section-parrafo gray"></Texts>
            <div className="parte2Tazas">
                {CoffeCupsInfo.map(cup => {
                    return <CoffeCups coffeCupImg={cup.img}
                        coffeCupTitle={cup.title}
                        coffeCupInfo={cup.info}></CoffeCups>
                })}

            </div>
        </section>
    )
}

export default CoffeParte2;

