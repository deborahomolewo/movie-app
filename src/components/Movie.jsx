import React from "react";
import '../components/Movie.css';
function Movie({movie}) {
    return (
        <a href={movie.id}>
            <div data-testid="movie-card" className="movie">
            <div className="posterImage">
                <img data-testid= "movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
            </div>
            <div className="content">
                <h1 data-testid="movie-title">{movie.original_title}</h1>
                <p data-testid="movie-release-date">{movie.release_date}</p>
            </div>
        </div>
        </a>
    )
};
export default Movie;