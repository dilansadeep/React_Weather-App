import React from "react";
import { Link } from "react-router-dom";
import { timeFormate, randomColor } from "../../utils/helper";

const Card = (props) => {
  const {
    id,
    name,
    visibility,
    main: { temp, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { sunrise, sunset },
    weather: [{ description, icon }],
  } = props;

  const showWeatherData = () => {
    return (
      <Link to={`/city/${id}`} className="links">
        <div>
          <div
            className="card weather-card"
            style={{
              background: `url(../../../images/1.png) no-repeat, ${randomColor()}`,
            }}
          >
            <div>
              <div className="container text-center">
                <div className="row mt-5">
                  <div className="col-sm-6">
                    <h3>{name}</h3>
                    <h5>{timeFormate()}</h5>
                    <img
                      src={`http://openweathermap.org/img/w/${icon}.png`}
                      alt="weather-icon"
                    />
                    <span>{description}</span>
                  </div>
                  <div className="col-sm-6">
                    <h2>{Math.round(temp)} &#8451;</h2>
                    <h6>{`Temp Min: ${Math.round(temp_min)}`}&#8451;</h6>
                    <h6>{`Temp Max: ${Math.round(temp_max)}`}&#8451;</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-sm-4 border-end">
                    <h6>{`Pressure: ${pressure} Hpa`}</h6>
                    <h6>{`Humidity: ${humidity}%`}</h6>
                    <h6>{`Visibility: ${visibility}Km`}</h6>
                  </div>
                  <div className="col-sm-4 border-end">
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                    <h5>{`Wind: ${speed} m/s`}</h5>
                  </div>
                  <div className="col-sm-4">
                    <h6>{`Sunrise: ${new Date(sunrise * 1000).toLocaleTimeString()}`}</h6>
                    <h6>{`Sunset: ${new Date(sunset * 1000).toLocaleTimeString()}`}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return showWeatherData();
};

export default Card;
