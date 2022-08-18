import GoogleMapReact from 'google-map-react';
import DropPin from './DropPin';
import { googleKey } from '../api/googleAPIConfig'

const Map = ({ latitude, longitude }:any) => {
    const mapProps = {
        center: {
          lat: Number(latitude),
          lng: Number(longitude)
        },
        zoom: 13
      }
  return (
    <div style={{ height: '40vh', width: '100%', paddingLeft: 15, paddingRight: 15, marginBottom: 20}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: googleKey }}
      center={mapProps.center}
      defaultZoom={mapProps.zoom}
    >
      <DropPin lat={latitude} lng={longitude}></DropPin>
    </GoogleMapReact>
  </div >
  )
}

export default Map
