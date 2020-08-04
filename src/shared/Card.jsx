import React, {useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ChoicePublish from './../modals/ChoicePublish'
import { AppContext } from '../Context/AppContext'
import ListPublish from './../modals/ListPublish';
import NewPublish from './../modals/NewPublish';
import './Card.sass';
export default function Card({ user , product }) {
    const [modal, setModal] = useState('');
    const context = useContext(AppContext);
    useEffect(() => {
        const updatedUser = () => {
            !user.id ? setModal("#loginModal") : setModal(`#choiceModal${product.id}`)
        }
        updatedUser()
        // eslint-disable-next-line
    }, [user]);

    return (
        <div>
            <ChoicePublish product={product} name={`choiceModal${product.id}`}/>
            <ListPublish product={product} name={`listpublishModal${product.id}`}/>
            <NewPublish product={product} name={`newpublishModal${product.id}`}/>
            <div className="card telocambio">

                <div className="card-body d-flex flex-row justify-content-between">
                    <div>
                        <h3 className="card-title font-weight-bold mb-0 font-title text-primary">{product.name}</h3>
                      

                        <div className="card-text"> 
                        {
                            product.tags.split(',').map((tag, key )=> {
                                return (
                                <div className="badge badge-info mr-1" key={key}>{tag}</div> 
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="name">
                        <div className="text-primary text-right">Ofrece</div>
                        <h5 className="text-primary font-title text-right text-bold">{product.username}</h5>
                    </div>
                </div>

                <div className="view overlay m-auto d-flex">
                    <img className="card-img-top rounded-0 w-auto" src={product.cover_img} alt="Card cap" />
                    {
                        product.done === 0 ?
                        <Link to={`/publicaciones/${product.id}`} className="mask d-flex justify-content-center align-items-center">
                            <h3 className="font-title text-white">Ver detalles</h3>
                        </Link>        
                        : 
                        <div  className="maskintercambiado d-flex justify-content-center align-items-center">
                            <h3 className="font-title text-primary">Intercambiado</h3>
                        </div>        
                    }
                    
                </div>


                <div className="card-body">
                    <div className="collapse-content mb-2">
                        <p className="card-text text-primary" id="collapseContent">{product.shortDesc}</p>
                        <div className="cambio d-flex justify-content-end align-items-center">
                            <div className="card-text text-right text-green">lo cambio por: </div>
                            <h4 className="ml-2"> <strong className="text-green font-title">{product.tradeBy}</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="card-content2">
                    <div >    
                        {
                        context.user[0].id !== product.user_id ?
                            product.done === 0 ?    
                            <div className="btn-primary btn-cambiar py-2 ml-auto mr-0" data-toggle="modal" data-target={modal}>Cambiar por</div> : ''
                            : ''
                        }
                    </div>
                </div>
                
            </div>
        </div>

    )
}
