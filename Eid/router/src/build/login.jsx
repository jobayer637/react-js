import React, {useState, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import { AuthContext } from './ContextProvider'
import axios from 'axios'

const Login = (props) => {
    const [auth, setAuth] = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(false)
    const [login, setLogin] = useState({email: '', password: ''})

    const handleLogin = () => {
        setAuth(true)
        setIsLogin(true)
    }

    
    const defaultPath = {pathname: '/'}
    let  { from } = props.location.state || defaultPath
    
    if(isLogin) {return  <Redirect to={from}/>}
    if(auth) {return  <Redirect to='/' />}

    return (
        <div>
            <form>
                <div className="row form-group">
                    <div className="col-md-3">
                        <label htmlFor="email">Enter Email</label>
                    </div>
                    <div className="col-md-9">
                        <input type="email" className="form-control" name="email" value={login.email} />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-md-3">
                        <label htmlFor="email">Enter Email</label>
                    </div>
                    <div className="col-md-9">
                        <input type="password" className="form-control" name="email" value={login.password} />
                    </div>
                </div>
            </form>
            <button onClick={handleLogin} className="btn btn-outline-primary">Login</button> 
        </div>
    )
}

export default Login
