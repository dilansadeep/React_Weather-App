import React from "react";

function Card(props) {

    console.log(convertKelvinToCelsius(300));
    
    return (
        <div>
            <div class="card weather-card">
                <div>
                    <div class="container text-center">
                        <div class="row mt-5">
                            <div class="col-sm-6">
                                <h3>Colombo, Sri Lanka</h3>
                                <h5>Time</h5>
                                <img src="" alt="weather-icon"/>
                                    <span>Rain</span>

                            </div>
                            <div class="col-sm-6">
                                <h2>80K &#8451;</h2>
                                <h6>Temp Min : 50K</h6>
                                <h6>Temp Max : 60K &#8451;</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-sm-4 border-end">
                                <h6>Pressure: 120 Hpa</h6>
                                <h6>Humidity: 80%</h6>
                                <h6>Visibility: 4.2Km</h6>
                            </div>
                            <div class="col-sm-4 border-end">
                                <i class="bi bi-arrow-up-right-circle-fill"></i>
                                <h5>Wind: 3.4 m/s</h5>
                            </div>
                            <div class="col-sm-4">
                                <h6>Sunrise: 5.20 a.m</h6>
                                <h6>Sunset: 6.30 p.m</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

// FetchWeather data function fetch weather data from openweather API
function fetchWeatherData(cityCode) {

    const apiKey = "9a2f57a94f70ed16f3511c1d48f83e33";

    const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityCode}&appid=${apiKey}`;

    return fetch(url)
        .then(response => {

            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Request failed with status code ${response.status}.`);
            }
        })
        .catch(error => {
            console.log(`An error occurred: ${error}`);
        });
}

// Helper function to convert temperature from Kelvin to Celsius

function convertKelvinToCelsius(kelvin) {

    return Math.round(kelvin - 273.15);

}

// Helper function to convert UNIX timestamp to time string

function getTimeString(timestamp) {
    const date = new Date(timestamp * 1000);

    const hours = date.getHours().toString().padStart(2, "0");

    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
}


// that function responsible for format time and date
function timeFormate() {

    // Get the current date and time
    const currentDate = new Date();

    // Get the month name
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentDate.getMonth()];

    // Get the date
    const date = currentDate.getDate();

    // Get the current time
    const hours = currentDate.getHours().toString().padStart(2, '0');

    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    // Format the current time as a string
    const currentTime = `${hours}:${minutes}`;

    const data = currentTime + ", " + monthName + " " + date;

    return data;
}