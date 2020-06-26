import React, { useContext,useState, useEffect } from 'react'
import { AppContext } from './../Context/AppContext'
import { createSwap, SendEmail } from './../config/api.js';
import Swal from 'sweetalert2'
import { APIS } from './../config/config'
import Loader from './../Helpers/Loader'
// import { useForm } from 'react-hook-form';
// import { NAMES, APIS, OPTIONS } from './../config/config.js';
// import { Link } from "react-router-dom";

export default function ListPublish({name, product}) {
    const context = useContext(AppContext);
    const [ select, setSelect ] = useState(0)
    const [loader, setLoader] = useState("");
    const handleChange = (event) => {
        setSelect(event.target.value)
      }
      
    const handleSwap = () => {
        setLoader('active');
        const prodoferta = context.products[0].filter(e => select === e.id)[0]
        console.log('prodo', prodoferta);  
        const data = {
            "oferta_id": parseInt(select),
            "muestra_id": product.id,
            "done": false
        }
        console.log(data);
        createSwap(data).then((res) => {
            const dataemail_oferta = {
                "email": prodoferta.user_email,
                "subject": `Se enviado tu oferta por el producto ${product.name}`,
                "body": `<p>Se ha enviado tu oferta del producto ${prodoferta.name} , por el producto ${product.name}</p>`    
            }
            const dataemail_muestra = {
                "email": product.user_email,
                "subject": `En Telocambio te han ofrecido una oferta por tu ${product.name}`,
                "body": `<p>Se ha enviado una oferta del producto ${prodoferta.name} , por tu producto ${product.name}</p> <p>si quieres ver en detalle lo que te ofertan entra a este  <a href='${APIS.BASEURL}/telocambio/publicaciones/${prodoferta.id}'>link</a>`  
            }
            SendEmail(dataemail_muestra)
            SendEmail(dataemail_oferta)
            setLoader('');
            Swal.fire({
                title: 'Esta Listo',
                text: 'Espere que la otra persona acepte su trueque',
                icon: 'success',
                confirmButtonText: 'Listo'
              })
              console.log(res);
            }).catch((err) => {
               setLoader('');
              console.log(err.status);
              Swal.fire({
                title: 'Ya habia echo esta oferta antes',
                text: 'Espere que la otra persona acepte su trueque',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            })

    }

    useEffect(() => {
        const sel = document.querySelector('.selectpublish').value
        setSelect(sel)
        
    }, [])
    
    return (
        <div>
         <Loader active={loader}/> 
        <div className="modal fade" id={name} tabIndex="-1" role="dialog" aria-labelledby="listpublishModal" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">Elige entre tus publicaciones</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                            
                                <select className="form-control selectpublish" name="publish" onChange={handleChange} >
                                    {
                                        context.products[0].map((product, key) => {
                                            if (product.user_id === context.user[0].id) {
                                                
                                                return (
                                                    <option key={key} value={product.id}>{product.name}</option>
                                                )
                                                
                                            }
                                        })
                                    }

                                </select>
                            </div>


                        </div>
                    </div>
                    <div className="modal-footer">
                        <div onClick={handleSwap} className="btn btn-primary">Ofrecer la elegida</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
