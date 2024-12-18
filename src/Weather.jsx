
import useFetch from './useFetch'
import React from 'react'
import './weather.css'


function Weather() {
const weather1 = useFetch('https://api.openweathermap.org/data/2.5/weather?q=PALAKKAD&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric')

console.log(weather1);
  return (
    <div id='back'><br /><br /><br />
      {
        weather1 && (
          <div className='centerdiv'><br /><br />
      
      <div className='maindiv'>
      <h2>Todays Weather Details!!</h2><br />
      <h1>{weather1.main.temp + "\u00B0C"}</h1>
      <h4><img src="" alt="" /><i class="fa-solid fa-temperature-full"></i> {"Feels like " + weather1.main.feels_like + "\u00B0C"}</h4><br />
      </div>
      <div className='misc'>
      <h3><img src="" alt="" /><i class="fa-solid fa-location-dot"></i> {"Place:" + weather1.name}</h3><br />
      <h3><img src="" alt="" /><i class="fa-regular fa-flag"></i> {"Country:" + weather1.sys.country}</h3><br />
      <h3><img src="" alt="" /><i class="fa-solid fa-cloud"></i> { weather1.weather[0].description  }</h3><br />
      <h3><img src="" alt="" /><i class="fa-solid fa-droplet"></i> {"Humidity:" + weather1.main.humidity + "%"}</h3><br />
      <h3><img src="" alt="" /><i class="fa-solid fa-wind" ></i> {"Wind Speed:" + weather1.wind.speed + "km/h"}</h3><br />
      <h3>{"Pressure:" + weather1.main.pressure + "hPa"}</h3><br /></div>
      </div>
     
   
      )
      }  
  
      




<br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Weather


