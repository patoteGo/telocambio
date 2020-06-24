import React from 'react'
import { loginUser } from './../config/api.js';
import { useForm } from 'react-hook-form';
import { NAMES, APIS, OPTIONS } from './../config/config.js';
import { Link } from "react-router-dom";
import './createproduct.sass'

export default function NewPublish() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div className="modal fade" id="newpublishModal" tabIndex="-1" role="dialog" aria-labelledby="newpublishModal" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered createproduct" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">Llena los datos de esta publicación</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="post_title">Titulo de la Publicación</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="post_title"
                                                    name="post_title"
                                                    placeholder="Licuadora"
                                                    ref={register({ required: 'Titulo requerido', minLength: { value: 8, message: 'muy corto' } })}
                                                />
                                                {errors.post_title && <p className="badge badge-danger ml-2">{errors.post_title.message}</p>}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="short_desc">Descripcion Corta</label>
                                                <textarea
                                                    className="form-control"
                                                    id="short_desc"
                                                    name="short_desc"
                                                    rows="2"
                                                    ref={register}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="long_desc">Descripcion Larga</label>
                                                <textarea
                                                    className="form-control"
                                                    id="long_desc"
                                                    name="long_desc"
                                                    rows="6"
                                                    ref={register}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="cover_img">Imagen Portada</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cover_img"
                                                    name="cover_img"
                                                    placeholder="Ingrese el url de su imagen"
                                                    ref={register}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="trade_for">Cambiar Por</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="trade_for"
                                                    id="trade_for"
                                                    placeholder="Tostadora"
                                                    ref={register}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="trade_for">tags, si son varios separalo por coma</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="tags"
                                                    id="tags"
                                                    placeholder="Electrodomestico, cocina"
                                                    ref={register}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="gallery">Imagen Galerias</label>
                                                <input type="text" className="mt-2 form-control" id="gallery1" name="gallery1" placeholder="Ingrese el url de la imagen 1" ref={register} />
                                                <input type="text" className="mt-2 form-control" id="gallery2" name="gallery2" placeholder="Ingrese el url de la imagen 2" ref={register} />
                                                <input type="text" className="mt-2 form-control" id="gallery3" name="gallery3" placeholder="Ingrese el url de la imagen 3" ref={register} />
                                                <input type="text" className="mt-2 form-control" id="gallery4" name="gallery4" placeholder="Ingrese el url de la imagen 4" ref={register} />
                                                <input type="text" className="mt-2 form-control" id="gallery5" name="gallery5" placeholder="Ingrese el url de la imagen 5" ref={register} />
                                                <input type="text" className="mt-2 form-control" id="gallery6" name="gallery6" placeholder="Ingrese el url de la imagen 6" ref={register} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                    </div>
                                    <div className="row">
                                        <div className="offset-md-8 col-md-6 col-sm-12">
                                            <button type="submit" className="btn btn-primary mb-2">
                                                Enviar esto para intercambio
              </button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
