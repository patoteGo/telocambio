import React from 'react'
import { loginUser } from './../config/api.js';
import { NAMES, APIS, OPTIONS } from './../config/config.js';
import { Link } from "react-router-dom";
export default function Login() {
    const handleSubmit = (e) => {

    };

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">Tienes que loguearte primero</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form id="login-form" className="form is-light" action={APIS.LOGIN} method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                                            <label htmlFor="username" className="text-info">Email:</label><br/>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                className="form-control" 
                                                autoComplete="email"
                                               
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input 
                                                type="password" 
                                                name="password" 
                                                id="password" 
                                                autoComplete="password"
                                                className="form-control"
                                               
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit"  name="submit" className="btn btn-info btn-md" value="Entrar"/>
                                        </div>
                    </form>
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
