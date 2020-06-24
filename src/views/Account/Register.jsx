import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import Header from './../../layouts/Header'
import Footer from './../../layouts/footer/Footer2.jsx'
import { useForm } from 'react-hook-form';
import { createUser } from './../../config/api.js'
import Loader from './../../Helpers/Loader'
import './RegisterLogin.sass'
export default function Register() {
    const [loader, setLoader] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setLoader('active');
        createUser(data).then((res) => {
            setLoader('');
            console.log(data, res)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <div>
                <Header />
                <div className="Register">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-8">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form is-light" onSubmit={handleSubmit(onSubmit)} >
                                        <h3 className="text-center text-info">Registrarse</h3>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="firstname" className="text-info">Nombre:</label><br />
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        id="firstname"
                                                        className="form-control"
                                                        ref={register({ required: 'Primer Nombre requerido' })}
                                                    />
                                                    {errors.firstname && <p className="badge badge-danger ml-2">{errors.firstname.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="lastname" className="text-info">Apellido:</label><br />
                                                    <input
                                                        type="text"
                                                        name="lastname"
                                                        id="lastname"
                                                        className="form-control"
                                                        ref={register({ required: 'Primer Nombre requerido' })}
                                                    />
                                                    {errors.lastname && <p className="badge badge-danger ml-2">{errors.lastname.message}</p>}
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="text-info">Email:</label><br />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="form-control"
                                                        ref={register({ required: 'Primer Nombre requerido' })}
                                                    />
                                                    {errors.email && <p className="badge badge-danger ml-2">{errors.email.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        className="form-control"
                                                        ref={register({ required: 'Primer Nombre requerido' })}
                                                    />
                                                    {errors.password && <p className="badge badge-danger ml-2">{errors.password.message}</p>}
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Registrarse" />
                                        </div>

                                        <div id="register-link" className="text-right">
                                            <Link to="/login" className="text-info">Loguearse acá</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}
