import React, { Component } from 'react';
import WeatherListListItem from '../weather-list-item';
import { connect } from 'react-redux';
import { compose } from '../../utils'
import { bindActionCreators } from 'redux';

import { withWeatherstoreService } from '../hoc';
import { fetchWeather } from '../../actions';
import './weather-list.css'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeatherList = ({ weather, settings }) => {
    return (
        <div>
            <h2 className="center-block text-center">{weather.city.name}</h2>
        <Slider {...settings} className="weather-list row">
            {
                weather.list.map((item, idx) => {
                    if (idx % 8 === 0)
                    {return (
                        <div className="center-block" key={item.dt}>
                            <WeatherListListItem
                                item={item}/>
                        </div>

                    )}
                    return null
                })
            }
        </Slider>
        </div>
    );
};

class WeatherListContainer extends Component {

    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { weather, loading, error } = this.props;

        if(loading) {
            return <Spinner/>;
        }

        if(error) {
            return <ErrorIndicator />;
        }
        console.log(weather);
        return <WeatherList weather={weather} settings={settings}/>
    }
}

const mapStateToProps = ({ weather, loading, error }) => {
    return { weather, loading, error };
};

const mapDispatchToProps = (dispatch, { weatherstoreService }) => {
    return bindActionCreators({
        fetchWeather: fetchWeather(weatherstoreService)
    }, dispatch)
};

export default compose(
    withWeatherstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(WeatherListContainer);