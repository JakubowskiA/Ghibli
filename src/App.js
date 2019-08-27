import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MovieForm from './MovieForm';
import MoviesContainer from './MoviesContainer';
import Favorites from './Favorites';
import { Search } from 'semantic-ui-react'

class App extends Component {
  state={
    movies:[],
    favorites:[],
    searchInput:""
  }
  onSearchChange=event=>{
    this.setState({searchInput:event.target.value})
  }

  handleSubmit=newMovie=>{
    this.setState({movies:[...this.state.movies, newMovie]})
    // const title = this.state.title
    // const year = this.state.year
    // const description = this.state.description  

}


  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res=>res.json())
    .then(movies=>this.setState({movies}))
  }

  toggleFavorite=(movie)=>{
    // console.log('m',movie);
    
    if(!this.state.favorites.includes(movie)){
    this.setState({favorites:[...this.state.favorites, movie]})}
    else{this.setState({favorites:this.state.favorites.filter(movieInst=>movieInst.name !== movie.name)})}
  }
  
  
  render(){
    // console.log(this.state.movies)
    const targetMovies = this.state.movies.filter(movie=>movie.title.includes(this.state.searchInput))

  return (
    <div>
      <Header />
      <Search onSearchChange={this.onSearchChange} showNoResults={false} />
      <MoviesContainer movies={targetMovies} toggleFavorite={this.toggleFavorite}/>
      <br/><br/>
      <Favorites favorites={this.state.favorites}/>
      <br/><br/>
      <MovieForm handleSubmit={this.handleSubmit}/>
    </div>
  )
}}

export default App;
