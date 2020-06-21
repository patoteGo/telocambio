import React, { useState, createContext } from 'react';

// import { setToken, deleteToken, getToken } from './../Helpers/auth-helpers';
import { fetchUser } from '../config/api.js'

export const UserContext = createContext();

export const UserProvider = props => {
    const fetchUserHandle = async(userid) => {
        return await fetchUser(userid);
    }

    const [user, setUser] = useState([]);
    const [token, setToken] = useState([]);
    
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