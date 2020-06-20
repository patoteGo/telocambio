import React, { useState, useEffect, createContext } from 'react';
import PrivacyPolicies from '../layouts/footer/PrivacyPolicies';
// import { setToken, deleteToken, getToken } from './../Helpers/auth-helpers';
// import { fetchUser } from './../api.js'

export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState([
        {
            id: '5454',
            name: 'juan',
            email: 'email@email.com',
            password: 'password',
        }
    ]);
    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    );
}