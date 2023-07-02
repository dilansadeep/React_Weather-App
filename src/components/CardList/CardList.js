import React, { useEffect, useState } from "react";
import { Card } from "../";
import cities from "../../constants/cities.json";
import { fetchWeatherData } from "../../services/ApiHandler";

const CardList = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const cityCodes = cities.List.map((city) => city.CityCode);
      try {
        const weatherData = await fetchWeatherData(cityCodes);
        setWeatherData(weatherData?.list);
      } catch (error) {
        console.error(error);
      }
    };
    cities?.List?.length !== 0 && getWeatherData();
  }, []);

  const showCardList = () => (
    <div id="cards" className="container mt-5 my-3">
      <div className="row row-cols-1 row-cols-md-2 g-4" id="weather-container">
        {weatherData.map((cityData) => (
          <Card key={cityData?.id} {...cityData} />
        ))}
      </div>
    </div>
  );

  return weatherData ? showCardList() : <div>Loading...</div>;
};

export default CardList;
