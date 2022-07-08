import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

export const WeatherContextProvider = props => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const showWeather = weather => setWeatherInfo([...setWeatherInfo, weather]);

  return (
    <WeatherContext.Provider value={{ weatherInfo, setWeatherInfo }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
