import React, {createContext, useState, useEffect} from 'react'
import MovieList2 from './data/MovieList2'
import MovieList from './data/MovieList'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [searchingValue, setSearchingValue] = useState('')

    useEffect(()=>{
        setMovies(MovieList)
    },[])

    return (<div>
        <MovieContext.Provider value={{movie: [movies, setMovies], search: [searchingValue, setSearchingValue]}}>
            {props.children}
        </MovieContext.Provider>
    </div>)
}
