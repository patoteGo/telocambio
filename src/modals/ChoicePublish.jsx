import React from 'react'
import { Link } from "react-router-dom";
import closeModal from './closeModal';
export default function ChoicePublish({name, product}) {
    return (
        <div>
            <div className="modal fade" id={name} tabIndex="-1" role="dialog" aria-labelledby="choiceModal" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title font-title" id="exampleModalLabel">Que quieres ofrecer?</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                            
                                <div className="row mt-3 mb-3">
                                    <div className="col-12 mb-2">
                                        <div className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target={`#listpublishModal${product.id}`}>Lista tus Publicaciones</div>
                                    </div>
                                    <div className="col">
                                        <Link to='/admin/create' onClick={() => closeModal('loginModal')} className="text-primary">Crea una publicacion nueva</Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
