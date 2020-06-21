import React from 'react'
import Header from '../../layouts/HeaderAdmin'
// import { Link } from "react-router-dom";
export default function CreateProduct() {
  return (
    <div>
      <Header/>
      <div className="container">
        <form>
          <div className="row my-5">
            <div className="col">
              <h3 className="text-center">Crear una Publicación</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="post_title">Titulo de la Publicación</label>
                <input
                  type="text"
                  className="form-control"
                  id="post_title"
                  placeholder="Licuadora"
                />
              </div>
              <div className="form-group">
                <label htmlFor="short_desc">Descripcion Corta</label>
                <textarea
                  className="form-control"
                  id="short_desc"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="long_desc">Descripcion Larga</label>
                <textarea
                  className="form-control"
                  id="long_desc"
                  rows="6"
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
                  placeholder="Ingrese el url de su imagen"
                />
              </div>
              <div className="form-group">
                <label htmlFor="trade_for">Cambiar Por</label>
                <input
                  type="text"
                  className="form-control"
                  id="trade_for"
                  placeholder="Tostadora"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="gallery">Imagen Galerias</label>
                <input type="text" className="mt-2 form-control" id="gallery1" placeholder="Ingrese el url de la imagen 1"/>
                <input type="text" className="mt-2 form-control" id="gallery2" placeholder="Ingrese el url de la imagen 2"/>
                <input type="text" className="mt-2 form-control" id="gallery3" placeholder="Ingrese el url de la imagen 3"/>
                <input type="text" className="mt-2 form-control" id="gallery4" placeholder="Ingrese el url de la imagen 4"/>
                <input type="text" className="mt-2 form-control" id="gallery5" placeholder="Ingrese el url de la imagen 5"/>
                <input type="text" className="mt-2 form-control" id="gallery6" placeholder="Ingrese el url de la imagen 6"/>
              </div>
            </div>
          </div>
          <div className="row">
        
          </div>
          <div className="row">
            <div className="offset-md-6 col-md-6 col-sm-12">
              <button type="submit" className="btn btn-primary mb-2">
                Subir Publicación a tu cuenta
              </button>
            </div>
          </div>
        </form>
        <div className="btn btn-info">Buscar imagenes</div>
      </div>
    </div>
  )
}
