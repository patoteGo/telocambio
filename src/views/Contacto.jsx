import React from 'react';
import Header from './../layouts/Header'
import Footer from './../layouts/footer/Footer2'
import './contacto.sass';

export default function Contacto() {
    return (
        
            <div className="contacto">
                <Header/>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Contacto</h1>
                        <p className="lead"></p>
                    </div>
                </div>
                <div className="container">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Nombre:</label>
                        <input type="nombre" className="form-control" id="inputNombre" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputApellido">Apellido:</label>
                        <input type="apellido" className="form-control" id="inputApellido" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">E-mail:</label>
                        <input type="email" className="form-control" id="inputEmail" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputMensaje">Mensaje:</label>
                        <input type="text" className="form-control" id="inputMensaje" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputMensaje">Mensaje:</label>
                        <input type="text" className="form-control" id="inputMensaje" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

                <Footer />
            </div>
    
    )
}



