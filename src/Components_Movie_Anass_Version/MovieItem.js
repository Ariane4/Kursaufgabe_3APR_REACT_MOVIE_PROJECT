import React from 'react';
import './movieitem.css'
const MovieItem = (props) => {
    console.log(props)
    return (
        <article>
            <h3>{props.movie.title}</h3>
            <h3>{props.movie.year}</h3>
            <h3>{props.movie.director}</h3>
            <h3>{props.movie.duration}</h3>
            <h3>{props.movie.rate}</h3>
            <ul>
                {props.movie.genre.map((genre, i) => {
                    return <li>{genre}</li>
                })}
            </ul>
        </article>
    );
}

export default MovieItem;