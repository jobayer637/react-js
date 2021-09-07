import React, { useContext, useState } from "react";
import { RootContext } from "../../../Context/ContextProvider";
import ManageForm from "./ManageForm";

function Register() {
    const { uReg, allUser } = useContext(RootContext);
    const [userRegister, setUserRegister] = uReg
    const [users, setUsers] = allUser

    const error = {
        name: '',
        email: '',
        password: ''
    }
    const [errors, setErrors] = useState(error)

    const HandleFormInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        setUserRegister({...userRegister,[name]:value}) 
    }

    const HandleFormSubmit = event => {
        event.preventDefault()
        HandleError(userRegister);

        if(errors.error){
            if(error.name === '' && error.email==='' && error.password===''){
                setUsers([...users, userRegister])
                setUserRegister({name:'', email: '', password: ''})
            }
        }
    }

    const HandleError = (data) => {
        data.name.length < 3 ? error.name = 'Name at least 3 characters' : error.name = ''
        data.password.length < 4 ? error.password = 'Password at least 4 characters' : error.password = ''
        data.email.includes('@gmail.com') ? error.email = '': error.email = 'Please enter a valid email'

        setErrors({
            ...errors,
            error
        })
    }

    return (
        <div>
            <div className="card" style={{width:'40rem'}}>
                <div className="card-header text-center">
                    <h2>User Registraion form</h2>
                </div>
                <div className="card-body">

                    <ManageForm 
                        userRegister={userRegister}
                        HandleFormInput={HandleFormInput}
                        HandleFormSubmit={HandleFormSubmit}
                        error={errors.error}
                    />

                </div>
            </div>
        </div>
    );
}

export default Register;
