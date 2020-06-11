import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './views/Homepage/Index'
import List from './views/List/Index'
import Detail from './views/Detail/Index'
import { URLBASE } from './config/config'
import Contact from './layouts/footer/Contact';

const Routes = () => {
    return (
        <BrowserRouter  basename={`/${URLBASE}/`}>
            <Switch>
                <Route exact path={'/'} component={Homepage}  />
                <Route exact path={'/list'} component={List}  />
                {/* <Route exact path={'/detail/:id'} component={Detail} /> */}
                <Route exact path={'/footer/Contact'} component={Contact} />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;