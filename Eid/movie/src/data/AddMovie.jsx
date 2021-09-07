import React,{useContext, useState} from 'react'
import { MovieContext } from '../MovieContext'

const AddMovie = () => {
    const {movie, search} = useContext(MovieContext)
    const [movies, setMovies] = movie

    const randId = Math.floor(Math.random(500000000)*(600000000-500000000)+500000000)
    
    const [title, setTitle] = useState('')
    const [id, setId] = useState(randId)
    
    const addTitleEvent = (e) => {
        setTitle(e.target.value)
    }

    const FormEvent = (e) => {
        e.preventDefault()
        setMovies([...movies, {title: title, rank: movies.length+1, id:id}])
    }

    return (<div className="card rounded-0 my-2">
        <div className="card-body">
           <form onSubmit={FormEvent}>
               <div className="row">
                   <div className="col-md-4">
                       <input className="form-control" type="text" value={title} name="title" onChange={addTitleEvent} placeholder="Enter Movie title"/>
                   </div>

                   <div className="col-md-3">
                       <input className="form-control" disabled type="text" value={movies.length + 1} name="rank" />
                   </div>

                   <div className="col-md-3">
                       <input className="form-control" disabled type="text" value={id} name="id" />
                   </div>

                   <div className="col-md-2">
                       <button type="submit" className="btn btn-outline-warning">Add New Movie</button>
                   </div>
               </div>
               
           </form>
        </div>
    </div>)
}

export default AddMovie