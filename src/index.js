import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import WeatherServices from './services/weather-services';
import { WeatherstoreServiceProvider } from './components/weatherstore-service-context';

import store from './store';

const weatherstoreService = new WeatherServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WeatherstoreServiceProvider value={weatherstoreService}>
                <Router basename="weather-db/build">
                    <App/>
                </Router>
            </WeatherstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);