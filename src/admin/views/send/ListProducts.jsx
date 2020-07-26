import React, { useContext, useState, useEffect } from 'react'
import Header from '../../layouts/HeaderAdmin'
import { Link } from "react-router-dom";
import { deleteProduct } from '../../../config/api'
import { AppContext } from '../../../Context/AppContext'
import {fetchSwapsbyProduct, fetchProducts} from '../../../config/api'
import Swal from 'sweetalert2'
import Offers from './Offers'
import Loader from '../../../Helpers/Loader'
import './listproduct.sass'
export default function ListProducts(props) {
  const context = useContext(AppContext);
  const [offeractive, setOfferactive] = useState('');
  const [offers, setOffers] = useState([]);
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState("");
  const handleOffer = (product) => {
    setOfferactive('active');
    setProduct(product)
    fetchSwapsbyProduct(product.id).then(res => {
      setOffers(res)
    })
    

  }

  const handleOfferOff = () => {
    setOfferactive('');
    fetchProducts().then(res => {
      // console.log('off', res)
      context.products[1](res)
      window.location.reload(false);

  }) 
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Estas segur@?',
      text: "No podras revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo'
    }).then((result) => {
      if (result.value) {
        deleteProduct(id).then((res) => {
          Swal.fire(
            'Borrada!',
            'Tu publicación ha sido borrada.',
            'success'
          )
          // eslint-disable-next-line
          const productsSIN =  context.products[0]
            .map( (product) => { if ( product.id !== id) return product })
            .filter((el) => {return el != null})

          context.products[1](productsSIN)


        })
        
      }
    })
  }


  return (
    <div>
      <Header interior={true} title="Dashboard"/>
      <Loader active={loader}/> 
    <div className="ListProducts" >
      <Offers active={offeractive} off={handleOfferOff} product={product} offers={offers} setProduct={setProduct} setLoader={setLoader} />
      <div className="container">

        <div className="row mb-5">
        <div className="col-9 mt-3 ">
            <h2 className="text-start font-title text-primary">Tus Productos</h2>
          </div>
          <div className="col-3 mt-3">
            <Link className="btn btn-primary" to="/admin/create">Crear Producto</Link>
          </div>
          
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  {/* <th scope="col">id</th> */}
                  <th scope="col">Estado</th>
                  <th scope="col">Portada</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Porque lo cambias</th>
                  <th scope="col">Ofertas</th>
                  
                  <th scope="col">Editar</th>
                  <th scope="col">Borrar</th>
                </tr>
              </thead>
              <tbody>
                {
                  // eslint-disable-next-line
                  context.products[0].map((product, key) => {
                    if(product.user_id === context.user[0].id){

                   
                    return (
                      
                      <tr key={key} className={product.done ? 'accept' : ''}>
                      <td>
                        <img
                          style={{ width: '40px' }}
                          src={product.cover_img}
                          alt="logo"
                        />
                      </td>
                      <td>{product.done ? 'Aceptado' : 'Pendiente'}</td>
                      
                      <th>{product.name}</th>
                      <td>{product.tradeBy}</td>
                      <td><strong className="mr-2">{product.offers}</strong> 
                      { product.offers > 0 ? <button onClick={()=>{handleOffer(product)}} className="btn btn-info">ver</button> : ''}
                          
                      </td>
                      <td>
                      

                        <Link to="/admin/create" className="btn btn-sm btn-secondary">EDITAR</Link>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-danger" onClick={()=>{handleDelete(product.id)}}>BORRAR</button>
                      </td>
                      
                    </tr>
                    
                     
                    )
                  }
                  
                  })
                }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
