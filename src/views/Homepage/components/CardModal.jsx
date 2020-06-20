import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardModal() {
    return (
        <div className="Cardmodal">
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contactale !</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Tu Correo</label>
                                    <input type="text" className="form-control" id="recipient-name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Mensaje:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Enviar Mensaje</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
                
    )
}
export default CardModal