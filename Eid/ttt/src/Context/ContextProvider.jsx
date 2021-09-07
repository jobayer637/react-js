import React, { createContext, useState } from 'react'

export const RootContext = createContext()

export const ContextProvider = props => {
    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [users, setUsers] = useState([{name:'jobaer',email:'web.jobayer@gmail.com',password:'1111'}]);
    const [loggedInUser, setLoggedInUser] = useState({})

    return (
        <div>
            <RootContext.Provider value={{
                uReg: [userRegister, setUserRegister],
                allUser: [users, setUsers],
                auth: [loggedInUser, setLoggedInUser]
            }}>
                {props.children}
            </RootContext.Provider>
        </div>
    )
}



