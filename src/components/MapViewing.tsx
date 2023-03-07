import { View, Text } from 'react-native'
import React from 'react'


type Markers = {
  latLng: number[],
  iconSize?: {
    width: number,
    height: number,
  },
  icon?: string,
  title?: string,
  disabled?: boolean,
}

type TileOptions = {
  noWrap?: boolean,
  detectRetina?: boolean,
}

type Layers = {
  name: string,
  src: string,
  tileOptions?: TileOptions,
}

const MapViewing = () => {

  const markerList: Markers[] = [
    {
      latLng: [-38.31571580761326, -23.735463483398522],
      iconSize: {
        width: 25,
        height: 25,
      },
      icon: './src/assets/mapPin.png',
      title: 'Title 1',
      disabled: true,
    },
    {
      latLng: [-58.31571543253336, -43.535453281293517],
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
      src: 'https://cdn.myIndoorMap.com/maps/0faebe50-19e5-4445-9177-a09903973304/rev0/{z}/{x}/{-y}.png',
      tileOptions: options,
    },
    {
      name: 'Floor 2',
      src: 'https://cdn.myIndoorMap.com/maps/71b328d0-d85a-43a9-87ca-bf7c145d145b/rev0/{z}/{x}/{-y}.png',
      tileOptions: options,
    },
  ]


  return (
    // <Leaflet
    //   mapLayers={mapLayers}
    //   minZoom={1}
    //   zoom={2}
    //   maxZoom={6}
    //   flyTo={{
    //     latLng: [-38.31571580761326, -23.735463483398522],
    //     zoom: 5,
    //   }}
    //   markers={markerList}
    //   backgroundColor="green"
    // />
    <View></View>
  )
}

export default MapViewing