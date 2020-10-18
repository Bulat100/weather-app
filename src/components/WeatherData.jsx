import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

const WeatherData = ({ city }) => {
  const [weather, setWeather] = useState({});
  const [cityName, setCity] = useState('');
  const [windData, setWindData] = useState({});
  const [mainData, setMainData] = useState({});
  useEffect(() => {
    const apiCall = async () => {
      const apiKey = '067d1fa954e709912d4028017f0e9973';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
      const request = axios.get(url);
      const response = await request;
      const allWeatherData = response.data;
      setWeather(allWeatherData.weather[0]);
      setCity(allWeatherData.name);
      setWindData(allWeatherData.wind);
      setMainData(allWeatherData.main);
    };
    apiCall();
  }, [city]);

  return (
    <div className="WeatherDisplay">
      <WeatherDisplay
        windData={windData}
        weather={weather}
        mainData={mainData}
        cityName={cityName}
      />
    </div>
  );
};
export default WeatherData;
