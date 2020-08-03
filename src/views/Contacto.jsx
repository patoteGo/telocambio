import React from 'react';
// import ReactDOM from 'react-dom';
import { SendEmail } from '../config/api.js'
import {useForm} from 'react-hook-form';
import Header from './../layouts/Header'
import Footer from './../layouts/footer/Footer2'
import { APIS } from './../config/config'
import Swal from 'sweetalert2'
export default function Contacto() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const dataFormat = {
            email: APIS.ADMINEMAIL,
            subject: `Email de Telocambio de ${data.username} ${data.lastname}`,
            template: 'contactform',
            data: {
                nombre: data.username,
                apellido: data.lastname,
                email: data.email,
                mensaje: data.body
            }
        }
        SendEmail(dataFormat).then((res) => {
            console.log('funciona email', res)
            Swal.fire({
                title: 'Listo',
                text: 'Su email ha sido enviado',
                icon: 'success',
                confirmButtonText: 'Listo'
              })
        })
        .catch((err) => {
            console.log('error de email',err);
            Swal.fire({
                title: 'Error',
                text: 'Hemos tenido un problema enviando su email',
                icon: 'error',
                confirmButtonText: 'Listo'
              })

        })
    }

    return (
        <div>
            <Header interior={true} title="Contáctanos"/>
            <div className="Contacto my-5">
                <div className="container">
                    <div id="contact-row" className="row justify-content-around align-items-start">
                        <div id="contact-column" className="col-md-6">
                            <div id="contact-box" className="col-md-12">
                                <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="form is-light" action="" method="post">
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-primary">Nombre:</label><br />
                                        <input type="text" name="username"  className="form-control" ref={register({required: 'Nombre requerido'})}/>
                                        {errors.username && <p className="badge badge-danger ml-2">{errors.username.message}</p>}
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname" className="text-primary">Apellido:</label><br />
                                        <input type="text" name="lastname"  className="form-control" ref={register({required: 'Apellido requerido'})}/>
                                        {errors.lastname && <p className="badge badge-danger ml-2">{errors.lastname.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-primary">Email:</label><br />
                                        <input type="text" name="email" className="form-control" 
                                        ref={register({required: 'email requerido'})}
                                        />
                                        {errors.email && <p className="badge badge-danger ml-2">{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="text-primary">Mensaje:</label><br />
                                        <input type="text" name="body"  className="form-control" ref={register({required: 'mensaje requerido'})} />
                                        {errors.body && <p className="badge badge-danger ml-2">{errors.body.message}</p>}
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-md">
                                        Enviar
                                    </button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="contact-column" className="col-md-6">
                            <label className="text-primary mb-0" htmlFor="tw">Al twitter</label>
                            <h3 className="font-title text-primary">@telocambio</h3>
                            <div className="my-5"></div>
                            <label className="text-primary mb-0" htmlFor="tw">Escribenos</label>
                            <h3 className="font-title text-primary">contacto@telocambio.cl</h3>
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



