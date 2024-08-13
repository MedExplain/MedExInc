import React from 'react';
import './index.scss';  
import dogImage from 'assets/images/Max.jpg';

const NotFound = () => {
    return (
        <div className="not-found-container">
        <div className="nfcontainer">
            <img src={dogImage} alt="Dog looking puzzled" />
            <h1>Whoops! This page seems to be lost.</h1>
            <p>Maybe our office dog Max buried it? Either way, the page you're looking for cannot be found.</p>
            <a href="/">Return to homepage</a>
            </div>
        </div>
    );
};

export default NotFound;

