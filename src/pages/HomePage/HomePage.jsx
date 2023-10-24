import React from 'react';
import Indio from '../../assets/indio.jpg';
import Rio from '../../assets/rio.jpg';
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
};

export const HomePage = () => {
    return (
        <div>
            <DashboardNav />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <div>
                        <h1 style={customStyles.h1}>En Colombia el turismo es sostenible</h1>
                        <h2 style={customStyles.h2}>Aprende a cómo turistear en Colombia de una manera sostenible y segura.</h2>
                    </div>
                    <div>
                        <img src={Indio} alt="Turismo Sostenible en Colombia" style={customStyles.img} />
                    </div>
                </div>
            </section>
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <div>
                        <img src={Rio} alt="Ríos de Colombia" style={customStyles.img} />
                    </div>
                    <div>
                        <h2 style={customStyles.h2}>Explora los destinos turísticos de Medellín y disfruta de su belleza natural.</h2>
                        <p style={customStyles.h2}>
                            Descubre la magia de la Ciudad de la Eterna Primavera. Recorre sus calles llenas de historia,
                            disfruta de la deliciosa comida local y embárcate en aventuras inolvidables.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
