import React from 'react'
// import { loginUser } from './../config/api.js';
// import { useForm } from 'react-hook-form';
// import { NAMES, APIS, OPTIONS } from './../config/config.js';
import { Link } from "react-router-dom";

export default function ChoicePublish() {
    return (
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
                                    <div className="btn btn-primary">Tus Publicaciones</div>
                                </div>
                                <div className="col">
                                    <div className="btn btn-primary">Subir nueva</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="modal-footer">
                        Si no estas en Te lo cambio
                    <Link to="/register" className="text-info">Registrarse aquí</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
