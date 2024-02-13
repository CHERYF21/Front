import axios from "axios";

const instance = axios.create({baseURL:'http://localhost:8080' , withCredentials:true})

export default instance;

// Como hacer un formulario con Spring boot BIEN GRACIAS ESTRADA