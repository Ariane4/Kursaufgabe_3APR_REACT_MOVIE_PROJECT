import React from 'react';
import './MovieItem.css'

const stylePgenre = {
    lineHeight: ".5rem",
}

const styleP = {
    lineHeight: "1.2rem",
    fontWeight: "bold"
}

const MovieItem = (props) => {
    return (
        <div className="movie-div">
            <h2>{props.title}</h2>
            <p style={styleP}>{props.year}</p>
            <p style={styleP}>{props.director}</p>
            <p style={styleP}>{props.duration}</p>
            <p style={styleP}>{props.rate}</p>
            <p style={stylePgenre}>{props.genre[0]}</p>
            <p style={stylePgenre}>{props.genre[1]}</p>
            <p style={stylePgenre}>{props.genre[2]}</p>
            <p style={stylePgenre}>{props.genre[3]}</p>
        </div>
    );
}

export default MovieItem;