import React from 'react'
import  '../css/MovieCard.css'

const MovieCard= ({Movies})=> {
    return (
        <>
          <div className="container carte">
              <p><span>Titre :</span>{Movies.titre}</p>
              <p><span>Description :</span>{Movies.description}</p>
              <p><span>Lien :</span>{Movies.posterURL}</p>
              <p><span>Note :</span>{Movies.note}</p>
              
          </div>
        </>
    )
}

export default MovieCard
