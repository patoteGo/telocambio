import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../views/Homepage/Index'
// import Detail from './views/Detail/Index'
import { URLBASE } from '../config/config'
import Contact from './../views/Contacto';
import Login from '../views/Account/Login';
import Register from '../views/Account/Register';
import Detail from './../views/Detail/Detail.jsx'
import Products from './../views/Products/Products.jsx'
import QuienesSomos from './../views/QuienesSomos';
import Page404 from './../views/Page404';
// import Test from './../views/Test'
//admin
import CreateProductSend from '../admin/views/send/CreateProduct.jsx'
import ListProductsSend from './../admin/views/send/ListProducts.jsx'

import ConfigPage from './../admin/views/configuration/ConfigUser.jsx'
import { ProtectedRoute } from './Protected-route'
import Noaccess from './../views/Forbidden.jsx'

const Routes = () => {
   
    return (
        <BrowserRouter  basename={`/${URLBASE}/`}>
            <Switch>
                <Route exact path={'/'} component={Homepage}  />
                <Route exact path={'/login'} component={Login}  />
                <Route exact path={'/register'} component={Register} />
                <Route exact path={'/contacto'} component={Contact} />
                <Route exact path={'/publicaciones'} component={Products} />
                <Route exact path={'/publicaciones/:id'} component={Detail} />
                <Route exact path={'/quienes-somos'} component={QuienesSomos}/>
                {/* <Route exact path={'/test'} component={Test}/> */}
                <ProtectedRoute exact path={'/admin/create'} component={CreateProductSend} />
                <ProtectedRoute exact path={'/admin/edit/:id'} component={CreateProductSend} />
                <ProtectedRoute exact path={'/admin/list'} component={ListProductsSend} />
                <ProtectedRoute exact path={'/admin/config'} component={ConfigPage} />
                <Route exact path={'/forbidden'} component={Noaccess} />
                <Route component={Page404}  />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;