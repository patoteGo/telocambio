import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Header.sass';
import Swal from 'sweetalert2'
import { AppContext } from './../Context/AppContext'
import Cookies from 'universal-cookie';
import { NAMES,  OPTIONS } from './../config/config.js'
function Header() {
  const context = useContext(AppContext);
  // eslint-disable-next-line
  const [user, setUser] = context.user;

  const logout = () => {
    const cookies = new Cookies();
    cookies.remove(NAMES.COOKIENAME,  OPTIONS);
    setUser([])
    context.token[1]('');
    Swal.fire({
      title: 'Deslogueo',
      text: 'Ya Saliste',
      icon: 'success',
      confirmButtonText: 'Listo'
    })
  }

  const dropdownmenu = (user) => {
    if(user.id){
      return (
        <div className="dropdown-menu" aria-labelledby="dropdown07">
        <Link className="dropdown-item" to='/admin/list'>Productos Ofreces</Link>
        <Link className="dropdown-item" to='/admin/create'>Crear un Producto</Link>
        <button className="dropdown-item" onClick={logout}>Logout</button>
      </div>
      )
    } else {
      return (
        <div className="dropdown-menu" aria-labelledby="dropdown07">
        <Link className="dropdown-item" to="/login">Login</Link>
        <Link className="dropdown-item" to="/register">Registrarse</Link>
      </div>
      )
    }
  }

  return (
    // <UserProvider>
      <div className="Header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/img/logo.png" alt="logo"/>
              <span>TE LO CAMBIO</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/publicaciones">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quienes-somos">Quienes somos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contáctanos</Link>
                </li>
              </ul>
             
              <div className="nav-item dropdown my-md-0 is-dark">
                  <div className="nav-link dropdown-toggle"  id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { user.firstname ? 'Hola '+ user.firstname : 'Cuenta' } </div>
                  
                  {dropdownmenu(user)}
              </div>
              <form className="form-inline my-2 my-md-0" _lpchecked="1">
                <input className="form-control" type="text" placeholder="Buscar.." aria-label="Buscar.."/>
              </form>
            </div>
          </div>
        </nav>
      </div>
    // </UserProvider>
  );
}

export default Header;