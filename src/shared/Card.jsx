import React, { useState, useEffect} from 'react'
import ChoicePublish from './../modals/ChoicePublish'
// import { AppContext, AppProvider } from '../Context/AppContext'
export default function Card({user}) {
    const [modal, setModal] = useState('');
    
    
    
    useEffect(() => {
        const updatedUser = () => {
            !user.id ? setModal("#loginModal") : setModal("#choiceModal")
        }
        updatedUser()
        console.log('card', user);
    }, [user]);
   
    return (
        <div>
           <ChoicePublish/>
            <div className="card promoting-card">

                <div className="card-body d-flex flex-row">
                    <div>
                        <h4 className="card-title font-weight-bold mb-2">New spicy meals</h4>
                        <div >Usuario</div>
                        <div className="card-text"> <div className="badge badge-info mr-1">etiqueta 1</div> <div className="badge badge-info mr-1">etiqueta 2</div></div>
                    </div>
                </div>

                <div className="view overlay">
                    <img className="card-img-top rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card cap" />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>


                <div className="card-body">
                    <div className="collapse-content mb-2">
                        <p className="card-text" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. </p>
                        <div className="card-text text-right">lo cambio por: <strong>BLABLABLA</strong></div>
                       
                    </div>
                    <div className="row">
                        <div className="btn ml-auto btn-primary">Detalles</div>
                        <div className="btn ml-2 btn-info" data-toggle="modal" data-target={modal}>Cambiar por</div>
                        {/* <div className="btn btn-danger" data-toggle="modal"  data-target="#choiceModal">OTRO</div> */}
                    </div>
                </div>
            </div>
        </div>
  
    )
}
