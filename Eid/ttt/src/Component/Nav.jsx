import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul className="d-flex justify-content-end">
                <Link to="/">
                    <li className="px-2 nav-link">Home</li>
                </Link>

                <Link to="/login">
                    <li className="px-2 nav-link">Login</li>
                </Link>

                <Link to="/register">
                    <li className="px-2 nav-link">Register</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
