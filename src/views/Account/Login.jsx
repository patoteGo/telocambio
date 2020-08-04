import React, { useState, useContext, useEffect }  from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import Header from './../../layouts/Header'
import Footer from './../../layouts/footer/Footer2.jsx'
import Loader from './../../Helpers/Loader'
import { AppContext } from '../../Context/AppContext'
import { useForm } from 'react-hook-form';
import { isAuth } from './../../middleware/Auth'
import { loginUser } from './../../config/api.js'
import { NAMES,  OPTIONS } from './../../config/config.js'
import Swal from 'sweetalert2'


export default function Login(props) {
    const context = useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();

    const [loader, setLoader] = useState("");
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data);
        setLoader('active');
            loginUser(data).then(res => {
            // console.log(res);
            setLoader('');
            if(res.access_token){
                console.log(res.access_token, 'exito');
                context.token[1](res.access_token)
                // 
                const cookies = new Cookies();
                cookies.set(NAMES.COOKIENAME, res.access_token, OPTIONS);
                localStorage.setItem(NAMES.COOKIENAME,res.access_token);
                isAuth().then((userDB) => {
                    context.user[1](userDB.user)
                    props.history.push('/admin/list')
                })
                Swal.fire({
                    title: 'Bien',
                    text: 'Ya estas logueado',
                    icon: 'success',
                    confirmButtonText: 'Listo'
                  })
            } else {
                console.log(res, 'fallo');
                Swal.fire({
                    title: 'Problemas para entrar?',
                    html: `Tu email o password no son validos, <br> Intenta de nuevo`,
                    icon: 'error',
                    confirmButtonText: 'otra vez'
                  })
                
            }
        }).catch((err) => {
            setLoader('');
            console.log(err);
            Swal.fire({
                title: 'Problemas para entrar?',
                html: `Tu email o password no son validos,  <br> Intenta de nuevo`,
                icon: 'error',
                confirmButtonText: 'otra vez'
              })
            
        })

    }


    useEffect(() => {
        // console.log('user',context);    
        
        if(context.user[0].id){
            history.push('/admin/list')
        }
        // eslint-disable-next-line
    }, [context])

    return (
 
           
            <div> 
                <Header interior={true} title='Ingresar'/>
                <Loader active={loader}/>
                <div className="Login my-4">
                    <div className="container">
                        <div id="login-row  my-4" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form is-light" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-primary">Email:</label><br/>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                className="form-control" 
                                                autoComplete="email"
                                                ref={register({ required: 'Email es requerido' })}
                                            />
                                            {errors.email && <p className="badge badge-danger ml-2">{errors.email.message}</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-primary">Password:</label><br/>
                                            <input 
                                                type="password" 
                                                name="password" 
                                                id="password" 
                                                autoComplete="password"
                                                className="form-control"
                                                ref={register({ required: 'Password es requerido' })}
                                            />
                                            {errors.password && <p className="badge badge-danger ml-2">{errors.password.message}</p>}
                                        </div>
                                        <div className="form-group">
                                            
                                            <input type="submit"  name="submit" className="btn btn-primary btn-md" value="Entrar"/>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <Link to="/register" className="text-primary">Registrarse aquí</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                
            </div>
     
    )
}
