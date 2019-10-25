
const reducer = (state, action) => {
    if (state === undefined) {
        return {
            weather: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type){
        case 'FETCH_WEATHER_REQUEST':
            return {
                weather: [],
                loading: true,
                error: null
            };
        case 'FETCH_WEATHER_SUCCESS':
            return {
                weather: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_WEATHER_FAILURE':
            return {
                weather: [],
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer;