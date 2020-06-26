import React from 'react'
import './offers.sass'
import { Link } from "react-router-dom";
import { SwapDone } from '../../../config/api'
export default function Offers(props) {

    const handleDone = (id) => {
        const data = {
            "oferta_id": id,
            "muestra_id": props.product.id,
            "done": true
        }
        SwapDone(data).then(res => {

        })
    }

    return (
        <div className={`Offers ${props.active}`}>
            <div className="container">
                <div className="row mt-4">
                    <div className="col d-flex justify-content-start">
                        <div onClick={props.off} className="cerrar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.002" height="14.002" viewBox="0 0 14.002 14.002">
                                <g id="input_close" transform="translate(-31.194 -53.197)">
                                    <path id="Trazado_1" data-name="Trazado 1" d="M31.9,66.492,44.489,53.9" fill="none" stroke="#979797" strokeLinecap="round" strokeWidth="2" />
                                    <path id="Trazado_2" data-name="Trazado 2" d="M0,12.588,12.588,0" transform="translate(31.901 66.492) rotate(-90)" fill="none" stroke="#979797" strokeLinecap="round" strokeWidth="2" />
                                </g>
                            </svg>

                        </div>

                    </div>

                    <div className="col">
                        <h2>Ofertas</h2>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col">Por el producto: <strong>{props.product.name}</strong> te ofrecen:</div>
                </div>
                {
                    props.offers.map((offer, key) => {
                        return (
                            <div className="row list" key={key}>
                                <div className="col-md-1 list-cell">
                                    <img className="cover_img" src={offer.cover_img} alt="" />
                                </div>
                                <div className="col-md-7 text-center list-cell list-names">
                                    <div className="name">
                                        {offer.name}
                                </div>
                                    <div className="det">
                                        {offer.shortDesc}
                                </div>
                                </div>
                                <div className="col-md-2 list-cell">
                                    <Link to='/' className="btn btn-info">Detalles</Link>
                                </div>
                                <div className="col-md-2 list-cell">
                                    <div className="btn btn-primary">Aceptar</div>
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>

        </div>
    )
}
