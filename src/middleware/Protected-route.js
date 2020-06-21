import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAuth } from './Auth'

// import { NAMES } from './../config/config'
export const ProtectedRoute = ({ component: Component, ...rest}) => {
    
    return (
        <Route {...rest } 
        render={
            (props) => {
                if(isAuth()){
                    return <Component {...props} />
                } else {
                    return <Redirect to={{
                        pathname: "/forbidden",
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