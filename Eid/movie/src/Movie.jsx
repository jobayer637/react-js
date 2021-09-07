import React,{useContext} from 'react'
import { MovieContext } from './MovieContext'

const Movie = () => {
    const {movie, search} = useContext(MovieContext)
    const [movies, setMovies] = movie
    const [searchValue, setSearchValue] = search

    return (<div className="card rounded-0">
        <div className="card-body">

            {movies.filter(movie=>{
                if(searchValue.length === '' || null)
                    return movie
                if(movie.title.toLowerCase().includes(searchValue.toLowerCase()) || movie.rank.includes(searchValue))
                    return movie
            }).map(movie=><div className="card-footer">
                <span class="badge bg-success">{movie.id}</span>
                <span class="badge bg-primary mx-4">{movie.rank}</span>
                <span class="badge bg-danger">{movie.title}</span>
            </div>)}
        </div>
    </div>)
}

export default Movie