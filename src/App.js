import './App.css'
import { useEffect, useState } from 'react'

import GoogleMapContainer from './GoogleMapReact'



const App = () => {

  const defaultProps = {
    center: {lat: 1.290270, lng: 103.851959}, 
    zoom: 12
  }

  const { center, zoom } = defaultProps

  return (
    <div className="App">

      <GoogleMapContainer center={center} zoom={zoom} />

    </div>
  )
}

export default App