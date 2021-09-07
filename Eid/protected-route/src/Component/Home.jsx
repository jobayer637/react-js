import React, {useState} from 'react'

function Home(props) {
    const [auth, setAuth] = useState(false)
    // localStorage.setItem('isAuth', false)
    

    const handleAuth = (value) => {
        setAuth(value)
        localStorage.setItem('isAuth', auth)
    }

    let isAuth = localStorage.getItem('isAuth')
    console.log(isAuth)
    console.log(props)

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <button onClick={ () => handleAuth(true) } className="btn btn-primary">SetAuth</button>
                    <button onClick={ () => handleAuth(false) } className="btn btn-info mx-2">UnetAuth</button>
                </div>
                <div className="card-body">
                    <h3>Home Page</h3>
                </div>
            </div>
        </div>
    )
}

export default Home
