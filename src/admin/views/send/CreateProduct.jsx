import React, { useContext, useEffect, useState } from 'react'
import Header from '../../layouts/HeaderAdmin'
import { useForm } from 'react-hook-form';
import { AppContext } from '../../../Context/AppContext'
import { createProduct } from '../../../config/api.js'
import Loader from '../../../Helpers/Loader'
import Swal from 'sweetalert2'
import { fetchProductbyID } from '../../../config/api'
export default function CreateProduct(props) {
  const context = useContext(AppContext);
  const [user, setUser] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [loader, setLoader] = useState("");
  const [product, setProduct] = useState({});
  const [gallery, setGallery] = useState([]);

  const onSubmit = (data) => {
    setLoader('active');
    createProduct(data).then(res => {
      setLoader('');
      Swal.fire({
        title: 'Ha sido creado',
        text: 'Ya esta publicado',
        icon: 'success',
        confirmButtonText: 'Listo'
      })
    }).catch((err) => {
      console.log(err);
    })
    // console.log(data);
   

  }

  useEffect(() => {
    const updatedUser = () => {
        setUser(context.user[0]);
        if(props.match.params.id !== undefined ){
          fetchProductbyID(props.match.params.id).then(prod => {
            setProduct(prod);
            console.log(prod);
            setGallery((prod.gallery).split(','))
          })
        }
        // 

    }
    updatedUser()
    
}, [context.user[0]]);

  return (
    <div>
      <Header interior={true} title="Crear"/>
      <Loader active={loader}/>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row my-5">
            <div className="col">
              <h3 className="font-title text-primary text-center">
                {props.match.params.id !== undefined ? 'Editar Publicacion' : 'Crear una Publicación'}  
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label className="font-title text-green" htmlFor="name">Titulo de la Publicación</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Licuadora"
                  ref={register({ required: 'Titulo requerido'})}
                  defaultValue={product.name}
                />
                {errors.name && <p className="badge badge-danger ml-2">{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <label className="font-title text-green" htmlFor="tags">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  name="tags"
                  placeholder="cocina, eléctrico, para la casa"
                  ref={register({ required: 'Titulo requerido' })}
                  defaultValue={product.tags}
                />
                {errors.tags && <p className="badge badge-danger ml-2">{errors.tags.message}</p>}
              </div>
              <div className="form-group">
                <label className="font-title text-green" htmlFor="shortDesc">Descripcion Corta</label>
                <textarea
                  className="form-control"
                  id="shortDesc"
                  name="shortDesc"
                  rows="2"
                  ref={register({required: 'Descripción requerida'})}
                  defaultValue={product.shortDesc}
                ></textarea>
                {errors.shortDesc && <p className="badge badge-danger ml-2">{errors.shortDesc.message}</p>}
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label className="font-title text-green" htmlFor="longDesc">Descripcion Larga</label>
                <textarea
                  className="form-control"
                  id="longDesc"
                  name="longDesc"
                  rows="6"
                  ref={register}
                  defaultValue={product.longDesc}
                  
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label className="font-title text-green" htmlFor="cover_img">Imagen Portada</label>
                <input
                  type="text"
                  className="form-control"
                  id="cover_img"
                  name="cover_img"
                  placeholder="Ingrese el url de su imagen"
                  ref={register({required: 'Imágen requerida'})}
                  defaultValue={product.cover_img}
                />
                {errors.cover_img && <p className="badge badge-danger ml-2">{errors.cover_img.message}</p>}
              </div>
              <div className="form-group">
                <label className="font-title text-green" htmlFor="tradeBy">Cambiar Por</label>
                <input
                  type="text"
                  className="form-control"
                  name="tradeBy"
                  id="tradeBy"
                  placeholder="Tostadora"
                  ref={register()}
                  defaultValue={product.tradeBy}
                />
              </div>
             
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label className="font-title text-green" htmlFor="gallery">Imagen Galerias</label>
                <input type="text" className="mt-2 form-control" id="gallery1" name="gallery1" placeholder="Ingrese el url de la imagen 1" ref={register} defaultValue={gallery[0]}/> 
                <input type="text" className="mt-2 form-control" id="gallery2" name="gallery2" placeholder="Ingrese el url de la imagen 2" ref={register} defaultValue={gallery[1]}/>
                <input type="text" className="mt-2 form-control" id="gallery3" name="gallery3" placeholder="Ingrese el url de la imagen 3" ref={register} defaultValue={gallery[2]}/>
                <input type="text" className="mt-2 form-control" id="gallery4" name="gallery4" placeholder="Ingrese el url de la imagen 4" ref={register} defaultValue={gallery[3]}/>
                <input type="text" className="mt-2 form-control" id="gallery5" name="gallery5" placeholder="Ingrese el url de la imagen 5" ref={register} defaultValue={gallery[4]}/>
                <input type="text" className="mt-2 form-control" id="gallery6" name="gallery6" placeholder="Ingrese el url de la imagen 6" ref={register} defaultValue={gallery[5]}/>
              </div>
            </div>
          </div>
        
          <div className="row">
            <input type="hidden" name="user_id" defaultValue={user.id} ref={register({required: true})}/>
            <input type="hidden" name="username" defaultValue={user.firstname} ref={register({required: true})}/>
            <input type="hidden" name="user_email" defaultValue={user.email} ref={register({required: true})}/>

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
