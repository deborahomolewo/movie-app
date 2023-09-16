import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetail() {
  const {id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=2f3d300c8b20dd64c1d363bb91a7daa0`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();


        setMovie(data);
      
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [movie]);
  

  return (
    <>
      <div className="movie">
      <div className="video">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="backdrop"/>
      </div>
      <div className="videoContent">
        <h1 data-testid="movie-title">{movie.title}</h1>
        <p data-testid="movie-release-date">{movie.release_date}</p>
        <p data-testid="movie-runtime">{movie.runtime}</p>
        <p data-testid="movie-overview">{movie.overview}</p>
      </div>
      </div>
    </>
)
};

export default MovieDetail;
