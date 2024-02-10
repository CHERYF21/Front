import React, { useEffect, useState } from "react";
import usuariosService from "../services/usuariosService";

export const ListUsuarios = () =>{
    const [usuario,setUsuario] = useState([]);

    useEffect(() =>{
        usuariosService.getAllUsuarios().then(response => {
            setUsuario(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

    return(
        <div className="container">
            <h2>Lista</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuario.map(
                            usuario =>
                            < tr>
                                <td>{usuario.id}</td> 
                                <td>{usuario.nombre}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )      
}