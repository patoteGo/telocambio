import React, { useContext, useEffect, useState } from 'react'
import Header from './../../layouts/Header.jsx'
import Footer from './../../layouts/footer/Footer2.jsx'
import Gallery from './Gallery'
import { Link } from "react-router-dom";
import { AppContext } from './../../Context/AppContext'
import './detail.sass'
import ChoicePublish from './../../modals/ChoicePublish'
import Login from './../../modals/Login'
export default function Detail(props) {
    const context = useContext(AppContext);
    // eslint-disable-next-line
    const [products, setProducts] = context.products;
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState('');
    
    

    useEffect(() => { 
        if (props.match.params.id !== undefined) {
            const idproduct = props.match.params.id;
            setProduct(products.filter(prod => prod.id == idproduct)[0])
            
            // console.log('prod', products.filter(prod => prod.id == idproduct), products[idproduct]);
        }
    }, [])

    useEffect(() => {
        const updatedUser = () => {
            !context.user[0].id ? setModal("#loginModal") : setModal("#choiceModal")
        }
        updatedUser()
        
    }, [context.user[0]]);

    const galleryHandle = () => {
        if(product.gallery != undefined){
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
            <Header/>
            <ChoicePublish/>
            <Login/>
            <div className="container">
                <div className="row mt-5 d-flex align-items-end">
                    <div className="col">
                        <h2 className="mr-4">{product.name}</h2>
                        <h5>Usuario: <strong>{product.user_name}</strong></h5>
                    </div>
                    
                </div>
                <div className="row mb-4">
                    <div className="col-md-8 overflow-hidden col-sm-12">
                        
                        {product.gallery && <Gallery images={galleryHandle()}/> }
                        
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
                                <div className="btn btn-primary mt-2" data-toggle="modal" data-target={modal}>Ofrecer por esto</div>
                                <Link to="/publicaciones" className="btn btn-light mt-2 ml-1">Ver todas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
