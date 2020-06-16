import React from 'react'

export default function CreateProduct() {
  return (
    <div>
      <div className="container">
        <form>
          <div className="row my-5">
            <div className="col">
              <h3 className="text-center">Crear una Publicación</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div class="form-group">
                <label for="post_title">Titulo de la Publicación</label>
                <input
                  type="text"
                  class="form-control"
                  id="post_title"
                  placeholder="Licuadora"
                />
              </div>
              <div class="form-group">
                <label for="short_desc">Descripcion Corta</label>
                <textarea
                  class="form-control"
                  id="short_desc"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div class="form-group">
                <label for="long_desc">Descripcion Larga</label>
                <textarea
                  class="form-control"
                  id="long_desc"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div class="form-group">
                <label for="cover_img">Imagen Portada</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="cover_img"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div class="form-group">
                <label for="gallery">Imagen Galerias</label>
                <input type="file" className="form-control-file" id="gallery" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div class="form-group">
                <label for="trade_for">Cambiar Por</label>
                <input
                  type="text"
                  class="form-control"
                  id="trade_for"
                  placeholder="Tostadora"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-6 col-md-6 col-sm-12">
              <button type="submit" class="btn btn-primary mb-2">
                Subir Publicación a tu cuenta
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
