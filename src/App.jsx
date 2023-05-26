import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { DatosClima } from './Componentes/DatosClima'

function App() {
  const [coords, setcoords] = useState()
  const [clima, setclima] = useState()

  

  useEffect(()=>{
    const success= pos=>{
      const coordenadas={lat:pos.coords.latitude, lon:pos.coords.longitude }
      setcoords(coordenadas)
    }
    navigator.geolocation.getCurrentPosition(success);

  },[])

  

  useEffect(()=>{
    if(coords){
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=0270b10b74d6de744844699edc1e2d25`
      axios.get(url)
        .then(res=>setclima(res.data))
        .catch(err=>console.log(err))
    } 
    
  },[coords])

  // const estilo={
  //   backgroundImage:'public\imagenes\despejado.jpg'
  // }

  return (
    
    
    <div className='targeta' >
      <DatosClima clima={clima}/>
     
    </div>
      
    
  )
}

export default App
