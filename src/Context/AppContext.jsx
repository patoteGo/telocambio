import React, { useState, createContext, useEffect } from 'react';
import { fetchProducts } from '../config/api.js'

import { isAuth } from '../middleware/Auth'
export const AppContext = createContext();

export const AppProvider = props => {


    const [user, setUser] = useState([]);
    const [token, setToken] = useState([]);
    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([])
   
    const handleisauth = async() => {
        return await isAuth()
    }


    useEffect(() => {
        handleisauth().then(res => {
            console.log('auth',res);
            if(res){
                setToken(res.token)
                setUser(res.user)
            }
        })
        fetchProducts().then(prod => {
            setProducts(prod)
        })
        
    }, [])


    
    return (
        <AppContext.Provider value={
            {
                user: [user, setUser],
                token: [token, setToken],
                products: [ products, setProducts],
                product: [ product, setProduct],
                // fetchUser: fetchUserHandle,
                handleisauth: handleisauth
            }
            
            }>
            {props.children}
        </AppContext.Provider>
    );
}