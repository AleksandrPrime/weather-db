import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import WeatherHeader from '../weather-header';
import HomePage from '../pages/home-page';

const App = () => {
    return (
        <main role="main" className="container">
            <WeatherHeader />
            <Switch>
                <Route path="/"
                component={HomePage}
                exact/>
            </Switch>
        </main>
    )
};

export default App;