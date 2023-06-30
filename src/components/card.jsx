import React, { useEffect, useState } from "react";

function Card(props) {

    const apiKey = "9a2f57a94f70ed16f3511c1d48f83e33";

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      // Make an API request to OpenWeather API using the city code

      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${props.city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
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
      background: `url(../images/1.png) no-repeat, ${randomColor}`,

      backgroundSize: 'cover, auto',
    
      borderRadius: '10px',
    };

    const cardBottom = {
      
      backgroundColor: '#303030',
      
      borderRadius: '10px',
    };

    return (
      <div>
        <div className="card weather-card" style={myStyles}>
          <div>
            <div className="container text-center">
              <div className="row mt-5">
                <div className="col-sm-6">
                  <h3>{city}</h3>
                  <h5>{ time }</h5>
                  <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather-icon" />
                  <span>{weatherDescription}</span>
                </div>
                <div className="col-sm-6">
                  <h2>{temperature} &#8451;</h2>
                  <h6>Temp Min: {minTemperature} &#8451;</h6>
                  <h6>Temp Max: {maxTemperature} &#8451;</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body" style={cardBottom}>
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
    );
}

export default Card;

  
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

// That function responsible for change background color
function RandomColor(){

  let colors = [
    "#388EE7",
    "#8B49CC",
    "#3C882C",
    "#C63F3F",
    "#6249CC",
    "#1B127B",
    "#D847DB",
    "#138E78",
    "#FF5733",
    "#66CC99",
    "#E74C3C",
    "#F39C12",
    "#3498DB",
    "#9B59B6",
    "#27AE60",
    "#F1C40F"
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomIndex];

  return randomColor;
}