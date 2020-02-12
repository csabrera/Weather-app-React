import React from 'react'

const WeatherExtraInfo = ({ humidity, wind }) => (
  <di>
    <span>{` ${humidity} % - `}</span>
    <span>{` ${wind} Viento `}</span>
  </di>
);

export default WeatherExtraInfo;