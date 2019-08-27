import React, {Component} from 'react';


import './App.css';
import Movie from './Movie';


class MoviesContainer extends Component {

  
    render(){
        console.log(this.state);
      
    const moviesArray=this.props.movies.map(
        movie=>(
            <Movie
            key={movie.id}
            movie={movie}
            toggleFavorite={this.props.toggleFavorite}
            />
        )
    )
  return (
      <div>

          {moviesArray}
      </div>
  )
}}

export default MoviesContainer;
