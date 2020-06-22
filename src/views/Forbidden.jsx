import React from 'react'
import Header from './../layouts/Header.jsx'
import Footer from './../layouts/footer/Footer2.jsx'
import { Link } from "react-router-dom";
export default function Forbidden() {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col d-flex flex-column align-items-center">
                        <h2 className="mb-4">No tienes acceso a esta pagina</h2>
                        <div className="mb-4">
                            <img src="/img/tenor.gif" alt=""/>
                        </div>
                        <Link className="btn btn-primary mb-5" to="/">Volver a la pagina de inicio</Link>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
