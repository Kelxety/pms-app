import React from 'react'
import Leaflet, { Layers, Markers, TileOptions } from 'react-native-leaflet-ts'

const SmallMapView = () => {

  const markerList: Markers[] = [
    {
      latLng: [9.157970, 118.116038],
      iconSize: {
        width: 25,
        height: 25,
      },
      icon: './src/assets/mapPin.png',
      title: 'Title 1',
      disabled: true,
    },
    {
      latLng: [9.157970, 118.116038],
      iconSize: {
        width: 25,
        height: 25,
      },
      title: 'Title 2',
    },
  ];
  
  const options: TileOptions = {
    noWrap: true,
    detectRetina: true,
  };
  
  const mapLayers: Layers[] = [
    {
      name: 'Floor 1',
      src: 'https://server.arcgisonline.com/ArcGIS/rest/services/{variant}/MapServer/tile/{z}/{y}/{x}',
      tileOptions: options,
    },
  ];

  return (
    <Leaflet
      mapLayers={mapLayers}
      minZoom={1}
      zoom={2}
      maxZoom={6}
      flyTo={{
        latLng: [9.781600, 118.690592],
        zoom: 7,
      }}
      markers={markerList}
    />
)
}

export default SmallMapView