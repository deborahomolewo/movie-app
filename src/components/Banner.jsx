import React from "react";
import '../components/Banner.css'
function Banner({}) {
    return(
        <div className="banner"> 
        <h1>John Wick 3 : Parabellum</h1>
        <div className="logo">
            <img src="../images/IMDB.svg" alt="imdb logo" />
            <img src="../images/Rotten Tomatoes.svg" alt="rotten tomatoes" />
        </div>
        <p className="details">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <img className="button" src="../images/Button.svg" alt="Button" />
        </div>

    )
}

export default Banner;