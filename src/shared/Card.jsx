import React, {useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ChoicePublish from './../modals/ChoicePublish'
import { AppContext } from '../Context/AppContext'
import ListPublish from './../modals/ListPublish';
import NewPublish from './../modals/NewPublish';
export default function Card({ user , product }) {
    const [modal, setModal] = useState('');
    const context = useContext(AppContext);
    useEffect(() => {
        const updatedUser = () => {
            !user.id ? setModal("#loginModal") : setModal(`#choiceModal${product.id}`)
        }
        updatedUser()
    }, [user]);

    return (
        <div>
            <ChoicePublish product={product} name={`choiceModal${product.id}`}/>
            <ListPublish product={product} name={`listpublishModal${product.id}`}/>
            <NewPublish product={product} name={`newpublishModal${product.id}`}/>
            <div className="card promoting-card">

                <div className="card-body d-flex flex-row">
                    <div>
                        <h4 className="card-title font-weight-bold mb-2">{product.name}</h4>
                        <div >{product.user_name}</div>

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
                </div>

                <div className="view overlay">
                    <img className="card-img-top rounded-0" src={product.cover_img} alt="Card cap" />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>


                <div className="card-body">
                    <div className="collapse-content mb-2">
                        <p className="card-text" id="collapseContent">{product.shortDesc}</p>
                    <div className="card-text text-right">lo cambio por: <strong>{product.tradeBy}</strong></div>

                    </div>
                    <div className="row">
                        <Link className="btn ml-auto btn-primary" to={`/publicaciones/${product.id}`} >Detalles</Link>
                            {
                            context.user[0].id != product.user_id ?
                                <div className="btn ml-2 btn-info" data-toggle="modal" data-target={modal}>Cambiar por</div> : ''
                                
                            }
                        
                        
                        {/* <div className="btn btn-danger" data-toggle="modal"  data-target="#choiceModal">OTRO</div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}
