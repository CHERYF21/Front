import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "./Formulario.css"


function Formulario() {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div class="container-form">
      <div class="information">
        <div class="info-childs">
          <h2>Bienvenidos a Orion Dreams!</h2>
          <p>Si ya estás registrado haz clic en el siguiente botón</p>
           <input type="button" value="Iniciar Sesión"/>
        </div>
      </div>
      <div class="form-information">
        <div class="form-information-childs">
          <h2>Crear una cuenta</h2>
          <div class="icons">
          <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
          <p>Si aún no tienes una cuenta, regístrate</p>
          <form>
            <label>
        
              <input type="text" placeholder="Nombre" />
            </label>
            <label>
            
             <input type="number" placeholder="Celular" />
            </label>
            <label>
            
             <input type="email" placeholder="Email" />
            </label>
            <label> 
            
            <input type="text" placeholder="Dirección" />
            </label>
            <label>
            
            <input type="password" placeholder="Contraseña" />
            </label>
            <label>
            
            <input type="password" placeholder="Confirmacion de contraseña" />
            </label>
            <input type="submit" value="Registrarse"/>
          </form>
        </div>
      </div>
    </div>
      
  );
}

export default Formulario;
