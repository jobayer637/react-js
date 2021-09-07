import React, {useContext} from 'react'
import {RootContext} from '../../../Context/ContextProvider'
import {useHistory} from 'react-router-dom'

function Logout() {

    const {auth} = useContext(RootContext)
    const [loggedInUser, setLoggedInUser] = auth
    const history = useHistory()

    setLoggedInUser({})
    return (
       <div>
           {history.push('/login')}
       </div>
    )
}

export default Logout
