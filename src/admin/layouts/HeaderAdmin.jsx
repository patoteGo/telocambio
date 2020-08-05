import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AppContext } from './../../Context/AppContext'
import Cookies from 'universal-cookie';
import { NAMES,  OPTIONS } from './../../config/config.js'
import Logo from './../../layouts/Logo'
import Swal from 'sweetalert2'
function Header(props) {
  const context = useContext(AppContext);
  // eslint-disable-next-line
  const [user, setUser] = context.user;

  const logout = () => {
    const cookies = new Cookies();
    cookies.remove(NAMES.COOKIENAME,  OPTIONS);
    localStorage.removeItem(NAMES.COOKIENAME);
    setUser([])
    context.token[1]('');
    Swal.fire({
      title: 'Deslogueo',
      text: 'Ya Saliste',
      icon: 'success',
      confirmButtonText: 'Listo'
    })
  }

  const toggler = () => {
    console.log('toggle');
    if(!document.querySelector('.navbar-toggler').classList.contains('collapsed')){
      console.log('on');
      if(document.querySelector('.Header.interior')){
        document.querySelector('.Header.interior').classList.add('menu')
      }
      
    } else {
      if(document.querySelector('.Header.interior')){
        document.querySelector('.Header.interior').classList.remove('menu')
      }
    }
  }

  const dropdownmenu = (user) => {
    if(user.id){
      return (
        <div className="dropdown-menu font-title" aria-labelledby="dropdown07">
        <NavLink className="dropdown-item font-title" to='/admin/list'>Productos Ofreces</NavLink>
        <NavLink className="dropdown-item font-title" to='/admin/create'>Crear un Producto</NavLink>
        <button className="dropdown-item font-title" onClick={logout}>Logout</button>
      </div>
      )
    } else {
      return (
        <div className="dropdown-menu" aria-labelledby="dropdown07">
        <NavLink className="dropdown-item font-title" to="/login">Login</NavLink>
        <NavLink className="dropdown-item font-title" to="/register">Registrarse</NavLink>
      </div>
      )
    }
  }

  return (
    // <UserProvider>
    <div className={`Header ${ props.interior ? 'interior' : '' }`}>
          <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <Logo/>
            </NavLink>

            <button className="navbar-toggler" type="button" onClick={toggler} data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink exact  className="font-title navlink nav-header" to='/admin/list'>Lista Productos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="font-title navlink nav-header" to='/admin/create'>Crear Producto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="font-title navlink nav-header" to="/publicaciones">Productos Front</NavLink>
                </li>
              </ul>
              <div className="nav-item dropdown my-md-0 is-dark">
                  <div className="navlink nav-header dropdown-toggle font-title"  id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { user.firstname ? 'Hola '+ user.firstname : 'Cuenta' } </div>
                  
                  {dropdownmenu(user)}
              </div>
            </div>
          </div>
        </nav>
        <div className="homeimg">
          
          <img className="bg" src="/img/jumbotron_telocambio.jpg" alt="logo"/>
          <div className="content">
            <div className="container">
              <div className="callaction d-flex flex-direction-column">
                <h1 className="font-title  text-white">¿Quieres cambiar tus cosas?</h1>
                <p className="text-white">Publica aqui y conecta con muchas otras personas que tambien quieren hacer lo mismo</p>
              </div>
              <div className="search">
                <label className="text-white font-title" htmlFor="search">Buscar</label>
                <input className="form-control" type="search" id="search"/>
              </div>
            </div>
            
          </div>
        </div>
        <div className="interiortitle bg-green w-100">
          <div className="container">
            <h4 className="font-title text-white my-2">{ props.title }</h4>
          </div>
            
        </div>
      </div>
    // </UserProvider>
  );
}

export default Header;