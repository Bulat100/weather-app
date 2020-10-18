/* eslint-disable camelcase */
import React from 'react';
import { capitalize } from 'lodash';

const WeatherDisplay = ({
  windData, weather, mainData, cityName,
}) => {
  const { speed } = windData;
  const { description, icon } = weather;
  const { temp, pressure, feels_like } = mainData;
  // feels_like is not in camelcase because, it is destructuring assignment from response
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const capitalizedDescription = capitalize(description);
  return (
    <div className="weatherDisplay">
      <h3>
        Город:
        {' '}
        {cityName}
      </h3>
      <p>
        {capitalizedDescription}
        <img src={iconUrl} alt={description} />
        {' '}
      </p>
      <p>
        Температура:
        {' '}
        {temp}
        {' '}
        C&deg;
      </p>
      <p>
        Ощущается как:
        {' '}
        {feels_like}
        {' '}
        C&deg;
      </p>
      <p>
        Скорость ветра:
        {' '}
        {speed}
        {' '}
        м/c
      </p>
      <p>
        Давление:
        {' '}
        {pressure}
        {' '}
        Гпа
      </p>
    </div>
  );
};
export default WeatherDisplay;
