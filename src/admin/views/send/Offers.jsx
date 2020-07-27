import React  from 'react'
import './offers.sass'
import { Link } from "react-router-dom";
import { SwapDone, SendEmail } from '../../../config/api'


import Swal from 'sweetalert2'
export default function Offers(props) {
    // const context = useContext(AppContext);
    
    const handleDone = (offer, done) => {
        let msg = {}
        
        console.log(offer);
        if(done){
            msg = {
                html:`de aceptar la oferta de <strong>${offer.name}</strong> <br> por tu <strong>${props.product.name}</strong>?`,
                okbutton: ' <i class="fa fa-thumbs-up"></i> Si, acepto la oferta',
                confirm: 'Le va a llegar un email a ambos para q se pongan de acuerdo',
                subject: `Te han aceptado tu oferta del ${offer.name} por el ${props.product.name}`,
                body: `El dueño del producto ${props.product.name} es ${props.product.username} y su email es el ${props.product.user_email} para que lo puedas contactar y puedan cerrar el trueque, Saludos cordiales`
            }
        } else {
            msg = {
                html:`de arrepentirse la oferta de <strong>${offer.name}</strong> <br> por tu <strong>${props.product.name}</strong>?`,
                okbutton: ' <i class="fa fa-thumbs-up"></i> Si, me arrepiento',
                confirm: 'Ahora puedes aceptar otra oferta',
                subject: `Te han Rechazado tu oferta del ${offer.name} por el ${props.product.name}`,
                body: `=(`
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
                props.setLoader('active');
                const data = {
                    "oferta_id": offer.id,
                    "muestra_id": props.product.id,
                    "done": done
                }
                SwapDone(data).then(res => {
                    console.log(res)
                    SendEmail({
                        "email": offer.user_email,
                        "subject": msg.subject,
                        "body": ''    
                    }).then(res => {
                        Swal.fire(
                            'Aceptada!',
                            msg.confirm,
                            'success'
                        )
                        // props.handleOfferOff()
                        props.setLoader('');
                        setTimeout(() => {
                            window.location.reload(false);
                        }, 1500);
                    }).catch(err => {
                        console.log(err);
                        props.setLoader('');
                        setTimeout(() => {
                            window.location.reload(false);
                        }, 1500);
                    })
                   
                    
                    
                })
              
            }
          })
    }

   

    return (
        <div className={`Offers ${props.active}`}>
            <div className="container">
                <div className="row mt-4">
                    <div className="col d-flex justify-content-start">
                        <div onClick={props.handleOfferOff} className="cerrar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.002" height="14.002" viewBox="0 0 14.002 14.002">
                                <g id="input_close" transform="translate(-31.194 -53.197)">
                                    <path id="Trazado_1" data-name="Trazado 1" d="M31.9,66.492,44.489,53.9" fill="none" stroke="#979797" strokeLinecap="round" strokeWidth="2" />
                                    <path id="Trazado_2" data-name="Trazado 2" d="M0,12.588,12.588,0" transform="translate(31.901 66.492) rotate(-90)" fill="none" stroke="#979797" strokeLinecap="round" strokeWidth="2" />
                                </g>
                            </svg>

                        </div>

                    </div>
                </div>
                <div className="row mb-4">
                    <h3 className="ml-5 font-title text-primary">Te Ofertan por:</h3>
                </div>
                <div className="row mb-4 ml-3">
                    <div className="col-2">
                        <img className="w-100" src={props.product.cover_img} alt=""/>
                    </div>
                    <div className="col-4">
                        <h5 className="font-title text-primary"><strong>{props.product.name}</strong></h5>
                        <p className="text-primary hide-mobile">{props.product.shortDesc}</p>
                    </div>
                    <div className="col-3 hide-mobile">
                        <p className="text-green">Tu estabas pidiendo:</p>
                        <h5 className="font-title text-green"><strong>{props.product.tradeBy}</strong></h5>
                    </div>
                </div>
                <hr/>
                {
                    props.offers.map((offer, key) => {
                        console.log(offer.id, props.product.id, offer.id === props.product.id);
                        return (
                            <div className={offer.id === props.product.done  ? 'row list' : 'row list'} key={key}>
                                <div className="col-6 col-md-2 ">
                                    <div className="cover">

                                    <img
                                        src={offer.cover_img}
                                        alt="logo"
                                        className="bg"
                                    />
                                    {
                                        offer.id === props.product.done ? 
                                        <img className="checkimg" src="/img/check_img.svg" alt="check"/>  
                                        : ''
                                    }
                                    </div>
                                </div>
                                <div className=" col-6 col-md-6 text-left list-names ">
                                    <h4 className="name font-title text-primary">
                                        {offer.name}
                                    </h4>
                                    <div className="det text-left hide-mobile">
                                        {offer.shortDesc}
                                    </div>
                                </div>
                                <div className="col-3 col-md-2 ">
                                    <Link to={`/publicaciones/${offer.id}`} className="btn btn-info">Detalles</Link>
                                </div>
                                <div className="col-6 col-md-2 ">
                                {offer.id === props.product.done  ? 
                                    <div className="text-green text-center">Aceptado</div>
                                    // <div className="btn btn-danger" onClick={()=>{handleDone(offer, false )}}>Arrepentirse</div>
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
