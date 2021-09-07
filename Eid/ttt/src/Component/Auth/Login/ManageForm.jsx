import React from 'react'
import Input from "./Input";

const ManageForm = ({user, HandleFormInput, HandleFormSubmit, error}) => {
    return (
        <div>
            <form onSubmit={HandleFormSubmit} autoComplete="off">
                <Input
                    label={'Email'}
                    type={'email'}
                    name={'email'}
                    value={user.email}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error? error.email:''}
                />

                <Input
                    label={'Password'}
                    type={'password'}
                    name={'password'}
                    value={user.password}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error? error.password:''}
                />

                <Input
                    label={''}
                    type={'submit'}
                    value={'Login'}
                    style={"btn btn-outline-primary"}
                />
            </form>
        </div>
    )
}

export default ManageForm
