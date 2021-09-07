import React from 'react'
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Blog from './Blog'
import Login from './Login'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'

function Router() {
    return (
        <div className="container my-3">
            <BrowserRouter>
            <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <ProtectedRoute path='/blog' component={Blog} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
