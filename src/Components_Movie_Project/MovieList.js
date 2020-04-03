// Teil 1 - ohne STATE
//----------------------------------------
// import React from 'react'
// import MovieItem from './MovieItem';
// import movies from './MovieData';
// import './MovieList.css'


// var x = Array.map( "Parameter für jedes Elment im Array z.B. elt oder hier "movie"; bei mehreren mit Klammer 
// => { return ( <MovieItem mit allen darzustellenden Elementen aus Array )
// })

// Methode = Funktion in einem Objekt -> MAP ist ein bestehende Funktion in REACTJS, muss nicht geschrieben werden
//----------------------------------------
// const data = movies.map(x =>
//     <MovieItem title={x.title} year={x.year} director={x.director} duration={x.duration} rate={x.rate} genre={x.genre} key={x} />)

// sfc = stateless Funktion -> immer Abkürzung nutzen, damit Syntax automatisch erstellt wird
//--------------------------------------------
// const MovieList = () => {
//     return (
//         <section className="movie-style">
//             {data}
//         </section>
//     );
// }

// export default MovieList



// Teil 2 - mit STATE + HANDLESORT etc.
//----------------------------------------------
import React, { Component } from "react";
import MovieItem from './MovieItem';
import movies from './MovieData';
import './MovieList.css'

// Class Component -> Abkürzung cc nutzen, um fertige Syntax zu erhalten
//-----------------------------------------

class MovieList extends Component {
    state = {
        movies: movies
    }
    handleSortDateAs = () => {
        const movies = this.state.movies.sort((a, b) => {
            // "this.state.movieDataState" = Array, dadurch können die JS Array Methoden genutzt werden
            let eltA = a.year.toUpperCase()
            let eltB = b.year.toUpperCase()
            if (eltA < eltB) {
                return -1
            } else if (eltA > eltB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ movies })
    }
    //Konstante/Variable "movies" gleich wie STATE "movies" benennen, damit unten "this.setState ({ movies })"
    // ausreicht anstelle von "this.setState ({ movies: movies })"

    //Kürzere Schreibweise für Sortieren
    //---------------------------------------
    handleSortDes = () => {
        const movies = this.state.movies.sort((a, b) => b.year - a.year)
        this.setState({ movies })
    }
    handleSortAZ = () => {
        const movies = this.state.movies.sort((a, b) => {
            let eltA = a.title.toUpperCase()
            let eltB = b.title.toUpperCase()
            if (eltA < eltB) {
                return -1
            } else if (eltA > eltB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ movies })
    }
    render() {
        const data = this.state.movies.map((Element, i) =>
            <MovieItem
                title={Element.title}
                year={Element.year}
                director={Element.director}
                duration={Element.duration}
                rate={Element.rate}
                genre={Element.genre}
                key={i} />)
        return (
            <section>
                <button onClick={this.handleSortDateAs}>Sort by Date Ascending</button>
                <button onClick={this.handleSortDes}>Sort by Date Descending</button>
                <button onClick={this.handleSortAZ}>Sort from A to Z</button>
                <article className="movie-style">{data}</article>
            </section >
        );
    }
}

export default MovieList