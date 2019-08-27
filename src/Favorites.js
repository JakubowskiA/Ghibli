import React from 'react';

const Favorites = (props) =>{
    console.log("fav",props.favorites)
    const favArray = props.favorites.map(movie=>
        <li>{movie.title}</li>)
    console.log(favArray)
    
    return(
        <div>
            <h1>Favorites</h1>
            <ul>
            {favArray}
            </ul>

        </div>
    )
}

export default Favorites