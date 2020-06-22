import React, { useState, createContext, useEffect } from 'react';
import { fetchUserById } from '../config/api.js'

import { isAuth } from './../middleware/Auth'
export const UserContext = createContext();

export const UserProvider = props => {
    const fetchUserHandle = async(userid) => {
        return await fetchUserById(userid);
    }



    const [user, setUser] = useState([]);
    const [token, setToken] = useState([]);
   
    const handleisauth = async() => {
        return await isAuth()
    }
    useEffect(() => {
        handleisauth().then(res => {
            // console.log('auth',res);
            if(res){
                setToken(res.token)
                setUser(res.user)
            }
        })
        
        
       
        // const cookies = new Cookies();
        // if(!cookies.get(NAMES.COOKIENAME)) { return }
        
        // const token = cookies.get(NAMES.COOKIENAME);
        // console.log('token',token);
        // fetchTokenHandle(token).then(res => {
        //     console.log(res.id);
        //     setToken(token);
        //     fetchUserHandle(2).then(res2 => {
        //         setUser(res2)
        //         console.log(user);
        //     })
        // })

    }, [])


    
    return (
        <UserContext.Provider value={
            {
                user: [user, setUser],
                token: [token, setToken],
                fetchUser: fetchUserHandle
            }
            
            }>
            {props.children}
        </UserContext.Provider>
    );
}