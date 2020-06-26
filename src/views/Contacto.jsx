import React from 'react';
// import ReactDOM from 'react-dom';
import { SendEmail } from '../config/api.js'
import {useForm} from 'react-hook-form';
import Header from './../layouts/Header'
import Footer from './../layouts/footer/Footer2'
import './contacto.sass';

export default function Contacto() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        SendEmail(data)
    }

    return (
        <div>
            <Header />
            <div className="Contacto">
                <div className="container">
                    <div id="contact-row" className="row justify-content-center align-items-center">
                        <div id="contact-column" className="col-md-6">
                            <div id="contact-box" className="col-md-12">
                                <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="form is-light" action="" method="post">
                                    <h3 className="text-center text-info">Contacto</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Nombre:</label><br />
                                        <input type="text" name="username" id="username" className="form-control" /*ref={register({required: true, minLength: 3})}*//>
                                        {errors.username === "minLength" && (<p>Minimo 3 caracteres</p>)}
                                        {errors.username === "required" && (<p>Este campo es obligartorio</p>)}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname" className="text-info">Apellido:</label><br />
                                        <input type="text" name="subject" id="subject" className="form-control" ref={register({required: true})}/>
                                        {errors.lastname === "required" && (<p>Este campo es obligartorio</p>)}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-info">Email:</label><br />
                                        <input type="text" name="email" id="email" className="form-control" 
                                        ref={register({required: true})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="text-info">Mensaje:</label><br />
                                        <input type="text" name="body" id="body" className="form-control" ref={register({required: true})} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Enviar" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Contacto />, rootElement);



