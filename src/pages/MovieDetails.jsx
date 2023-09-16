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
  
  const releaseDate = new Date(movie.release_date);
  const utcYear = releaseDate.getUTCFullYear();
  const utcMonth = (releaseDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const utcDay = releaseDate.getUTCDate().toString().padStart(2, '0');
  const utcHours = releaseDate.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = releaseDate.getUTCMinutes().toString().padStart(2, '0');

  const utcDateString = `${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes} UTC`;


  return (
    <>
      <div className="movie">
      <div className="video">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="backdrop"/>
      </div>
      <div className="videoContent">
        <h1 data-testid="movie-title">{movie.original_title}</h1>
        <p data-testid="movie-release-date">{utcDateString}</p>
        <p data-testid="movie-runtime">{movie.runtime} minutes</p>
        <p data-testid="movie-overview">{movie.overview}</p>
      </div>
      </div>
    </>
)
};

export default MovieDetail;
