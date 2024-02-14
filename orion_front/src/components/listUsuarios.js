// ListUsuarios.js
import React, { useEffect, useState } from "react";
import usuariosService from "../services/usuariosService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "./listUsuarios.css"

export const ListUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', password: '' });
    const [error, setError] = useState(String);
    const [isSignUp, setIsSignUp] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await usuariosService.getAllUsuarios();
                setUsuarios(response.data);
            } catch (error) {
                console.log(error);
                setError("Error al obtener usuarios. Por favor, inténtalo de nuevo más tarde.");
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nuevoUsuario.nombre || !nuevoUsuario.email || !nuevoUsuario.password) {
            setError("Por favor completa todos los campos.");
            return;
        }

        try {
            await usuariosService.addUsuario(nuevoUsuario);
            setUsuarios([...usuarios, nuevoUsuario]);
            setNuevoUsuario({ nombre: '', email: '', password: '' });
            setError(String);
        } catch (error) {
            setError(error.message);
        }

    };
        const handleToggle = () => {
            setIsSignUp(!isSignUp); 
        
    };

    return (
        <div className={`container ${isSignUp ? 'active' : ''}`}>
        <div className="form-container sign-up">
          <form>
            <h1>Crear una Cuenta</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
            <span>Si aún no tienes una cuenta, regístrate</span>
            <input type="text" placeholder="Nombre" />
            <input type="number" placeholder="Celular" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Dirección" />
            <input type="password" placeholder="Contraseña" />
            <input type="password" placeholder="Confirmacion de contraseña" />
            <button type="submit" onClick={handleSubmit} class="animated-button">Regístrate ahora</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Iniciar Sesión</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
            <span>Ingrese sus datos personales para utilizar todas las funciones del sitio web.</span>
            <input type="text" placeholder="Nombre" value={nuevoUsuario.nombre} onChange={handleInputChange}/>
            <input type="email" placeholder="Email" value={nuevoUsuario.email} onChange={handleInputChange}/>
            <input type="password" placeholder="Contraseña" value={nuevoUsuario.password} onChange={handleInputChange}/>
            <a href="#">¿Olvidaste tu contraseña?</a>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" onClick={handleSubmit} class="animated-button">Iniciar Sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenidos a Orion Dreams!</h1>
              <p>Si ya estás registrado haz clic en el siguiente botón</p>
              <button className="hidden" onClick={handleToggle}>Iniciar Sesión</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hola Amig@!</h1>
              <p>Regístrese con sus datos personales para utilizar todas las funciones del sitio</p>
              <button className="hidden" onClick={handleToggle}>Registrarse</button>
            </div>
          </div>
        </div> 
      </div>
     
    );
}

export default ListUsuarios;