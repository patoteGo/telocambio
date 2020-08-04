import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../layouts/HeaderAdmin'
import { useForm } from 'react-hook-form';
import { AppContext } from '../../../Context/AppContext'
import { createProduct,editProduct, uploadImage } from '../../../config/api.js'
import Loader from '../../../Helpers/Loader'
import Swal from 'sweetalert2'
import { fetchProductbyID,fetchProducts } from '../../../config/api'
// import ImageUploadResizer from 'react-form-upload-image-resize';
// import resizeImage from './../../../config/resizeImage'
export default function CreateProduct(props) {
  const context = useContext(AppContext);
  const [user, setUser] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [loader, setLoader] = useState("");
  const [product, setProduct] = useState({});
  // eslint-disable-next-line
  const [gallery, setGallery] = useState([]);
  const history = useHistory();

  const showGallery = (product, num) => {
    if(product.gallery){
      if(product.gallery.split(",")[num] !== undefined){
        return <img src={product.gallery.split(",")[num]} alt={`gallery${num}`} style={{ width:'90px'}}/>
      } else { return ''}
      
    }

  }
   
  const onSubmit = (data) => {
    setLoader('active');
    const formData = new FormData()
    const filecover = document.querySelector('#cover_img')
    //   resizeImage({
    //     file: filecover.files[0],
    //     maxSize: 500
    // }).then(function (resizedImage) {
    //     console.log("upload resized image")
    //     formData.append('cover_img', resizedImage)
    // }).catch(function (err) {
    //     console.error(err);
    // });
    

    const filegal1 = document.querySelector('#gallery1')
    const filegal2 = document.querySelector('#gallery2')
    const filegal3 = document.querySelector('#gallery3')
    const filegal4 = document.querySelector('#gallery4')
    const filegal5 = document.querySelector('#gallery5')
    const filegal6 = document.querySelector('#gallery6')
    formData.append('cover_img', filecover.files[0])
    formData.append('gallery1', filegal1.files[0])
    formData.append('gallery2', filegal2.files[0])
    formData.append('gallery3', filegal3.files[0])
    formData.append('gallery4', filegal4.files[0])
    formData.append('gallery5', filegal5.files[0])
    formData.append('gallery6', filegal6.files[0])

    console.log('data real', data);

    uploadImage(formData).then(res => {
      console.log(res);    
      setLoader('');
      res.forEach(resval => {
        data = {...data,  ...resval }
      });
      console.log('dataantes crear', data);
      if(props.match.params.id !== undefined ){
        //editar
        editProduct(props.match.params.id, data).then(res => {
            setLoader('');
            Swal.fire({
              title: 'Producto editado',
              text: 'Ya esta publicado',
              icon: 'success',
              confirmButtonText: 'Listo'
            })
            fetchProducts().then(prod => {
              context.products[1](prod)
            })
            
            history.push('/admin/list')


          }).catch((err) => {
            console.log(err);
          })
      }else {
        //crear
        createProduct(data).then(res => {
            setLoader('');
            Swal.fire({
              title: 'Ha sido creado',
              text: 'Ya esta publicado',
              icon: 'success',
              confirmButtonText: 'Listo'
            })
            fetchProducts().then(prod => {
              context.products[1](prod)
            })
            
            history.push('/admin/list')
          }).catch((err) => {
            console.log(err);
          })
      }
          
    }).catch((err) => {
      setLoader('');
      console.log(err);
    })
 

    console.log(data);
    // console.log(formData);

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
    // eslint-disable-next-line
}, [context.user[0]]);

  return (
    <div>
      <Header interior={true} title={ props.match.params.id !== undefined ? 'Editar' : 'Crear'}/>
      <Loader active={loader}/>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                <div className="d-flex">
                { props.match.params.id !== undefined && <img src={product.cover_img} style={{ width:'100px'}} alt="coverimg"/>  }
                {/* <ImageUploadResizer change={callback} id="cover_img"  width={200} height={200} /> */}
                <input id="cover_img" type="file" className="form-control"/>
                {errors.cover_img && <p className="badge badge-danger ml-2">{errors.cover_img.message}</p>}

                </div>
                
                
              </div>
              <div className="form-group">
                <label className="font-title text-green" htmlFor="tradeBy">Cambiar Por</label>
                <input
                  type="text"
                  className="form-control"
                  name="tradeBy"
                  id="tradeBy"
                  placeholder="Tostadora"
                  ref={register({required: 'porque cambiar requerida'})}
                  defaultValue={product.tradeBy}
                />
                {errors.tradeBy && <p className="badge badge-danger ml-2">{errors.tradeBy.message}</p>}
              </div>
             
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label className="font-title text-green" htmlFor="gallery">Imagen Galerias</label>
                <div className="d-flex my-2">
                <input id="gallery1" type="file" className="form-control mr-1"/>
                { props.match.params.id !== undefined && showGallery(product ,0)}
                </div>
                
                <div className="d-flex my-2">
                <input id="gallery2" type="file" className="form-control mr-1"/>
                { props.match.params.id !== undefined && showGallery(product ,1)}
                </div>

                <div className="d-flex my-2">
                <input id="gallery3" type="file" className="form-control mr-1"/>
                { props.match.params.id !== undefined && showGallery(product ,2)}
                </div>

                <div className="d-flex my-2">
                <input id="gallery4" type="file" className="form-control mr-1"/>
                { props.match.params.id !== undefined && showGallery(product ,3)}
                </div>

                <div className="d-flex my-2">
                <input id="gallery5" type="file" className="form-control mr-1"/>
                { props.match.params.id !== undefined && showGallery(product ,4)}
                </div>

                <div className="d-flex my-2">
                <input id="gallery6" type="file" className="form-control mr-1"/>
                { props.match.params.id !== undefined && showGallery(product ,5)}
                </div>
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
                { props.match.params.id !== undefined ? 'Editar Publicación' : 'Subir Publicación'}
              </button>
            </div>
          </div>
        </form>
        {/* <div className="btn btn-info">Buscar imagenes</div> */}
      </div>
    </div>
  )
}
