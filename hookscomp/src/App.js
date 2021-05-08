import './App.css';
import React,{ useState } from 'react'
import MovieList from'./components/MovieList'
import AddFilm from './components/AddFilm'
import Filtre from './components/Filtre'



function App() {

  const [Movies, setMovie] = useState([
    {
   
    titre:"Jungle" ,
    description:"Jungle est un film réalisé par Greg McLean avec Daniel Radcliffe",
    posterURL:"https://www.allocine.fr/Jungle",
    note:3.7
  },
  {
    
    titre:"NOBODY" ,
    description:"Nobody est un film réalisé par Ilya Naishuller avec Bob Odenkirk",
    posterURL:"https://www.allocine.fr/NOBODY",
    note:4
  },
  {
    
    titre:"FAST & FURIOUS" ,
    description:"a race movie" ,
    posterURL:"https://www.allocine.fr/FAST & FURIOUS",
    note:2
  }]
  )

  const AddNewFilm = (titre,description,posterURL,note) =>{
    
    setMovie([...Movies,{
      titre,
      description ,
      posterURL,
      note
    }])
  }
  const FilterItem =(titre,note) =>{
    Movies.filter (Movie => Movie.note === note || Movie.titre === titre )
    
  }

  return (
    <div className="App">
      <h1>Movie Description controle</h1>
      <div className="serching">
      <Filtre Movies={Movies} FilterItem={FilterItem} />
      </div>
      <div className="flexy">
      <div className="list">
      <MovieList Movies={Movies}/>
      </div>
      <div className="formadd">
      <AddFilm AddNewFilm={AddNewFilm}/>
      </div>
      </div>
    </div>
  );
}

export default App;
