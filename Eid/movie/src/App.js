import React,{useContext} from 'react'
import Nav from './Nav';
import Movie from './Movie';
import { MovieProvider } from './MovieContext';
import AddMovie from './data/AddMovie'

function App() {
  return (
    <MovieProvider>
        <div className="container">
          <Nav />
          <AddMovie />
          <Movie />
        </div>
    </MovieProvider>
  );
}

export default App;
