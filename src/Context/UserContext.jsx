import React, { useState, useEffect, useMemo } from 'react';
import { setToken, deleteToken, getToken } from './../Helpers/auth-helpers';
const UserContext = React.createContext();

export function UserProvider(props){
    const [user, setUser] = useState(null); //no sabemos si esta autenticado
    const [loadinguser, setLoadinguser] = useState(true);

    useEffect(() => {
        async function loadUser() {
            if(!getToken()){
                setLoadinguser(false)
                return;
            }

            try {
                const {data: user } = await Axios.get('api/user/JUAN');
                setUser(user);
                setLoadinguser(false);
            } catch(error) {
                console.log(error);
                
            }
        }
        loadUser()
    }, []);

    async function signup(user) {
        const { data } = await Axios.post('/api/user/signup', user);
        setUser(data.user);
        setToken(data.token);
    }

    function logout() {
        setUser(null);
        deleteToken();
    }

    const value = useMemo(( () => {
        return ({
            user,
            loadUser,
            signup,
            login,
            logout
        })
    }))

    return <UserContext.Provider value={value} { ...props} />
}

export function useUser() {
    const context = React.useContext(UserContext)
    if(!context) {
        throw new Error('Usuario debe estar dentro del proveedor UserContext')
    }
    return context;
}