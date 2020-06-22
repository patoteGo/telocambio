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
            console.log('auth',res);
            if(res){
                setToken(res.token)
                setUser(res.user)
            }
        })
        
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