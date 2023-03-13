import React, { useEffect, useRef, useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapboxGL, {Camera} from '@rnmapbox/maps';
import RoadMarker from './svg/RoadMarker';
import { kml } from '@tmcw/togeojson';
import { useQuery } from '@tanstack/react-query';
import { DOMParser } from '@xmldom/xmldom';

type LocationT = {
  name: string, coord: number[],
}

void MapboxGL.setAccessToken('sk.eyJ1Ijoia2VseGV0eSIsImEiOiJjbGV6MG5tcjUwYWg3M3JzMmRmZ2JvM2R5In0.g8AVLvmX3m8RJs8zO_xB_g')



const Mapviewing = () => {
 
  const camera = useRef<Camera>(null);
  const [coordinates, setCoordinates] = useState([119.164026, 10.151691]);
  const [zoom, setZoom] = useState(5.9)
  const [defaulCoordinates] = useState([119.164026, 10.151691])

  const fetchKml = async () => {
    const response = await fetch('https://raw.githubusercontent.com/Kelxety/pms-app/main/assets/GIS/6ft5nGpSnn.kml');
    const text = await response.text();
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    const geojson = kml(htmlDoc);
    return geojson;
  }

  const [municipalities] = useState<LocationT[]>([
    { name: 'calamnian', coord: [121.012633, 10.835265] },
    { name: 'cams', coord: [119.919601, 11.841750] },
    { name: 'northerPart', coord: [119.507580, 10.764406] },
    { name: 'south1', coord: [118.428351, 9.487765] },
    { name: 'cagayancillo', coord: [117.719335, 8.863135] },
    { name: 'south2', coord: [119.919601, 11.841750] },
    { name: 'balabac', coord: [117.125322, 7.962410] }
  ])

  //Quries
  const { data, isError, isLoading } = useQuery(['kmlData'], fetchKml);

  if (isLoading) {
    return <View><Text>Loading</Text></View>
  }

  if (isError) {
    return <View><Text>Error: </Text></View>
  }



  return (
    <SafeAreaView className='flex justify-center items-center bg-primary-500'>
      <View className=''>
        <MapboxGL.MapView
          styleURL='mapbox://styles/kelxety/clezeekfy000301qh0a1fk4mo'
          compassEnabled={true}
          scrollEnabled={true}
          attributionEnabled={false}
          logoEnabled={false} className='h-[75vh] w-screen z-0 '>
          <Camera
            ref={camera}
            followZoomLevel={zoom}
            zoomLevel={zoom}
            centerCoordinate={coordinates}
            followHeading={1}
            defaultSettings={{centerCoordinate: coordinates, zoomLevel: 3}}
          />

          <MapboxGL.PointAnnotation id="narra" coordinate={[118.121250, 9.159409]}
            onSelected={() => {
              setCoordinates([118.408595, 9.268540])
              setZoom(9)
            }}
          >
            <View className='bg-white'>
              <Text className='text-xs text-gray-700 '>Narra</Text>
            </View>  
          </MapboxGL.PointAnnotation>
          <MapboxGL.PointAnnotation id="elnido" coordinate={[119.389923, 11.180088]}
            onSelected={() => {
              setCoordinates([119.453779, 11.205480])
              setZoom(10)
            }}
          >
            <View className='bg-white'>
              <Text className='text-xs text-gray-700 '>El Nido</Text>
            </View>  
          </MapboxGL.PointAnnotation>
          {/* <ProjectsMarker /> */}
          {/* {showMunicipalities && municipalities?.map((data:LocationT, i: number) => {
            return (
              <MapboxGL.MarkerView coordinate={data.coord} key={i}>
                <TouchableOpacity onPress={()=>{renderMunicipality(data.coord, 8)}}>
                  <View className='items-center w-[60px] h-[70px] bg-black/0 flex'>
                    <RoadMarker />
                  </View>
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            )
          })} */}


        
          <MapboxGL.ShapeSource id="source" shape={data} onPress={() => {
            setCoordinates([117.125322, 7.962410])
          }}>
            <MapboxGL.FillLayer
              id="fill"
              style={{ fillColor: "blue", fillOpacity: 0.7 }}
            />

            <MapboxGL.LineLayer
              id='line'
              style={{ lineColor: 'red', lineWidth: 5 }}
              ></MapboxGL.LineLayer>

            </MapboxGL.ShapeSource>
       

        </MapboxGL.MapView>

      </View>
      <View className='bg-white w-screen flex justify-center items-center pt-4'>
        <TouchableOpacity className='p-4 border rounded-lg' onPress={() => {
          setZoom(5.9)
          setCoordinates(defaulCoordinates)
        }}><Text>Zoom Out</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Mapviewing