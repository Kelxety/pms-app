import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Props } from '../../../navigator/RootNavigator'
import SvgChart from '../../components/SvgChart';

const SubmitReport = ({navigation}:Props) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation]);

  // const RenderReport = () => {
  //   return (
     
  //   )
  // } 
  
  return (
    <SafeAreaView className='bg-primary-500 '>
      <View className='bg-gray-100 h-full w-full'>
        <View className='h-14 relative flex-row justify-center items-center bg-primary-500'>
          <TouchableOpacity className='absolute left-4' onPress={()=>navigation.navigate("ProjectDetails")}>
            <Text className='text-white'>Back</Text>
          </TouchableOpacity>
          <Text className='font-bold text-white'>
            Submit Report
          </Text>
        </View>
        <View className='flex justify-center items-center p-4 gap-2'>
          <Text className='font-bold'>Statement of Work Accomplishment (S.W.A)</Text>
          <Text className='text-primary-500 font-bold '>Name of Project</Text>
        </View>
        <View className='h-full w-full px-4'>
          <View className='bg-white rounded-xl p-4'>
            <View className='flex flex-row space-x-5'>
              <View className=''>
                <SvgChart size={50} percentage={0.2} color={"#72C165"} numberOfProj={25} textColor={"#000000"} />
              </View>
                <View className=''>
                  <Text className='text-xs'>Coz I saw you dig those rythym in blues</Text>
                  <TextInput className='h-8 border border-gray-500/30 rounded pl-2 text-xs' placeholder='Enter weight %'/>
                </View>
            </View>
          </View>
          <View className='p-4'></View>
          <View className='bg-white rounded-lg rounded-bg p-4 h-[300px]'>
            <Text>Remarks</Text>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={100}
              className="rounded border border-gray-500/25"
            />
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default SubmitReport