import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
}

const center = {
  lat: -36.848,
  lng: 174.764,
}

const markers = [
  {
    lat: -36.848,
    lng: 174.764,
  },
  {
    lat: -36.868,
    lng: 174.744,
  },
  {
    lat: -36.828,
    lng: 174.798,
  },
  {
    lat: -36.788,
    lng: 174.718,
  },
  {
    lat: -36.883,
    lng: 174.789,
  },
  {
    lat: -36.898,
    lng: 174.714,
  },
  {
    lat: -36.87,
    lng: 174.62,
  },
  {
    lat: -36.89,
    lng: 174.65,
  },
  {
    lat: -36.86,
    lng: 174.86,
  },
  {
    lat: -36.93,
    lng: 174.84,
  },
]

function MyComponent({ zoom }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDrIYNCFAmYmOAqcX7BlEPJginT9n9uU1c',
  })

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {markers.map((marker, index) => {
        return <Marker position={marker} key={index} />
      })}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
