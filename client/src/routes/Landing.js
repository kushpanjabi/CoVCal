import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
        <div>
        <section className="body-landing">
        <main role="main">
            <header role="banner" className="banner-photo">
                <h1>CovCal Los Angeles</h1>
            </header>
            <section>
            <h3>Find a testing site, see reviews and other experiences, and leave your own review!</h3><br/>
            <p>By sharing the locations and experiences of testing sites, we can encourage more Angelenos to get tested and keep LA safer.</p>
            </section>

            <section>
            <button className="enter-btn"><Link className="link-text" to ='/home'>Start</Link></button>
            </section>
        </main>
        <footer className="bg-dark"><p>©2020 KP Labs, Inc.</p></footer>
        </section>
        </div>
    </div>
  );
};

export default Landing;