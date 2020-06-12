import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <Link className="navbar-brand" to="/">TE LO CAMBIO</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos">Quienes somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contáctanos</Link>
              </li>
            </ul>

            <div className="nav-item dropdown my-md-0 is-dark">
                <div className="nav-link dropdown-toggle"  id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cuenta</div>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <Link className="dropdown-item" to="/login">Login</Link>
                  <Link className="dropdown-item" to="/register">Registrarse</Link>
                </div>
            </div>
            <form className="form-inline my-2 my-md-0" _lpchecked="1">
              <input className="form-control" type="text" placeholder="Buscar.." aria-label="Buscar.."/>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;