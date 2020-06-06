import React from 'react';


function Header() {
  return (
    <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">TE LO CAMBIO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">INICIO <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PRODUCTOS</a>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle"  id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</div>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0" _lpchecked="1">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;