const weatherLoaded = (newWeather) => {
    return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload: newWeather
    };
};

const weatherRequested = () => {
    return {
        type: 'FETCH_WEATHER_REQUEST'
    }
};

const weatherError = (error) => {
    return {
        type: 'FETCH_WEATHER_FAILURE',
        payload: error
    }
};



const fetchWeather = (bookstoreService) => (city) => (dispatch) => {
    dispatch(weatherRequested());
    bookstoreService.weatherBalloon(city)
        .then((data) => dispatch(weatherLoaded(data)))
        .catch((err) => dispatch(weatherError(err)));
};

export {
    fetchWeather,
}