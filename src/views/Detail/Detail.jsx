import React, { useContext, useEffect, useState } from 'react'
import Header from './../../layouts/Header.jsx'
import Footer from './../../layouts/footer/Footer2.jsx'
import Gallery from './Gallery'
import { Link } from "react-router-dom";
import { AppContext } from './../../Context/AppContext'
import { fetchProductbyID } from './../../config/api'
import ChoicePublish from './../../modals/ChoicePublish'
import Login from './../../modals/Login'
import NewPublish from './../../modals/NewPublish'
import ListPublish from './../../modals/ListPublish'
export default function Detail(props) {
    const context = useContext(AppContext);
    // eslint-disable-next-line
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState('');

 
    useEffect(() => {
        
        if (props.match.params.id !== undefined) {
            const idproduct = props.match.params.id;
            fetchProductbyID(idproduct).then(res => {
                setProduct(res)
            })
        }

        const updatedUser = () => {
            !context.user[0].id ? setModal("#loginModal") : setModal("#choiceModal")
        }
        updatedUser()

    }, [])


    const galleryHandle = () => {
        if (product.gallery !== undefined) {
            const gal = product.gallery.split(',').map(img => {
                return {
                    original: img,
                    thumbnail: img
                }
            })
            gal.unshift({
                original: product.cover_img,
                thumbnail: product.cover_img
            });
            return gal;
        }

    }
    // console.log('product',product, galleryHandle());
    return (
        <div className="Detail">
            <Header interior={true} title={product.name}/>
            
            <ChoicePublish name="choiceModal" product={product} />
            <Login name="loginModal" product={product} />
            <ListPublish name={`listpublishModal${product.id}`} product={product} />
            <NewPublish name={`newpublishModal${product.id}`} product={product} />

            
            
            <div className="container">
                <div className="row mt-5 d-flex align-items-end">
                    <div className="col">
                        <h2 className="mr-4 font-title">{product.name}</h2>
                        <p className="text-green">Quien lo ofrece: <strong>{product.username}</strong></p>
                    </div>

                </div>
                <div className="row mb-4">
                    <div className="col-md-8 overflow-hidden col-sm-12">

                        {product.gallery && <Gallery images={galleryHandle()} />}

                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="desc mb-3">
                            {product.longDesc}
                        </div>
                        <p className="desc mt-4">
                            Lo cambio por: <strong>{product.tradeBy}</strong>
                        </p>
                        <div className="row mb-4">
                            <div className="col">
                                {
                                context.user[0].id !== product.user_id ?
                                    <div className="btn ml-2 btn-primary" data-toggle="modal" data-target={modal}>Cambiar por</div> : ''
                                    
                                }
                             
                                <Link to="/publicaciones" className="btn btn-light  ml-1">Ver todas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
