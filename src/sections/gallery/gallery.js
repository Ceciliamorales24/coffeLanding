import React from 'react';
import Gallery1 from '../../imagenes/coffe1.jpg';
import Gallery2 from '../../imagenes/coffe2.jpg';
import Gallery3 from '../../imagenes/coffe3.jpg';

import './gallery.scss';

const Gallery = () => {
    const galleryImagenes = [Gallery1, Gallery2, Gallery3];
    return (
        <section>
            {
                galleryImagenes.map(imagen => {
                    return <img src={imagen} />
                })
            }
        </section>
    )


}

export default Gallery;