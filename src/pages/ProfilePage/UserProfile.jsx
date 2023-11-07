import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Realiza una solicitud al backend para obtener la información del usuario
    axios.get(`http://localhost:3276/api/users/${userId}`) // Asegúrate de usar la dirección correcta
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar el perfil del usuario', error);
        history.push('/'); // Redirige a la página de inicio o muestra un mensaje de error
      });
  }, [userId, history]);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Agrega más campos de perfil según tus necesidades */}
    </div>
  );
}

export default UserProfile;
