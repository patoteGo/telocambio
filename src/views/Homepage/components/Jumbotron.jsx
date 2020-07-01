import React from 'react'
import { Link } from "react-router-dom";
import './jumbotron.sass'
export default function Jumbotron() {
    return (
        <div>
            <header className="jumbotron jumbotron-fluid d-flex align-items-end">
                <div className="over"></div>
                <div className="container-fluid text-center">
                    <h1 className="display-3">Quieres cambiar tus cosas?</h1>
                    <p className="lead pb-4">Publica aqui y conecta con muchas otras personas que tambien quieren hacer lo mismo</p>
                    <p><Link to="/publicaciones" className="button-5" role="button">Busca que cambiar acá</Link></p>
                </div>
            </header>
        </div>
    )
}
