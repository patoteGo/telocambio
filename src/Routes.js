import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './views/Homepage/Index'
import List from './views/List/Index'
import Detail from './views/Detail/Index'
import { URLBASE } from './config/config'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={`/${URLBASE}/`} component={Homepage}  />
                <Route exact path={`/${URLBASE}/list`} component={List}  />
                <Route exact path={`/${URLBASE}/detail/:id`} component={Detail} />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;