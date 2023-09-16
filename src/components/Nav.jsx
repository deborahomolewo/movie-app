import React, { useRef } from "react";
import "../components/Nav.css";

function Nav({ setSearch }) {
  const searchMovies = async (title) => {
    setSearch(title);
    
  };

  const inputRef = useRef(null);
  return (
    <nav>
      <img src="/images/Logo.svg" alt="logo" />
      <div className="search">
        <input
          placeholder="What do you want to watch?"
          ref={inputRef}
          onChange={(e) => searchMovies(e.target.value)}
        />
        <img
          src="/images/search.svg"
          alt="search"
          onClick={() => searchMovies(inputRef.current.value)}
        />
      </div>
      <div className="signIn">
        <h4>Sign in</h4>
        <img src="/images/Menu.svg" alt="Menu" />
      </div>
    </nav>
  );

}

export default Nav;
