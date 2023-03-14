import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Props } from '../../../navigator/RootNavigator';
import MapOfProject from '../../components/MapOfProject';

const ProjectMap = ({navigation}:Props) => {
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation])
  
  return (
    <SafeAreaView className='bg-primary-500'>
      <View className="w-screen h-[85vh] bg-white">
        <MapOfProject />
        <View className='p-4'>
          <Text className='font-bold text-2xl'>Title of Project</Text>
          <Text className=''>Description of the Project</Text>
          <View className='p-4'></View>
          <Text>Other Details</Text>
        </View>
      </View>
      <View className='bg-white h-full w-full items-center'>
        <TouchableOpacity className='bg-red-500 px-8 py-2 rounded-xl' onPress={()=>navigation.navigate('SubmitReport')}>
          <Text className='text-white'>Return to Project Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProjectMap