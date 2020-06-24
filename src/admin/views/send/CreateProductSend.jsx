import React, { useContext, useEffect, useState } from 'react'
import Header from '../../layouts/HeaderAdmin'
import { useForm } from 'react-hook-form';
import { AppContext } from './../../../Context/AppContext'

export default function CreateProduct() {
  const context = useContext(AppContext);
  const [user, setUser] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

  }

  useEffect(() => {
    const updatedUser = () => {
        setUser(context.user[0]);
    }
    updatedUser()
    
}, [context.user[0]]);

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row my-5">
            <div className="col">
              <h3 className="text-center">Crear una Publicación</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="name">Titulo de la Publicación</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Licuadora"
                  ref={register({ required: 'Titulo requerido', minLength: { value: 8, message: 'muy corto' } })}
                />
                {errors.name && <p className="badge badge-danger ml-2">{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  name="tags"
                  placeholder="cocina, eléctrico, para la casa"
                  ref={register({ required: 'Titulo requerido', minLength: { value: 8, message: 'muy corto' } })}
                />
                {errors.tags && <p className="badge badge-danger ml-2">{errors.tags.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="shortDesc">Descripcion Corta</label>
                <textarea
                  className="form-control"
                  id="shortDesc"
                  name="shortDesc"
                  rows="2"
                  ref={register({required: 'Descripción requerida'})}
                ></textarea>
                {errors.shortDesc && <p className="badge badge-danger ml-2">{errors.shortDesc.message}</p>}
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="longDesc">Descripcion Larga</label>
                <textarea
                  className="form-control"
                  id="longDesc"
                  name="longDesc"
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
                  ref={register({required: 'Imágen requerida'})}
                />
                {errors.cover_img && <p className="badge badge-danger ml-2">{errors.cover_img.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="tradeBy">Cambiar Por</label>
                <input
                  type="text"
                  className="form-control"
                  name="tradeBy"
                  id="tradeBy"
                  placeholder="Tostadora"
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
          <input type="hidden" name="user_id" value={user.id}/>
          <input type="hidden" name="user_name" value={user.firstname}/>
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
        {/* <div className="btn btn-info">Buscar imagenes</div> */}
      </div>
    </div>
  )
}
