import React from 'react';
import Indio from '../../assets/image6.jpeg';
import Rio from '../../assets/image8.jpeg';
import Bar from '../../components/Bar';
import { DashboardNav } from '../../components/DashboardNav';

const customStyles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    h1: {
        textTransform: "uppercase",
        fontFamily: "Comic Sans MS, sans-serif",
        fontSize: "50px",
        marginBottom: "0.5rem",
    },
    h2: {
        fontFamily: "Comic Sans MS, sans-serif",
        fontSize: "25px",
        marginBottom: "1rem",
        marginRight: "2rem",
    },
    img: {
        width: "150%",
        height: "auto",
    },
    section: {
        padding: "5rem",
        marginBottom: "2rem",
        textAlign: "center",
    },
    /* */
};

export const HomePage = () => {
    return (
        <div>
            <DashboardNav />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <div>
                        <h1 style={customStyles.h1}>En Colombia el turismo es sostenible</h1>
                        <h2 style={customStyles.h2}>¡Ven y siente la emoción de explorar la Ciudad de la Eterna Primavera, un destino turístico que te cautivará en cada paso!"</h2>
                    </div>
                    <div>
                        <img src={Indio} alt="Turismo Sostenible en Colombia" style={customStyles.img} />
                    </div>
                </div>
            </section>
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    
                    <div>
                        <h2 style={customStyles.h2}>Explora los destinos turísticos de Medellín y disfruta de su belleza natural.</h2>
                        <p style={customStyles.h2}>
                        Medellín ofrece a los visitantes una experiencia única gracias a su cálido clima, rica cultura y hermosos paisajes. 
                        Con una hospitalidad inigualable, esta ciudad te permite sumergirte en la historia, descubrir la diversidad culinaria 
                        y explorar su entorno natural. Venir a turistear a Medellín es una oportunidad de vivir momentos memorables y llevar 
                        contigo recuerdos inolvidables.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
