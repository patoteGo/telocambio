import React, { useState, createContext, useEffect } from 'react';
import { fetchUserById } from '../config/api.js'

import { isAuth } from '../middleware/Auth'
export const AppContext = createContext();

export const AppProvider = props => {
    const fetchUserHandle = async(userid) => {
        return await fetchUserById(userid);
    }

    const userTest = {
        firstname: 'juan',
        lastname: 'soto',
        email: 'email@email.com',
        password: 'password',
        role: 'user',
    }

    const [user, setUser] = useState([]);
    const [token, setToken] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Juguera',
            tags: 'electrodomestico, cocina',
            shortDesc: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
            longDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            cover_img: 'https://placedog.net/600/500/?random=1',
            gallery: 'https://placedog.net/600/500/?random=2,https://placedog.net/600/500/?random=3,https://placedog.net/600/500/?random=4,https://placedog.net/600/500/?random=5',
            user_id: 2, //esta es un campo de relacion
            user_name: 'Jose'
        },
        {
            id: 2,
            name: 'Batidora',
            tags: 'electrodomestico, cocina',
            shortDesc: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
            longDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            cover_img: 'https://placedog.net/600/500/?random=6',
            gallery: 'https://placedog.net/600/500/?random=7,https://placedog.net/600/500/?random=9,https://placedog.net/600/500/?random=4,https://placedog.net/600/500/?random=8',
            user_id: 1,
            user_name: 'Eduardo'
        },
        {
            id: 3,
            name: 'Moledora',
            tags: 'electrodomestico, cocina',
            shortDesc: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
            tradeBy: 'un sacacorchos',
            longDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            cover_img: 'https://placedog.net/600/500/?random=11',
            gallery: 'https://placedog.net/600/500/?random=12,https://placedog.net/600/500/?random=13,https://placedog.net/600/500/?random=14,https://placedog.net/600/500/?random=15',
            user_id: 3,
            user_name: 'Diego'
        },
        {
            id: 4,
            name: 'Freidora',
            tags: 'electrodomestico, cocina',
            shortDesc: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
            tradeBy: 'un sacajugos',
            longDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            cover_img: 'https://placedog.net/600/500/?random=16',
            gallery: 'https://placedog.net/600/500/?random=12,https://placedog.net/600/500/?random=17,https://placedog.net/600/500/?random=19,https://placedog.net/600/500/?random=18',
            user_id: 4,
            user_name: 'Felipe'
        },
    ]);
   
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
        
    }, [])


    
    return (
        <AppContext.Provider value={
            {
                user: [user, setUser],
                token: [token, setToken],
                products: [ products, setProducts],
                fetchUser: fetchUserHandle,
                handleisauth: handleisauth
            }
            
            }>
            {props.children}
        </AppContext.Provider>
    );
}