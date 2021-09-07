import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import Nav from './Nav'
import Home from './Home'
import Logout from './Auth/Logout.jsx/Logout'
import Os from './Os/Os'

import {ContextProvider} from '../Context/ContextProvider'

function Root() {
    return (
        <div className="container my-3">
            <Router>
                <ContextProvider>
                    <Nav />
                    {/* <Os /> */}
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/logout' component={Logout} />
                </ContextProvider>
            </Router>
        </div>
    )
}

export default Root
