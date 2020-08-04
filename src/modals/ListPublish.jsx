import React, { useContext,useState } from 'react'
import { AppContext } from './../Context/AppContext'
import { createSwap, SendEmail } from './../config/api.js';
import Swal from 'sweetalert2'
import Loader from './../Helpers/Loader'
import {fetchProducts} from './../config/api'
// import closeModal from './closeModal'
export default function ListPublish({name, product}) {
    const context = useContext(AppContext);
    let select = ""
    const [loader, setLoader] = useState("");
    const handleChange = (event) => {
        console.log('select', event.target.value);
        select = event.target.value
      }
      
    const handleSwap = () => {
        setLoader('active');
        // eslint-disable-next-line
        const prodoferta = context.products[0].filter(prod => select == prod.id)[0]
        console.log('prodo', prodoferta);  
        const data = {
            "oferta_id": parseInt(select),
            "muestra_id": product.id,
            "done": false
        }
        console.log(select, prodoferta, product.user_email);
        createSwap(data).then((res) => {
            const dataemail_oferta = {
                email: product.user_email,
                subject: `En Telocambio te han ofrecido una oferta por tu ${product.name}`,
                template: 'swapreceive',
                data: {
                    oferta_name: prodoferta.name,
                    oferta_img: prodoferta.cover_img,
                    oferta_link: `${document.location.origin}/publicaciones/${prodoferta.id}`,
                    muestra_name: product.name,
                    muestra_img: product.cover_img,
                    muestra_link: `${document.location.origin}/publicaciones/${product.id}`,
                    login: `${document.location.origin}/login`
                        },
            }
            const dataemail_muestra = {
                email: prodoferta.user_email,
                subject: `Se enviado tu oferta por el producto ${product.name}`,
                template: 'swapsend',
                data: {
                    oferta_name: prodoferta.name,
                    oferta_img: prodoferta.cover_img,
                    oferta_link: `${document.location.origin}/publicaciones/${prodoferta.id}`,
                    muestra_name: product.name,
                    muestra_img: product.cover_img,
                    muestra_link: `${document.location.origin}/publicaciones/${product.id}`,
                        },
            }
            SendEmail(dataemail_muestra)
            SendEmail(dataemail_oferta)
            // 


            setLoader('');
            Swal.fire({
                title: 'Esta Listo',
                text: 'Espere que la otra persona acepte su trueque',
                icon: 'success',
                confirmButtonText: 'Listo'
              })
              console.log(res);
              fetchProducts().then(prod => {
                context.products[1](prod)
              })
              
            }).catch((err) => {
               setLoader('');
              console.log(err);
              Swal.fire({
                title: 'Ya habia echo esta oferta antes',
                text: 'Espere que la otra persona acepte su trueque',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            })

    }
    
    return (
        <div>
         <Loader active={loader}/> 
        <div className="modal fade" id={name} tabIndex="-1" role="dialog" aria-labelledby="listpublishModal" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h3 className="modal-title font-title text-primary" id="exampleModalLabel">Elige entre tus publicaciones</h3> */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <h3 className="font-title text-primary">Cambiar</h3>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cover"><img className="w-100" src={product.cover_img} alt=""/></div>
                                </div>
                                <div className="col">
                                    <h3 className="font-title">{ product.name}</h3>
                                </div>
                            </div>
                           
                        </div>
                        

                    </div>
                    <div className="modal-body">
                        <div className="container">
                        <div className="row d-flex flex-column">
                                <h3 className="font-title text-primary">Por</h3>
                                <p className="text-primary">Elige entre tus publicaciones</p>
                            </div>
                            <div className="row">
                            
                                <select className="form-control selectpublish" name="publish" onChange={handleChange} >
                                    {
                                        context.products[0].map((product, key) => {
                                            if (product.user_id === context.user[0].id && product.done === 0) {
                                                if(key === 0){
                                                    select = product.id;
                                                }
                                                return (
                                                    <option key={key} value={product.id}>{product.name}</option>
                                                )
                                            }
                                            return ''
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
