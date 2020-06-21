import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../views/Homepage/Index'
import List from '../views/List/Index'
// import Detail from './views/Detail/Index'
import { URLBASE } from '../config/config'
import Contact from '../layouts/footer/Contact';
import Login from '../views/Account/Login';
import Register from '../views/Account/Register';
import CreateProduct from '../admin/views/CreateProduct.jsx'
import ListProducts from './../admin/views/ListProducts.jsx'
import { ProtectedRoute } from './Protected-route'

const Routes = () => {
   
    return (
        <BrowserRouter  basename={`/${URLBASE}/`}>
            <Switch>
                <Route exact path={'/'} component={Homepage}  />
                <Route exact path={'/list'} component={List}  />
                <Route exact path={'/login'} component={Login}  />
                <Route exact path={'/register'} component={Register}  />
                {/* <Route exact path={'/detail/:id'} component={Detail} /> */}
                <ProtectedRoute exact path={'/admin/create'} component={CreateProduct} />
                <ProtectedRoute exact path={'/admin/list'} component={ListProducts} />
                <Route exact path={'/Contact'} component={Contact} />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;