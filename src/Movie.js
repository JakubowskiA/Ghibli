import React, {Component} from 'react';

import './App.css';


class Movie extends Component {
  render(){
      console.log(this.props);
      
  return (
      <div>
        <br></br>
          <h2>{this.props.movie.title}</h2>
          <h3>{this.props.movie.release_date}</h3>
          <h3>{this.props.movie.description}</h3>
          <button onClick={()=>this.props.toggleFavorite(this.props.movie)}>Toggle favorite</button>
            <br></br>
      </div>
  )
}}

export default Movie;
