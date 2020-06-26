import React, { useState, useContext } from 'react'
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import Header from './../../layouts/Header'
import Footer from './../../layouts/footer/Footer2.jsx'
import { isAuth } from './../../middleware/Auth'
import { useForm } from 'react-hook-form';
import { AppContext } from '../../Context/AppContext'
import { createUser, loginUser } from './../../config/api.js'
import Loader from './../../Helpers/Loader'
import Swal from 'sweetalert2'
import { NAMES,  OPTIONS } from './../../config/config.js'
import './RegisterLogin.sass'
export default function Register(props) {
    // eslint-disable-next-line
    const [loader, setLoader] = useState("");
    const context = useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setLoader('active');
        createUser(data).then((res) => {
            
            loginUser({'email':data.email, 'password':data.password}).then(res => {
                setLoader('');
                context.token[1](res.access_token)
                
                const cookies = new Cookies();
                cookies.set(NAMES.COOKIENAME, res.access_token, OPTIONS);
                localStorage.setItem(NAMES.COOKIENAME,res.access_token);
                isAuth().then((userDB) => {
                    context.user[1](userDB.user)
                    props.history.push('/admin/list')
                })
                Swal.fire({
                    title: 'Yuhuuu',
                    text: 'Ya estas logueado',
                    icon: 'success',
                    confirmButtonText: 'Listo'
                  })
                props.history.push('/admin/list')
            })
            console.log(data, res)
        }).catch((err) => {
            console.log(err);
            Swal.fire({
                title: 'Cueck',
                html: `Hubo un problema con tu registro, prueba con otro email`,
                icon: 'error',
                confirmButtonText: 'uchh'
              })
        })
    }
    return (
        <div>
            <div>
                <Header />
                <Loader/>
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
