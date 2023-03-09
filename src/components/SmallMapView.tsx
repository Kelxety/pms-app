import React, { useRef, useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapboxGL, {Camera} from '@rnmapbox/maps';
import RoadMarker from './svg/RoadMarker';

type LocationT = {
  name: string, coord: number[],
}

void MapboxGL.setAccessToken('sk.eyJ1Ijoia2VseGV0eSIsImEiOiJjbGV6MG5tcjUwYWg3M3JzMmRmZ2JvM2R5In0.g8AVLvmX3m8RJs8zO_xB_g')
const SmallMapView = () => {

  const camera = useRef<Camera>(null);
  const [showMunicipalities, setShowMunicipalities] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showRenderedProject, setShowRenderedProjects] = useState(false);
  const [coordinates, setCoordinates] = useState([119.164026, 10.151691]);
  const [zoom, setZoom] = useState(5)
  const [defaulCoordinates] = useState([119.164026, 10.151691])
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
    setTimeout(() => {
      setShowProjects(false)
      setShowRenderedProjects(true)
    }, 2000)
  }

  const renderMunicipality = (coord: number[], zoom: number) => {
    setCoordinates(coord)
    setZoom(zoom)
    setTimeout(() => {
      setShowMunicipalities(false)
      setShowProjects(true)
    }, 1000)
    console.log(coordinates)
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

  const [projects] = useState([
    [119.895963, 12.208497],
    [120.203751, 12.026101],
    [119.919601, 11.841750],
    [121.012633, 10.835265]
  ])
  

  return (
    <SafeAreaView className='flex justify-center items-center bg-primary-500'>
      <View className=''>
        <MapboxGL.MapView
          styleURL='mapbox://styles/kelxety/clezeekfy000301qh0a1fk4mo'
          compassEnabled={true}
          scrollEnabled={true}
          attributionEnabled={false}
          logoEnabled={false} className='h-full w-screen z-0 '>
          <Camera
            ref={camera}
            followZoomLevel={zoom}
            zoomLevel={zoom}
            centerCoordinate={coordinates}
            followHeading={1}
            defaultSettings={initialCamera}
          />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
          {/* <View className='bg-black/50'>{renderAnnotations()}</View> */}
          {/* <ProjectsMarker /> */}
          {showMunicipalities && municipalities?.map((data:LocationT, i: number) => {
            return (
              <MapboxGL.MarkerView coordinate={data.coord} key={i}>
                <TouchableOpacity onPress={()=>{renderMunicipality(data.coord, 8)}}>
                  <View className='items-center w-[60px] h-[70px] bg-black/0 flex'>
                    <RoadMarker />
                  </View>
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            )
          })}

          {showProjects && projects?.map((coor: number[], i: number) => {
            if(!coor) return
            return(
              <MapboxGL.MarkerView coordinate={coor} key={i}>
                <TouchableOpacity onPress={() => { renderProject(coor, 15) }}>
                  <View className='items-center w-[60px] h-[70px] bg-black/0 flex'>
                    <RoadMarker />
                  </View>
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            )
          })}

          {showRenderedProject && (
            <View>
            </View>
          )}
         
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
    </SafeAreaView>
)
}

export default SmallMapView