import React, { useState, useContext, useEffect } from 'react'
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import Loader from './../Helpers/Loader'
import { AppContext } from './../Context/AppContext'
import { loginUser } from './../config/api.js'
import { NAMES,  OPTIONS } from './../config/config.js'
import Swal from 'sweetalert2'
import { isAuth } from './../middleware/Auth'

export default function Login(props) {
    const context = useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();
    // eslint-disable-next-line
    const [loader, setLoader] = useState("");
    const [user, setUser] = useState(context.user[0])

    const  refreshPage = () =>  {
        window.location.reload(false);
      }

    const onSubmit = (data) => {
        console.log(data);
        setLoader('active');
        loginUser({'email':data.email, 'password':data.password}).then(res => {
        // console.log(res);
        setLoader('');
        if(res.access_token){
            console.log(res.access_token, 'exito');
            const cookies = new Cookies();
            cookies.set(NAMES.COOKIENAME, res.access_token, OPTIONS);
            isAuth().then(res => {
                console.log('auth',res);
                if(res){
                    context.token[1](res.token)
                    context.user[1](res.user)
                    refreshPage()
                }
            });
            Swal.fire({
                title: 'Yuhuuu',
                text: 'Ya estas logueado, ahora presiona el mismo boton para ver tus opciones de cambio',
                icon: 'success',
                confirmButtonText: 'Listo'
              })
        } else {
            console.log(res, 'fallo');
            Swal.fire({
                title: 'Cueck',
                html: `Tu email o password no son validos, <br> Intenta de nuevo`,
                icon: 'error',
                confirmButtonText: 'uchh'
              })
            
        }
    }).catch((err) => {
        setLoader('');
        console.log(err);
        Swal.fire({
            title: 'Cueck',
            html: `Tu email o password no son validos,  <br> Intenta de nuevo`,
            icon: 'error',
            confirmButtonText: 'uchh'
          })
        
    })
    }

    // useEffect(() => {
    //     setUser(context.user[0])
        
    //     // window.location.reload();
    //     // console.log('changestate');
        
    // }, [user])

    return (
        <div>
            <Loader active={loader}/>
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Tienes que loguearte primero</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">


                                <form id="login-form" className="form is-light" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Email:</label><br />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            autoComplete="email"
                                            ref={register({ required: 'Email requerido' })}
                                        />
                                        {errors.email && <p className="badge badge-danger ml-2">{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br />
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="off"
                                            className="form-control"
                                            ref={register({ required: 'Password requerido' })}
                                        />
                                        {errors.password && <p className="badge badge-danger ml-2">{errors.password.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Entrar" />
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
        </div>
    )
}
