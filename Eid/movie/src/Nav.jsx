import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {

    const {movie, search} = React.useContext(MovieContext)
    const [movies, setMovies] = movie
    const [searchValue, setSearchValue] = search

    const SearchHandleMethod = (e) => {
        setSearchValue(e.target.value)
    }

    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-2">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" onChange={SearchHandleMethod} value={searchValue} name="search" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </div>)
}

export default Nav