// Como hacer un formulario con Spring boot BIEN GRACIAS ESTRADA

import React, { useEffect, useState } from "react";
import { crearUsuario, guardarUsuario } from "../services/usuariosService";


export const ListUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', password: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await guardarUsuario();
                console.log(response);
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
            // Agregar el nuevo usuario al servidor
            const response = await crearUsuario(nuevoUsuario);
            
            // Agregar el nuevo usuario al estado local
            // setUsuarios([...usuarios, response.data]);
            setNuevoUsuario({ nombre: '', email: '', password: '' });
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={nuevoUsuario.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={nuevoUsuario.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={nuevoUsuario.password}
                        onChange={handleInputChange}
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Subir</button>
            </form>
        </div>
    );
};



   {/* <h2>Lista</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}