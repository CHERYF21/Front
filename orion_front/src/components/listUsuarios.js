// @ts-ignore
import React, { useEffect, useState } from "react";
import usuariosService from "../services/usuariosService";

export const ListUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({ id: '', nombre: '', email: '', password: '' });

    useEffect(() => {
        usuariosService.getAllUsuarios().then(response => {
            setUsuarios(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await usuariosService.addUsuario(nuevoUsuario);
            setUsuarios([...usuarios, nuevoUsuario]);
            setNuevoUsuario({ id: '', nombre: '', email: '', password: '' });
        } catch (error) {
            console.error('Error al agregar usuario:', error);
        }
    };

    return (
        <div className="container">
            <h2>Lista</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario =>
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        value={nuevoUsuario.id}
                        onChange={handleInputChange}
                    />
                </div>
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
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Agregar Usuario</button>
            </form>
        </div>
    );
};
