import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapboxGL, {MarkerView} from '@rnmapbox/maps'
import RoadMarker from './svg/RoadMarker'

void MapboxGL.setAccessToken('sk.eyJ1Ijoia2VseGV0eSIsImEiOiJjbGV6MG5tcjUwYWg3M3JzMmRmZ2JvM2R5In0.g8AVLvmX3m8RJs8zO_xB_g')

const ProjectsMarker = () => {
  const [projects] = useState([
    [12.208497, 119.895963],
    [120.203751, 12.026101],
    [119.919601, 11.841750]
  ])
  return (
    <View>
        {projects?.map((coord) => {
          <MarkerView coordinate={coord}>
            <TouchableOpacity onPress={()=>console.log(coord)}>
              <View className='items-center w-[60px] h-[70px] bg-black/0 flex'>
                <RoadMarker />
              </View>
            </TouchableOpacity>
          </MarkerView>
          })}
    </View>
  )
}

export default ProjectsMarker