import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import MapboxGL, { Camera } from '@rnmapbox/maps';
import { useQuery } from '@tanstack/react-query';
import { kml } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import RoadMarker from './svg/RoadMarker';
import TouchableMarker from './TouchableMarker';
import { LoadingIndicator } from './Utils/LoadingIndicator';

void MapboxGL.setAccessToken('sk.eyJ1Ijoia2VseGV0eSIsImEiOiJjbGV6MG5tcjUwYWg3M3JzMmRmZ2JvM2R5In0.g8AVLvmX3m8RJs8zO_xB_g');

const MapOfProject = () => {
  const camera = useRef<Camera>(null);
  const [coordinates, setCoordinates] = useState([119.164026, 10.151691]);
  const [zoom] = useState(12);
  const [startProjectCoordinates, setStartProjectCoordinates] = useState([119.164026, 10.151691]);
  const [endProjectCoordinates, setEndProjectCoordinates] = useState([119.164026, 10.151691]);

  const fetchKml = async () => {
    const response = await fetch('https://raw.githubusercontent.com/Kelxety/pms-app/main/assets/GIS/6ft5nGpSnn.kml');
    const text = await response.text();
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    const geojson = kml(htmlDoc);
    let arr1 = geojson?.features[0]?.geometry?.coordinates[0];
    let arr2 = geojson?.features[0]?.geometry?.coordinates[geojson?.features[0]?.geometry?.coordinates?.length - 1];
    arr1.pop();
    arr2.pop();
    setCoordinates(arr1)
    setStartProjectCoordinates(arr1);
    setEndProjectCoordinates(arr2);
    return geojson;
  }

  const { data, isError, isLoading } = useQuery(['kmlData'], fetchKml);

  if (isError) return <View><Text>Error</Text></View>;
  if (isLoading) return <View className='h-screen w-screen justify-center items-center'><LoadingIndicator/></View>;

  
  return (
    <View className='w-full'>
      <View className='h-[500px] w-full'>
        <MapboxGL.MapView
          styleURL='mapbox://styles/kelxety/clezeekfy000301qh0a1fk4mo'
          compassEnabled={true}
          scrollEnabled={true}
          attributionEnabled={false}
          logoEnabled={false} className='h-[500px] w-screen z-0 '
        >
          <MapboxGL.Camera
            ref={camera}
            followZoomLevel={zoom}
            zoomLevel={zoom}
            centerCoordinate={coordinates}
            followHeading={1}
            defaultSettings={{centerCoordinate: coordinates, zoomLevel: 3}}
          />
          <MapboxGL.PointAnnotation id="start" coordinate={startProjectCoordinates}>
            <View className='items-center w-[60px] h-[70px] bg-black/0 flex'>
              <RoadMarker />
            </View>
          </MapboxGL.PointAnnotation>
          <MapboxGL.PointAnnotation id="end" coordinate={endProjectCoordinates}>
            <View>
              <RoadMarker />
            </View>
          </MapboxGL.PointAnnotation>
        
          <MapboxGL.ShapeSource id="source" shape={data} onPress={() => {
            setCoordinates([117.125322, 7.962410])
          }}>
            <MapboxGL.LineLayer
              id='line'
              style={{ lineColor: 'red', lineWidth: 5 }}
              ></MapboxGL.LineLayer>
            </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    </View>
  )
}

export default MapOfProject