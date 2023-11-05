import React from 'react';
import style from "./style.module.css"
import fondoPantalla from '../../assets/vista-superior-manos-sosteniendo-telefono-inteligente.jpg';
import userIcon from '../../assets/user.svg'; // Importa la imagen del usuario
import passwordIcon from '../../assets/password.svg'; // Importa la imagen del candado

export const LoginPage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${fondoPantalla})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    

    return (
        <>
            
            <div className={style.main} style={backgroundStyle}>
                <div className={style.cardmain}>
                    <div className={style.cardinfo}>
                        <h1>Iniciar sesión</h1>
                        <p style={{ fontSize: '14px', color: '#549bb9' }}>
                            Ingresa tus datos para seguir explorando ofertas y más...
                        </p>
                    </div>
                    <div className={style.cardform}>
                        <div className={style.input_user}>
                            <img src={userIcon} alt="user" /> {/* Usa la imagen del usuario importada */}
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={style.input_pass}>
                            <img src={passwordIcon} alt="password" /> {/* Usa la imagen del candado importada */}
                            <input type="password" placeholder="Password" />
                        </div>
                        <button className={style.btn} >Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;

