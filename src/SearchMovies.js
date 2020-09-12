import React, { useState } from 'react';
import MovieCard from './movieCard';

export default function SearchMovies() {

    //states- input query, movies
    const [query, setQuery] = useState('Phir Hera Pheri');
    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => {
        e.preventDefault();
        // const query = "Jurassic";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=d05da64ff3948e934f154e79f003dc06&query=${query}&page=1&include_adult=false`;

        try {

            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"></label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder="Phir Hera Pheri.."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )

}
// d05da64ff3948e934f154e79f003dc06