import React from 'react';
import './weather-list-item.css'

const WeatherListListItem = ({ item }) => {
    const { main: {temp, temp_max, temp_min}, dt_txt} = item;
    return (
        <div className="book-list-item list-group">
            <ul className="list-group">
                <li className="list-group-item">Temp: {temp} C&deg;</li>
                <li className="list-group-item">Max. Temp: {temp_max} C&deg;</li>
                <li className="list-group-item">Min. Temp: {temp_min} C&deg;</li>
                <li className="list-group-item">Date: {dt_txt.substring(0,10)}</li>
            </ul>
        </div>
    )
};

export default WeatherListListItem;
