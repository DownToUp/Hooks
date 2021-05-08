import React from 'react'
import MovieCard from'./MovieCard'


const MovieList = ({Movies}) =>{

   
    return (
        <div>
            {
                Movies.map((Movie,key)=>{
                    return (
                        <MovieCard key={key+1} Movies={Movie}
                        />

                    )
                })
            } 
            
        </div>    
    )
}

export default MovieList
