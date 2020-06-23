import React, { useState, useContext }  from 'react'
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import Header from './../../layouts/Header'
import Footer from './../../layouts/footer/Footer2.jsx'
import Loader from './../../Helpers/Loader'
import { UserContext, UserProvider } from './../../Context/UserContext'
import './Login.sass'
import { loginUser } from './../../config/api.js'
import { NAMES, APIS, OPTIONS } from './../../config/config.js'


// import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'


export default function Login(props) {
    // const [ state ] = useContext(UserProvider);
    const context = useContext(UserContext);
    // const [ name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader('active');
        loginUser({'email':email, 'password':password}).then(res => {
            // console.log(res);
            setLoader('');
            if(res.token){
                console.log(res.token, 'exito');
                context.token[1](res.token)
                props.history.push('/admin/list')
                // Auth.login(res.token, ()=>{
                    
                // });

                const cookies = new Cookies();
                cookies.set(NAMES.COOKIENAME, res.token, OPTIONS);
                Swal.fire({
                    title: 'Yuhuuu',
                    text: 'Ya estas logueado',
                    icon: 'success',
                    confirmButtonText: 'Listo'
                  })
                

            } else {
                console.log(res, 'fallo');
                Swal.fire({
                    title: 'Cueck',
                    html: `Tu email o password no son validos, hubo este error <br> <strong>${res.error}</strong> <br> Intenta de nuevo`,
                    icon: 'error',
                    confirmButtonText: 'uchh'
                  })
                
            }
            
        })

    }

    return (
        <UserProvider>
           
            <div> 
                <Header/>
                <Loader active={loader}/>
                <div className="Login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form is-light" action={APIS.LOGIN} method="post" onSubmit={handleSubmit}>
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Email:</label><br/>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                className="form-control" 
                                                autoComplete="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
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
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info"><span>Recuerda mi password</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                            <input type="submit" disabled={!validateForm()} name="submit" className="btn btn-info btn-md" value="Entrar"/>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <Link to="/register" className="text-info">Registrarse aquí</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                
            </div>
        </UserProvider>
    )
}
