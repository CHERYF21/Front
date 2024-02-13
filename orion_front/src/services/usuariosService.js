import axios from './axios';



const USUARIO_SABE_REST_API_URL = "http://localhost:8080";

// Como hacer un formulario con Spring boot BIEN GRACIAS ESTRADA

    
        export const crearUsuario =(_nuevoUsuario) => axios.post(USUARIO_SABE_REST_API_URL + "/create" , _nuevoUsuario);
    
    
        export const guardarUsuario = () => axios.get(USUARIO_SABE_REST_API_URL + "/usuarios"  );
    


