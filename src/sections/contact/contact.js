import React from 'react';
import ImageFotter from '../../imagenes/imageFotter.jpg';
import './contact.scss';

const Contact = () => {
    let datosContact1 = [
        {
            nombre: "WEEKDAYS",
            dato: "08PM-12AM",
        },
        {
            nombre: "WEEKEND",
            dato: "12AM-02AM",
        },

    ]
    let datosContact2 = [
        {
            title: "PHONE",
            info: "+(000) 111 222 333",
        },
        {
            title: "MAIL",
            info: "adress@mail.com",
        },
        {
            title: "ADRESS",
            info: `543 TN, doula street
                   NY, New York`,
        },
    ]
    return (
        <section>
            <div style={{ backgroundImage: `url(${ImageFotter})` }}>
                <h2 className="section-title white">COME ON IN!</h2>
                {datosContact1.map(contact => {
                    return <div><h4>{contact.nombre}</h4><p>{contact.dato}</p></div>
                }
                )}
            </div>
            <div>
                <h2 className="section-title white">CONTACT</h2>
                {datosContact2.map(contacts => {
                    return <div><h4>{contacts.title}</h4><p>{contacts.info}</p></div>
                }
                )}
            </div>
        </section >
    )
}
export default Contact;