import React from 'react';
import { Link } from 'react-router-dom';
import './weather-header.css';

const WeatherHeader = () => {
    return (
        <header className="weather-header row">
            <Link to="/">
                <div className="logo text-dark">Weather-db</div>
            </Link>
        </header>
    );
};

export default WeatherHeader;