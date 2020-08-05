import React, { useContext, useState  } from 'react'
import Header from '../../layouts/HeaderAdmin'
import { Link } from "react-router-dom";
import { deleteProduct } from '../../../config/api'
import { AppContext } from '../../../Context/AppContext'
import {fetchSwapsbyProduct} from '../../../config/api'
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
    setOfferactive('')
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
          // eslint-disable-next-line
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
      <Offers active={offeractive} handleOfferOff={handleOfferOff} product={product} offers={offers} setProduct={setProduct} setLoader={setLoader} />
      <div className="container">

        <div className="row mb-5">
        <div className="col-9 mt-3 ">
            <h2 className="text-start font-title text-primary">Tus Productos</h2>
          </div>
          <div className="col-sm-3 col-xs-12 mt-3">
            <Link className="btn btn-primary" to="/admin/create">Crear Producto</Link>
          </div>
          
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-small text-center" scope="col">Portada </th>
                  <th className="text-small text-center" scope="col">Titulo</th>
                  <th className="text-small text-center hide-mobile" scope="col">Porque lo cambias</th>
                  <th className="text-small text-center " scope="col">Ofertas</th>
                  
                  <th className="text-small text-center hide-mobile" scope="col">Editar</th>
                  <th className="text-small text-center hide-mobile" scope="col">Borrar</th>
                </tr>
              </thead>
              <tbody>
                {
                  // eslint-disable-next-line
                  context.products[0].map((product, key) => {
                    if(product.user_id === context.user[0].id){
                      return (
                        <tr key={key} className={product.done ? 'accept ' : ''}>
                        <td className="cover d-flex justify-content-center">
                          <img
                            src={product.cover_img}
                            alt="logo"
                            className="bg"
                          />
                          {
                            product.done > 0 ? 
                              <img className="checkimg" src="/img/check_img.svg" alt="check"/>  
                            : ''
                          }
                          
                        </td>
                        {/* <td>{product.done ? 'Aceptado' : 'Pendiente'}</td> */}
                        
                        <th  style={{ maxWidth: '250px',width:'250px', height:'100%'}}>
                          <h4 className="font-title title-mobile">{product.name}</h4>
                          <p className="text-small hide-mobile"  >{product.shortDesc}</p>
                          <div className="d-flex hide-desktop">
                            <Link to={`/admin/edit/${product.id}`} className="btn-edit d-flex align-items-center mr-2">
                            <span className="mr-2 text-small">Editar</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="25.182" height="25.415" viewBox="0 0 25.182 25.415">
                                <g id="edit" transform="translate(1.5 1.733)">
                                  <path id="Trazado_2" data-name="Trazado 2" d="M12.922,6H5.2A2.2,2.2,0,0,0,3,8.2V23.639a2.2,2.2,0,0,0,2.2,2.2H20.639a2.2,2.2,0,0,0,2.2-2.2V15.922" transform="translate(-3 -3.661)" fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                  <path id="Trazado_3" data-name="Trazado 3" d="M23.575,3.5A2.339,2.339,0,0,1,26.883,6.81L16.41,17.283,12,18.386l1.1-4.41Z" transform="translate(-5.385 -2.818)" fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                </g>
                              </svg>

                            </Link>
                            <div className="ml-2 btn-delete" onClick={()=>{handleDelete(product.id)}}>
                                <span className="mr-2 text-small">Borrar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.253" height="22.182" viewBox="0 0 17.253 22.182">
                                  <path id="delete" d="M8.732,24.217A2.472,2.472,0,0,0,11.2,26.682h9.859a2.472,2.472,0,0,0,2.465-2.465V9.429H8.732ZM24.753,5.732H20.44L19.207,4.5H13.046L11.813,5.732H7.5V8.2H24.753Z" transform="translate(-7.5 -4.5)" fill="#888"/>
                                </svg>
                            </div>
                          
                          </div>

                          
                          </th>
                        <td className="hide-mobile"> <div className="font-title text-center ">{product.tradeBy}</div></td>
                        <td className="text-center">
                          { product.offers > 0 ? 
                          
                          <button onClick={()=>{handleOffer(product)}} className="btn btn-info text-center">
                            <div className="text-small mb-2 text-center">Ofertas</div>
                            <h3 className="font-title text-white text-center">{product.offers}</h3>
                          </button> : 
                          <div>
                            <div className="text-small mb-2 text-center">Ofertas</div>
                            <h3 className="font-title text-center">{product.offers}</h3>
                          </div>
                          }
                            
                        </td>
                        <td className="hide-mobile">
                        

                          <Link to={`/admin/edit/${product.id}`} className="btn-edit d-flex align-items-center">
                          <span className="mr-2 text-small">Editar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.182" height="25.415" viewBox="0 0 25.182 25.415">
                              <g id="edit" transform="translate(1.5 1.733)">
                                <path id="Trazado_2" data-name="Trazado 2" d="M12.922,6H5.2A2.2,2.2,0,0,0,3,8.2V23.639a2.2,2.2,0,0,0,2.2,2.2H20.639a2.2,2.2,0,0,0,2.2-2.2V15.922" transform="translate(-3 -3.661)" fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Trazado_3" data-name="Trazado 3" d="M23.575,3.5A2.339,2.339,0,0,1,26.883,6.81L16.41,17.283,12,18.386l1.1-4.41Z" transform="translate(-5.385 -2.818)" fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                              </g>
                            </svg>

                          </Link>
                        </td>
                        <td className="hide-mobile">
                          <div className="btn-delete" onClick={()=>{handleDelete(product.id)}}>
                              <span className="mr-2 text-small">Borrar</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17.253" height="22.182" viewBox="0 0 17.253 22.182">
                                <path id="delete" d="M8.732,24.217A2.472,2.472,0,0,0,11.2,26.682h9.859a2.472,2.472,0,0,0,2.465-2.465V9.429H8.732ZM24.753,5.732H20.44L19.207,4.5H13.046L11.813,5.732H7.5V8.2H24.753Z" transform="translate(-7.5 -4.5)" fill="#888"/>
                              </svg>

                          </div>
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
