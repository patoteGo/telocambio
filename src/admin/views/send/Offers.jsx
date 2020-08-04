import React, {useContext}  from 'react'
import './offers.sass'
import { Link } from "react-router-dom";
import { SwapDone, SendEmail,deleteSwap } from '../../../config/api'
import { AppContext } from '../../../Context/AppContext'
import Swal from 'sweetalert2'
export default function Offers(props) {
    const context = useContext(AppContext);
    const handleDeleteOffer = (offer) => {
        Swal.fire({
            title: 'Estas segur@? de quitar esta oferta',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo'
          }).then((result) => {
            if (result.value) {
                props.setLoader('active');
              deleteSwap(
                    {
                      oferta_id: offer.id,
                      muestra_id: props.product.id
                    }).then(res => {
                SendEmail({
                    email: offer.user_email,
                    subject: `Te han rechazado tu oferta de ${offer.name} por ${props.product.name}`,
                    template: 'swapno',
                    data: {
                       oferta_name: offer.name,
                       oferta_img: offer.cover_img,
                       oferta_link: `${document.location.origin}/publicaciones/${offer.id}`,
                       muestra_name: props.product.name,
                    }
                }).then(res => {
                    props.setLoader('');
                    Swal.fire(
                        'Borrada!',
                        `La oferta ${offer.name} ha sido quitada y enviado un email a quien la hizo`,
                        'success'
                      )
                      setTimeout(() => {
                        window.location.reload(false);
                    }, 1500);
                })

                
              })
              
            }
          })
        
    }
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
                let olddone = 0;
                //envia email cuando hay un antiguo ya en transaccion
                if(props.product.done !== 0){
                    const prevoffer_id = props.product.done;
                    console.log('id', props.product.done);
                    const prevoffer = context.products[0].filter(prod => prod.id === prevoffer_id)[0];
                    console.log(prevoffer);
                    olddone = prevoffer.id
                    SendEmail({
                        email: prevoffer.user_email,
                        subject: `Te han rechazado tu oferta de ${prevoffer.name} por ${props.product.name}`,
                        template: 'swapno',
                        data: {
                           oferta_name: prevoffer.name,
                           oferta_img: prevoffer.cover_img,
                           oferta_link: `${document.location.origin}/publicaciones/${prevoffer.id}`,
                           muestra_name: props.product.name,
                        }
                    })
                }
                const data = {
                    "oferta_id": offer.id,
                    "muestra_id": props.product.id,
                    "done": done,
                    'olddone':olddone
                    
                }
                SwapDone(data).then(res => {
                    // console.log(res)
                    SendEmail({
                        email: offer.user_email,
                        subject: msg.subject,
                        template: 'swapdone',
                        data: {
                           oferta_name: offer.name,
                           oferta_img: offer.cover_img,
                           oferta_link: `${document.location.origin}/publicaciones/${offer.id}`,
                           muestra_name: props.product.name,
                           muestra_img: props.product.cover_img,
                           muestra_link: `${document.location.origin}/publicaciones/${props.product.id}`,
                           name: props.product.username,
                           email: props.product.user_email
                        }    
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
                    <div className="col-6 col-md-2">
                        <img className="w-100" src={props.product.cover_img} alt=""/>
                    </div>
                    <div className="col-6 col-md-4">
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
                            <div className='row list my-4 py-4 py-md-0 my-md-2' key={key}>
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
                                <div className="col-3 col-md-1 ">
                                    <Link to={`/publicaciones/${offer.id}`} className="btn btn-info">Detalles</Link>
                                </div>
                                <div className="col-5 col-md-2 ">
                                    {offer.id === props.product.done  ? 
                                        <div className="text-green text-center">Aceptado</div>
                                        // <div className="btn btn-danger" onClick={()=>{handleDone(offer, false )}}>Arrepentirse</div>
                                    :
                                    <div className="btn btn-primary" onClick={()=>{handleDone(offer, true )}}>Aceptar</div>
                                    }
                                </div>
                                <div className="col-4 col-md-1 ">
                                    {
                                        offer.id !== props.product.done  &&
                                        <div className="ml-2 btn-delete" onClick={()=>{handleDeleteOffer(offer)}}>
                                            <span className="mr-2 text-small">Borrar</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.253" height="22.182" viewBox="0 0 17.253 22.182">
                                            <path id="delete" d="M8.732,24.217A2.472,2.472,0,0,0,11.2,26.682h9.859a2.472,2.472,0,0,0,2.465-2.465V9.429H8.732ZM24.753,5.732H20.44L19.207,4.5H13.046L11.813,5.732H7.5V8.2H24.753Z" transform="translate(-7.5 -4.5)" fill="#888"/>
                                            </svg>
                                        </div>
                                    }
                                    
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>

        </div>
    )
}
