import React, { useState } from 'react'
export const DatosClima = ({clima}) => {

    const [scale,setscale]=useState("false")

    const handlescale=()=>{
        setscale(!scale)
    }

    function comienza_mayus(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
   
    


  return (
    <div className='targeta1'>
        <div className='name'>
            <h2 className='title'>Weather App</h2>
            <h4 className='subtitle'>{clima?.name}, {clima?.sys.country}</h4>
        </div>

        <div className='datos'>

            <div className='datos_img'> <img src={clima ?`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`:""} alt="" /></div>
            <div className='datos1'>
            <b>❝ {comienza_mayus(clima?.weather[0].description)} ❞</b>
            <span>Wind Speed <b>{((clima?.wind.speed)*3.6).toFixed(1)} km/h</b></span>
            <span>Clouds<b>{clima?.clouds.all}%</b></span>
            <span>Pressure<b> {clima?.main.pressure} hPa</b></span>
            </div>

        </div>

        <div className='temp'>
            <b>{scale? <h3>{(clima?.main.temp- 273.15).toFixed(1)} °C</h3>: <h3>{((clima?.main.temp- 273.15)*1.8+32).toFixed(1)} °F</h3> }</b>
            <button onClick={handlescale}> {scale? <h3>Change to °F</h3>: <h3>Change to °C</h3> }</button>
        </div>


    </div>
  )
}
