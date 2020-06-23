import React from 'react'
import { loginUser } from './../config/api.js';
import { useForm } from 'react-hook-form';
import { NAMES, APIS, OPTIONS } from './../config/config.js';
import { Link } from "react-router-dom";
export default function ListPublish() {
    return (
        <div className="modal fade" id="listpublishModal" tabIndex="-1" role="dialog" aria-labelledby="listpublishModal" aria-hidden="true" >
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
                               <select className="form-control" name="publish" id="publish">
                                   <option value="1">Publicación 1</option>
                                   <option value="2">Publicación 2</option>
                                   <option value="3">Publicación 3</option>
                                   <option value="4">Publicación 4</option>
                                   <option value="5">Publicación 5</option>
                               </select>
                            </div>


                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="btn btn-primary">Ofrecer la elegida</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
