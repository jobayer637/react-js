import React, { useContext, useEffect } from 'react'
import axios from 'axios'

import { AuthContext } from './ContextProvider'

const Home = () => {
    const [auth, setAuth] = useContext(AuthContext)

    useEffect(()=>{
        axios.get('/user/users')
            .then(res=>{
                console.log(res)
            })
    })

    return (<div>
        Home page
    </div>)

}

export default Home