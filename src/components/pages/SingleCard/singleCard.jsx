import React, { useEffect, useState } from "react";

import { convertKelvinToCelsius } from '../../../services/Functions';

import { timeFormate } from '../../../services/Functions';

import { RandomColor } from '../../../services/Functions';

import { fetchWeatherData } from '../../../services/ApiHandler';

import { Link } from 'react-router-dom';

function SingleCard(props) {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

        fetchWeatherData(props.cityCode)
            .then(weatherData => {
                setWeatherData(weatherData);
            });
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const city = weatherData.name;

    const temperature = convertKelvinToCelsius(weatherData.main.temp);

    const minTemperature = convertKelvinToCelsius(weatherData.main.temp_min);

    const maxTemperature = convertKelvinToCelsius(weatherData.main.temp_max);

    const pressure = weatherData.main.pressure;

    const humidity = weatherData.main.humidity;

    const visibility = weatherData.visibility;

    const windSpeed = weatherData.wind.speed;

    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();

    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

    const weatherDescription = weatherData.weather[0].description;

    const weatherIcon = weatherData.weather[0].icon;

    const time = timeFormate();

    const randomColor = RandomColor();

    // add custom css scripts
    const myStyles = {
        background: `url(../../../../../images/1.png) no-repeat, ${randomColor}`,
    };

    return (

        <div>
            <div id="cards" className="d-flex justify-content-center">

                <div className="" id="weather-container">

                    <div>

                        <div className="card weather-card" style={myStyles}>

                            <Link to={`/`} className="links"><i class="bi bi-arrow-left back-icon px-2"></i></Link>

                            <div>
                                <div className="container text-center">
                                    <div className="row mt-5">
                                        <div className="col-sm-6">
                                            <h3>{city}</h3>
                                            <h5>{time}</h5>
                                            <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather-icon" />
                                            <h6>{weatherDescription}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h2>{temperature} &#8451;</h2>
                                            <h6>Temp Min: {minTemperature} &#8451;</h6>
                                            <h6>Temp Max: {maxTemperature} &#8451;</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col-sm-4 border-end">
                                            <h6>Pressure: {pressure} Hpa</h6>
                                            <h6>Humidity: {humidity}%</h6>
                                            <h6>Visibility: {visibility}Km</h6>
                                        </div>
                                        <div className="col-sm-4 border-end">
                                            <i className="bi bi-arrow-up-right-circle-fill"></i>
                                            <h5>Wind: {windSpeed} m/s</h5>
                                        </div>
                                        <div className="col-sm-4">
                                            <h6>Sunrise: {sunrise}</h6>
                                            <h6>Sunset: {sunset}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default SingleCard;