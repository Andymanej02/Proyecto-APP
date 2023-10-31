import React from 'react';
import { Box } from '@mui/material';
import Bar from '../../components/Bar';
import Map from '../../assets/Map.png';

import TuImagen from '../../assets/Map.png';
import { DashboardNav } from '../../components/DashboardNav';
import { MapComponent } from '../../components/MapComponent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const customStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    h1: {
        textTransform: "uppercase",
        fontFamily: "Arial, sans-serif",
        fontSize: "28px",
        marginBottom: "0.5rem",
    },
    h2: {
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        marginBottom: "1rem",
    },
    section: {
        padding: "4rem 0 0 0",
        marginBottom: "2rem",
        textAlign: "center",
    },
    img: {
        maxWidth: "100%",
        height: "auto",
    },
    accordion: {
        width: "100%",
        marginBottom: "1rem",
    },
    question: {
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
    },
};

export const GuidePage = () => {
    return (
        <>
            <header>
                <DashboardNav />
            </header>
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <h1 style={customStyles.h1}>¿Cómo hacer turismo sostenible?</h1>
                    <h2 style={customStyles.h2}>Aprende a cómo turistear en Colombia de una manera sostenible y segura.</h2>
                </div>
            </section>

            <div style={customStyles.container}>
                <MapComponent />
            </div>

            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Qué llevar para la caminata?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Disfrutar de las caminatas en Medellín es una experiencia única para los amantes de la naturaleza y la aventura.
                                La ciudad ofrece una variedad de rutas escénicas que te llevarán a través de exuberantes bosques, cascadas y montañas impresionantes.
                                No olvides llevar ropa cómoda y resistente, calzado adecuado para caminar, una botella de agua, protector solar y repelente de insectos.
                            </p>
                            <p>
                                Además, empaca una cámara para capturar los impresionantes paisajes y no te olvides de respetar el entorno natural y seguir las indicaciones de las autoridades locales.
                                ¡Prepárate para descubrir la belleza de Medellín a pie!
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Qué hoteles románticos en Medellín tienen buenas vistas?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            En Medellín, el Hotel Mirador ofrece impresionantes vistas de la ciudad y las montañas circundantes.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Cuánto cuesta un hotel romántico en Medellín para este fin de semana?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Los precios varían según la ubicación y la categoría del hotel, pero puedes encontrar opciones a partir de $100 por noche.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Cuáles son los mejores hoteles románticos cerca del Aeropuerto Internacional José María Córdova en Medellín?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Algunos de los hoteles románticos cercanos al aeropuerto son el Hotel Movich Las Lomas y el Hotel LQ.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Qué hoteles románticos en Medellín son ideales para parejas?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            El Hotel Dann Carlton y el Hotel Charlee son excelentes opciones para parejas que buscan una estancia romántica.
                        </AccordionDetails>
                    </Accordion>
                    {/* Agrega más acordeones para las demás preguntas aquí */}
                </div>
            </section>
        </>
    );
}
