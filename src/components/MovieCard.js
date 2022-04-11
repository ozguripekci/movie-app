

import React from 'react'
import MovieCardStyle from './MovieCardStyle.css'

const API_KEY = " "


const MovieCard = () => {


    const data_url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

    const getData = async() => {
        if (query) {
            const result = await axios.get(url)
        }
    }



  return (


    <div className="container">
        <h5 style={{backgroundColor: 'red'}}>MovieCard is working</h5>
        <div className="search">
            <input className="text" type="text" placeholder="Search a movie" />
        </div>


        
        
        
    </div>
    
  )
}

export default MovieCard