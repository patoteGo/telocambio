import React from 'react'
import Header from './../../layouts/Header.jsx'
import Footer from './../../layouts/footer/Footer2.jsx'
import Gallery from './Gallery'
import { Link } from "react-router-dom";
import './detail.sass'
export default function Detail() {
  
    return (
        <div className="Detail">
            <Header/>
            <div className="container">
                <div className="row mt-5 d-flex align-items-end">
                    <div className="col">
                        <h2 className="mr-4">TITULO DE LA PUBLICACION</h2>
                        <h5>Usuario: <strong>JUAN</strong></h5>
                    </div>
                    
                </div>
                <div className="row mb-4">
                    <div className="col-md-8 overflow-hidden col-sm-12">
                    
                        <Gallery images=""/>
                        
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="desc mb-3">
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        </div>
                        <p className="desc mt-4">
                            Lo cambio por: <strong>dasdasdasdasd</strong>
                        </p>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="btn btn-primary mt-2">Ofrecer por esto</div>
                                <Link to="/publicaciones" className="btn btn-light mt-2 ml-1">Ver todas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
