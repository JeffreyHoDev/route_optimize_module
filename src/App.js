import './App.css'
import { useEffect, useState } from 'react'

import GoogleMapContainer from './GoogleMapReact'



const App = () => {

  const defaultProps = {
    center: {lat: 1.290270, lng: 103.851959}, 
    zoom: 10
  }

  const { center, zoom } = defaultProps

  return (
    <div className="App">

      <GoogleMapContainer center={center} zoom={zoom} />
      <div className='inputs-container'>
        <div className='checkbox-container'>
          <div className='checkbox-detail-container'>
            <input type="checkbox" name="Boon Lay" value="Boon Lay" />
            <label htmlFor='Boon Lay'>Boon Lay</label>
          </div>
          <div className='checkbox-detail-container'>
            <input type="checkbox" name="Seletar Mall" value="Seletar Mall" />
            <label htmlFor='Seletar Mall'>Seletar Mall</label>
          </div>
        </div>
        <div className='other-inputs-container'>
          <div className='origin-input'>
            <label htmlFor='origin'>Origin: </label>
            <input type="text" name="origin" />
          </div>
          <div className='destination-input'>
            <label htmlFor='destination'>Destination: </label>
            <input type="text" name="destination" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App