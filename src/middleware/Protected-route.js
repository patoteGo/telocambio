import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAuth } from './Auth'

// import { NAMES } from './../config/config'
export const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest } 
        render={
            (props) => {
                isAuth().then(res => { 
                    console.log('from protected-view',res.token);
                    if(res.token){
                        console.log('true');
                        
                        return <Component {...props} />
                    } else {
                        console.log('false');
                        return <Redirect to={{
                            pathname: "/forbidden",
                            state: {
                                from: props.location
                            }
                        }
                        }/>
                    }
                })
            }
        }/>
    )
}