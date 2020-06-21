import React from 'react';
import './contacto.sass';


import 'bootstrap/dist/css/bootstrap.min.css';

function Contacto  () {
    return (

        <div className="formulario" >
            <div className="jumbotron">
                <div className="container">
                    <img src="https://lh3.googleusercontent.com/proxy/3F9evOZf1xOtz4p0SWTi85i2LPd-KuysQ54px4Zzqmu4q1NRiGEH7TvdkBYFo0enKq_T5HFPOgcstUAwajCXCwuNAKecviwGjvRS4vZPmBe6F7RxGgz5BE2xp1TNHdvAYYWpAAuR2g" class="img-fluid" alt="" />
                    <p className="lead">Contacto</p>
                </div>
            </div>
            <div className="form col-md-8">

                <div className="form-group col-md-4">
                    <label for="inputNombre">Nombre:</label>
                    <input type="nombre" className="form-control" id="inputNombre" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputApellido">Apellido:</label>
                    <input type="apellido" className="form-control" id="inputapellido" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputEmail">E-mail:</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="..." />
            </div>
            <div className="form-group">
                <label for="inputMensaje">Mensaje:</label>
                <input type="text" className="form-control" id="inputmensaje" placeholder="..." />
            </div>
            <button type="send" className="btn btn-primary">Enviar</button>

        </div>
    )
}



export default Contacto;