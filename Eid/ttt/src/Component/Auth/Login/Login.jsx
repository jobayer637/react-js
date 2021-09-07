import React, { useState, useContext, useEffect } from 'react'
import ManageForm from './ManageForm'
import { RootContext } from '../../../Context/ContextProvider'
import {useHistory} from 'react-router-dom'


const Login = () => {

    useEffect(()=>{
        if(loggedInUser.email){
            redirectHome()
        }
     })

    const redirectHome = () => {
        history.push('/')
    }

    const {allUser, auth} = useContext(RootContext)
    const [users, allUsers] = allUser
    const  [loggedInUser, setLoggedInUser] = auth
    
    const [user, setUser] = useState({ email: '', password: '' })
    const history = useHistory()
    const [error, setError] = useState({ email: '', password: '' })

    const HandleFormInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({...user, [name]:value})
     }
    const HandleFormSubmit = (e) => {
        e.preventDefault()
        
        let find = users.find(u => u.email===user.email && u.password===user.password)
        
        if(find){
            setLoggedInUser(find)
            redirectHome()
        }
     }

    return (
        <div>
            <div className="card" style={{ width: '40rem' }}>
                <div className="card-header text-center">
                    <h2>User Login form</h2>
                </div>
                <div className="card-body">
                    <ManageForm
                        user={user}
                        HandleFormInput={HandleFormInput}
                        HandleFormSubmit={HandleFormSubmit}
                        error={''}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
