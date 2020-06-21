import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';
import { UserContext  } from './../Context/UserContext'
import { NAMES } from './../config/config'
export const ProtectedRoute = ({ component: Component, ...rest}) => {
    const context = useContext(UserContext);
    const isAuth = () =>{
        const cookies = new Cookies();
        console.log('cc',context.token[0] , cookies.get(NAMES.COOKIENAME));
        
        if(cookies.get(NAMES.COOKIENAME)) {
        // if(context.token[0] === cookies.get(NAMES.COOKIENAME)) {
            console.log('cc',context.token[0] , cookies.get(NAMES.COOKIENAME));
            return true;
        }
        return false;
    }
    return (
        <Route {...rest } 
        render={
            (props) => {
                if(isAuth()){
                    return <Component {...props} />
                } else {
                    return <Redirect to={{
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                    }/>
                }
                
            }
        }/>
    )
}