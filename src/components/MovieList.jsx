import React from "react";
import Movie from '../components/Movie';
import '../components/MovieList.css';


function MovieList({movies}) { 
    return (
        <>
            <div className="movieList">
                <h1>Featured Movie</h1>
                <img src="../images/See more.svg" alt="see more" />
            </div>
            <div className="movies">
                {movies.map((movie) => (
                        <Movie movie={movie} />
                    ))}
            </div>
        </>
    )
};
export default MovieList;