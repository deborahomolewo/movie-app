import React from 'react';
import Nav from '../components/Nav.jsx';
import Banner from '../components/Banner.jsx';
import MovieList from '../components/MovieList.jsx';
import Footer from '../components/Footer.jsx';
import { useState, useEffect } from 'react';
import './home.css';


function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {

        let apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=2f3d300c8b20dd64c1d363bb91a7daa0&language=en-US`;
        if(search !==""){
          apiUrl = `https://api.themoviedb.org/3/search/movie?query=${search}&page=1&api_key=2f3d300c8b20dd64c1d363bb91a7daa0&language=en-US`;
        }
        console.log(search);
        const response =  await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const slicedArray = data.results.slice(0, 10);
          setMovies(slicedArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [search])


  return (
    <div>
    <div className='overview'>
    <Nav   setSearch={setSearch}/>,
    <Banner/>
    </div>
    <div>
    <MovieList  movies={movies}/>
    <Footer/>
    </div>


    </div>
  );
}

export default Home;
