import React from 'react';

import './contacto.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacto() {
    return (

        <div className="container">
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: "black" }}>
                <h1 class="display-4" style={{ fontSize: "70px", color: "white" }}><strong>Contacto</strong></h1>
            </div>
            <div className="row" style={{direction:"column",  justify:"flex-end", alignItems:"flex-start"}}>

                <div className="form-group col-md-8">
                    <label for="inputNombre">Nombre:</label>
                    <input type="nombre" className="form-control" id="inputNombre" />
                </div>
                <div className="form-group col-md-8">
                    <label for="inputApellido">Apellido:</label>
                    <input type="apellido" className="form-control" id="inputApellido" />
                </div>
                <div className="form-group col-md-8">
                    <label for="inputEmail">E-mail:</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="..." />
                </div>
                <div className="form-group col-md-8">
                    <label for="inputMensaje">Mensaje:</label>
                    <input type="text" className="form-control" id="inputMensaje" placeholder="..." />
                </div>
                <button type="send" className="btn btn-primary" style={{ backgroundColor: "black" }}>Enviar</button>
                <hr></hr>
            </div>
        </div>
    )
}



export default Contacto;