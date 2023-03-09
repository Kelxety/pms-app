import React, { useRef, useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapboxGL, {Camera} from '@rnmapbox/maps';
import RoadMarker from './svg/RoadMarker';

void MapboxGL.setAccessToken('sk.eyJ1Ijoia2VseGV0eSIsImEiOiJjbGV6MG5tcjUwYWg3M3JzMmRmZ2JvM2R5In0.g8AVLvmX3m8RJs8zO_xB_g')
const Mapviewing = () => {
  const camera = useRef<Camera>(null);
  const [coordinates, setCoordinates] = useState([119.164026, 10.151691]);
  const [zoom, setZoom] = useState(5.9)
  
  const [route, setRoute] = useState({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [118.546395, 9.745461],
            [118.747688, 9.757935],
            [118.747353, 9.763709],
            [ 118.738992, 9.769386]
          ],
        },
      },
    ],
  });
  const initialCamera = {
    centerCoordinate: [180.546395, 9.745461],
    zoomLevel: 3
  }

  const [polygon, setPolygon] = useState({
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [118.732272, 9.740555],
          [118.685437, 9.716191],
          [118.732542, 9.740555],
          [118.689557, 9.716191],
        ],
      ],
    },
  });

  

  const renderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[118.732272, 9.740555]}
        className=""
      >
        <RoadMarker />
      </MapboxGL.PointAnnotation>
    );
  };

  const renderProject = (coord: number[], zoom: number) => {
    setCoordinates(coord)
    setZoom(zoom)
  }

  const [projects] = useState([
    [119.895963, 12.208497],
    [120.203751, 12.026101],
    [119.919601, 11.841750]
  ])
  
  return (
    <SafeAreaView className='flex justify-center items-center bg-primary-500'>
      <View className=''>
        <MapboxGL.MapView
          styleURL='mapbox://styles/kelxety/clezeekfy000301qh0a1fk4mo'
          compassEnabled={true}
          scrollEnabled={true}
          attributionEnabled={false}
          logoEnabled={false} className='h-[500px] w-screen z-0 '>
          <Camera
            ref={camera}
            zoomLevel={zoom}
            centerCoordinate={coordinates}
            followHeading={1}
            defaultSettings={initialCamera}
          />
          {/* <MapboxGL.PointAnnotation coordinate={coordinates} /> */}
          {/* <View className='bg-black/50'>{renderAnnotations()}</View> */}
          {/* <ProjectsMarker /> */}
          {projects?.map((coord, i) => {
            console.log(coord)
            return (
              <MapboxGL.MarkerView coordinate={coord} key={i}>
                <TouchableOpacity onPress={()=>{renderProject(coord, 8)}}>
                  <View className='items-center w-[60px] h-[70px] bg-black/0 flex'>
                    <RoadMarker />
                  </View>
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            )
          })}
         
          <MapboxGL.ShapeSource id="line1" shape={route}>
            <MapboxGL.LineLayer
              id="linelayer1"
              style={{ lineColor: "red", lineWidth: 5 }}
            />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource id="source" shape={polygon}>
            <MapboxGL.FillLayer
              id="fill"
              style={{ fillColor: "blue", fillOpacity: 0.7 }}
            />
            <MapboxGL.LineLayer
              id="line"
              style={{ lineColor: "red", lineWidth: 2 }}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
      <View className='bg-white w-screen flex justify-center items-center pt-10'>
        <TouchableOpacity className='p-4 border rounded-lg' onPress={() => {
          setZoom(5.9)
        }}><Text>ZoomOut</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Mapviewing