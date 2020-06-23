import React from 'react'
import { loginUser } from './../config/api.js';
import { useForm } from 'react-hook-form';
import { NAMES, APIS, OPTIONS } from './../config/config.js';
import { Link } from "react-router-dom";
export default function Login() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
        
      }

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document" style={{  maxWidth: '400px'}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">Tienes que loguearte primero</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">

                        
                    <form id="login-form" className="form is-light" action={APIS.LOGIN} method="post" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="username" className="text-info">Email:</label><br/>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form-control" 
                                autoComplete="email"
                                ref={register({required: 'Email requerido'})}
                            />
                            {errors.email && <p className="badge badge-danger ml-2">{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-info">Password:</label><br/>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                autoComplete="off"
                                className="form-control"
                                ref={register({required: 'Password requerido'})}
                            />
                            {errors.password && <p className="badge badge-danger ml-2">{errors.password.message}</p>}
                        </div>
                        <div className="form-group">
                            <input type="submit"  name="submit" className="btn btn-info btn-md" value="Entrar"/>
                        </div>
                    </form>
                    </div>
                    </div>
                    <div className="modal-footer">
                        Si no estas en Te lo cambio
                        <Link to="/register" className="text-info">Registrarse aquí</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
