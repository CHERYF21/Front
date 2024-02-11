import axios from "axios";


const USUARIO_SABE_REST_API_URL = "http://localhost:8080/usuarios";

class UsuarioService{
    addUsuario(nuevoUsuario) {
        throw new Error("Method not implemented.");
    }
    getAllUsuarios(){
        return axios.get(USUARIO_SABE_REST_API_URL);
    }
}

export default new UsuarioService();