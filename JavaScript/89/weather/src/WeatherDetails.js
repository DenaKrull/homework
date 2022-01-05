import React from 'react'

export default function WeatherDetails(props) {
  const { city,weather, icon, temp } = props;


  return (

    <div className="container-fluid">
      <div className="text-center">
       
        <p>The weather in {city} is currently</p>
         <h1>{temp}</h1>
         <br />
        <h2>{weather}</h2>
        <img src={icon} alt='' />
        
      </div>
    </div>
  )
}

async function getWeatherApi(zip) {
  const appId = '79f211f07776dd32c7db070614df9b06';
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${appId}&units=imperial`);
    if (!data.ok) {
      throw new Error(`${data.status} ${data.statusText}`);
    }
    const result = await data.json();
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);

  }
}

export async function getCity(zip){
const data = await getWeatherApi(zip);
return `${data.name}`;
}

export async function getWeather(zip) {
  const data = await getWeatherApi(zip);
  return `${data.weather[0].description}`;
}

export async function getIcon(zip) {
  const data = await getWeatherApi(zip);
  return `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

export async function getTemp(zip) {
  const data = await getWeatherApi(zip);
  const temp =  `${data.main.temp}`;
  const hi = `${data.main.temp_max}`;
  const lo = `${data.main.temp_min}`;

  return `${temp}°F `;
}
