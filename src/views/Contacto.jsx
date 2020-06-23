import React from 'react';
import Header from './../layouts/Header'
import Footer from './../layouts/footer/Footer2'
import { Link } from "react-router-dom";
import './contacto.sass';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contacto() {
    return (
        <div className="contact">
            <Header />
            <div class="jumbotron ">
                <div class="container">
                    <h1 class="display-4">Contacto</h1>
                    <p class="lead"></p>
                </div>
                <form >
                    <div className="form-group col-md-6">
                        <label for="inputNombre">Nombre:</label>
                        <input type="nombre" className="form-control" id="inputNombre" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputApellido">Apellido:</label>
                        <input type="apellido" className="form-control" id="inputApellido" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail">E-mail:</label>
                        <input type="email" className="form-control" id="inputEmail" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputMensaje">Mensaje:</label>
                        <input type="text" className="form-control" id="inputMensaje" />
                    </div>
                     
                        <div><Link to="/" className="btn btn-primary ">Enviar</Link></div>
                        
                    </form>
                </div>
                <Footer />
            </div >
        
    )
}



export default Contacto;