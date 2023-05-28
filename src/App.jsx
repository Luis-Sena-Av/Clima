import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { DatosClima } from './Componentes/DatosClima'

function App() {
  const [coords, setcoords] = useState()
  const [clima, setclima] = useState()
  const [mostrar, setmostrar] = useState("undefined")
  

  useEffect(()=>{
    
    const success= pos=>{
      const coordenadas={lat:pos.coords.latitude, lon:pos.coords.longitude }
      setcoords(coordenadas)
     
    }

    const error=err=> {
      console.warn(`ERROR(${err.code}): ${err.message}`);
     
    }
    navigator.geolocation.getCurrentPosition(success,error);

  },[])

  


  useEffect(()=>{
    if(coords){
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=0270b10b74d6de744844699edc1e2d25`
      axios.get(url)
        .then(res=>setclima(res.data))
        .catch(err=>console.log(err))
    } 
    
  },[coords])

  let expresión=Number(clima?.weather[0].id)
  let fondo=""

  switch (true) {

    case expresión>=200 && expresión<300:
      fondo='url(../imagenes/tormenta.jpg)'
    break;
      
    case expresión>=300 && expresión<400:
      fondo='url(../imagenes/llovizna.jpg)'
    break;

    case expresión>=500 && expresión<600:
      fondo='url(../imagenes/lluvia.jpg)'
    break;

    case expresión>=600 && expresión<700:
      fondo='url(../imagenes/nieve.jpg)'
    break;

    case expresión>=700 && expresión<800:
      fondo='url(../imagenes/atmosfera.jpg)'
    break;

    case 800:
      fondo='url(../imagenes/clear-sky.jpg)'
    break;

    case expresión>=801 && expresión<900:
      fondo='url(../imagenes/Clouds.jpg)'
    break;

    default:
       fondo='url(../imagenes/fondo1.png)'
    break;
      
  }



  

  const estilo={
    backgroundImage:fondo,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'100vh'
  }
  


  return (
    
    
    <div className='targeta' style={estilo}>

      {clima? <DatosClima clima={clima}/> : <div className='loading'> <div className='load'></div><h1 className='text'>Loading</h1></div>  }
       
    </div>
      
    
  )
}

export default App
