import React, { useContext, useEffect }  from 'react'
import './offers.sass'
import { Link } from "react-router-dom";
import { SwapDone } from '../../../config/api'
import { AppContext } from './../../../Context/AppContext'

import Swal from 'sweetalert2'
export default function Offers(props) {
    const context = useContext(AppContext);
    
    const handleDone = (offer, done) => {
        let msg = {}
        if(done){
            msg = {
                html:`de aceptar la oferta de <strong>${offer.name}</strong> <br> por tu <strong>${props.product.name}</strong>?`,
                okbutton: ' <i class="fa fa-thumbs-up"></i> Si, acepto la oferta',
                confirm: 'Le va a llegar un email a ambos para q se pongan de acuerdo'
            }
        } else {
            msg = {
                html:`de arrepentirse la oferta de <strong>${offer.name}</strong> <br> por tu <strong>${props.product.name}</strong>?`,
                okbutton: ' <i class="fa fa-thumbs-up"></i> Si, me arrepiento',
                confirm: 'Ahora puedes aceptar otra oferta'
            } 
        }
        Swal.fire({
            title: 'Estas segur@?',
            html: msg.html,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            focusConfirm: false,
            confirmButtonText: msg.okbutton,
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> No'
          }).then((result) => {
            if (result.value) {
                const data = {
                    "oferta_id": offer.id,
                    "muestra_id": props.product.id,
                    "done": done
                }
                SwapDone(data).then(res => {
                    console.log(res)
                    Swal.fire(
                        'Aceptada!',
                        msg.confirm,
                        'success'
                    )
                    props.off()
                    
                    
                })
              
            }
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
                        console.log(offer.id, props.product.id, offer.id === props.product.id);
                        return (
                            <div className={offer.id === props.product.done  ? 'accept row list' : 'row list'} key={key}>
                                <div className="col-md-1 list-cell">
                                {offer.id === props.product.done ? <i className=" ml-2 fa fa-check mr-3" aria-hidden="true"></i> : ''}
                                
                                
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
                                    <Link to={`/publicaciones/${offer.id}`} className="btn btn-info">Detalles</Link>
                                </div>
                                <div className="col-md-2 list-cell">
                                {offer.id === props.product.done  ? 
                                    <div className="btn btn-danger" onClick={()=>{handleDone(offer, false )}}>Arrepentirse</div>
                                :
                                <div className="btn btn-primary" onClick={()=>{handleDone(offer, true )}}>Aceptar</div>
                                }
                                    {/* <div className="btn btn-primary" onClick={()=>{handleDone(offer, true )}}>Aceptar</div> */}
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>

        </div>
    )
}
