import React, { useState } from 'react'
export const DatosClima = ({clima}) => {

    const [scale,setscale]=useState("false")

    const handlescale=()=>{
        setscale(!scale)
    }
   
  return (
    <div className='targeta1'>
        <div className='name'>
            <h2>Weather App</h2>
            <h4>{clima?.name}, {clima?.sys.country}</h4>
        </div>

        <div className='datos'>

            <div > <img src={clima ?`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`:""} alt="" /></div>
            <div className='datos1'>
            <b>"{clima?.weather[0].description}"</b>
            <span>Wind Speed<b>  {clima?.wind.speed} m/s</b></span>
            <span>Clouds<b>    {clima?.clouds.all}%</b></span>
            <span>Pressure<b>   {clima?.main.pressure} hPa</b></span>
            </div>

        </div>

        <div className='temp'>
            <b>{scale? <h3>{(clima?.main.temp- 273.15).toFixed(2)} °C</h3>: <h3>{((clima?.main.temp- 273.15)*1.8+32).toFixed(2)} °F</h3> }</b>
            <button onClick={handlescale}> {scale? <h3>Change to °F</h3>: <h3>Change to °C</h3> }</button>
        </div>


    </div>
  )
}
