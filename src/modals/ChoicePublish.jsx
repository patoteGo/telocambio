import React from 'react'
// import { loginUser } from './../config/api.js';
// import { useForm } from 'react-hook-form';
// import { NAMES, APIS, OPTIONS } from './../config/config.js';
import { Link } from "react-router-dom";
import ListPublish from './ListPublish';
import NewPublish from './NewPublish';
export default function ChoicePublish() {
    return (
        <div>
            <ListPublish/>
            <NewPublish/>
            <div className="modal fade" id="choiceModal" tabIndex="-1" role="dialog" aria-labelledby="choiceModal" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                        
                            <h3 className="modal-title" id="exampleModalLabel">Que quieres ofrecer?</h3>
                    
                        
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    
                            
                        </div>
                        
                        <div className="modal-body">
                            <div className="container">
                            <div >Elige entre tus publicaciones o oferece algo nuevo</div>
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <div className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#listpublishModal">Tus Publicaciones</div>
                                    </div>
                                    <div className="col">
                                        <div className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#newpublishModal">Subir nueva</div>
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
