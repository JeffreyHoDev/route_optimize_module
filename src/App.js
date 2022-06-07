import './App.css'
import { useEffect, useState } from 'react'
import MapContainer from './Map'
import { key } from './constant'
import ImportScript from './ImportScript.util'

const App = () => {

  
  const [google, setGoogle] = useState(null)
  ImportScript(`https://maps.googleapis.com/maps/api/js?key=${key}`, setGoogle)

  const initMap = (google) => {
    // The location of Uluru
    console.log(google)
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  useEffect(() => {
    
    initMap(window.google)
  },[])

  return (
    <div className="App">
      
    </div>
  )
}

export default App