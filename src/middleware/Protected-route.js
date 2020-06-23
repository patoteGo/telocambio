import React,{ useState, useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAuth } from './Auth'

// import { NAMES } from './../config/config'
export const ProtectedRoute = ({ component: Component, ...rest}) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        isAuth().then(res => { 
            setUser(res);
            return res

        })
        
    }, [])
    
    return (
        <Route {...rest } 
        render={
            (props) => {
                    if(user){
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