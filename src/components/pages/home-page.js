import React from 'react';
import WeatherList from '../weather-list';
import InputForm from '../input-form';

const HomePage = () => {
    return (
        <div>
            <InputForm />
            <WeatherList />
        </div>
    )
};

export default HomePage;