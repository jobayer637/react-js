import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Nav() {
    const as = {
        color: 'white', 
        backgroundColor: 'blue', 
        padding: '5px 10px',
    }
    const td = {
        textDecoration: 'none',
        fontSize: '19px',
        fontWeight: 'bolder'
    }
    return (
        <div>
            <div className="card mb-3">
                <div className="card-header">
                    <NavLink style={td} exact activeStyle={as} to="/">Home</NavLink>
                    <NavLink style={td} className="mx-2" activeStyle={as} to="/blog">Blog</NavLink>
                    <NavLink style={td} activeStyle={as} to="/login">Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav
