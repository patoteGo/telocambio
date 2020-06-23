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
                        <h3 className="modal-title" id="exampleModalLabel">Que quieres ofrecer?</h3>
                        <div>Elige entre tus publicaciones o oferece algo nuevo</div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                               LIST
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
