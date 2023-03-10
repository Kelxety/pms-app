import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import SvgChart from '../SvgChart'
import { Circle, Svg } from 'react-native-svg'
import SvgChartWhole from '../SvgChartWhole'
import SmallMapView from '../SmallMapView'
import { useColorScheme } from 'nativewind'

const TopLevelHomeScreen = (navigate) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const data = [
    {
      size: 60,
      percentage: 1,
      color: "#72C165",
      numberOfProj: 4,
    },
    {
      size: 60,
      percentage: 0.75,
      color: "#FB6363",
      numberOfProj: 4,
    },
    {
      size: 60,
      percentage: 0.5,
      color: "#1677FF",
      numberOfProj: 4,
    },
  ];

  const getRole = (get) => ({
    
  })
  
  return (
    <View>
      <View className="flex flex-row justify-between">
        <TouchableOpacity className="flex flex-row items-center p-2" onPress={()=>{navigate('Login')}}>
          <Image
            style={styles.imageView}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <View className="flex py-4">
            <Text className="text-white">Hello, John Doe</Text>
            <Text className="text-white">PGP, 
              {userRole === 'admin' ? ' Top Management' :' Ground Level Engineer'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleColorScheme}
          className="flex items-center justify-center p-4"
        >
          <Text className="text-white">
            {colorScheme === "dark" ? "🌞" : "🌙"}
          </Text>
        </TouchableOpacity>
      </View>

      <View className=" bg-primary-500 pb-4 dark:bg-gray-900">
        <View className="flex flex-row justify-between px-10">
          <View className="flex items-center">
            <SvgChart
              size={60}
              color={"#FB6363"}
              percentage={0.25}
              numberOfProj={4}
              textColor={"white"}
            />
            <Text className="text-xs text-white">Pending project</Text>
          </View>
          <View className="flex items-center">
            <SvgChart
              size={60}
              color={"#C1DEFE"}
              percentage={0.5}
              numberOfProj={8}
              textColor={"white"}
            />
            <Text className="text-xs text-white">On Going project</Text>
          </View>
          <View className="flex items-center">
            <SvgChart
              size={60}
              color={"#72C165"}
              percentage={0.25}
              numberOfProj={4}
              textColor={"white"}
            />
            <Text className="text-xs text-white">Finish project</Text>
          </View>
        </View>
        <View className="mt-4 h-auto rounded-2xl bg-white p-2 dark:bg-gray-900">
          <View className="flex items-center justify-center py-2">
            <Text className="text-lg dark:text-white">
              Overall Project Total: 12
            </Text>
          </View>
          <View className="mx-auto flex flex-row items-center justify-between">
            <Svg
              height={150}
              width={150}
              viewBox={`0 0 60 60`}
              fill="transparent"
            >
              {data &&
                data.map((item, index) => (
                  <SvgChartWhole
                    key={index}
                    size={item.size}
                    color={item.color}
                    percentage={item.percentage}
                  />
                ))}
              <View className="mt-10 flex items-center justify-center">
                <Text className="flex items-center justify-center text-center text-2xl dark:text-white">
                  50%
                </Text>
                <Text className="flex items-center justify-center text-center text-xs dark:text-white">
                  Total percentage completed
                </Text>
              </View>
            </Svg>
            <View className="p-2"></View>
            <View>
              <Text className="font-bold dark:text-white">Project Details</Text>
              <View className="flex flex-row items-center">
                <Svg
                  height={10}
                  width={10}
                  viewBox={`0 0 100 100`}
                  fill="#FB6363"
                >
                  <Circle cx="50" cy="50" r="40" />
                </Svg>
                <View className="p-1"></View>
                <Text className="dark:text-white">Pending projects</Text>
              </View>
              <View className="flex flex-row items-center">
                <Svg
                  height={10}
                  width={10}
                  viewBox={`0 0 100 100`}
                  fill="#1677FF"
                >
                  <Circle cx="50" cy="50" r="40" />
                </Svg>
                <View className="p-1"></View>
                <Text className="dark:text-white">On Going</Text>
              </View>
              <View className="flex flex-row items-center">
                <Svg
                  height={10}
                  width={10}
                  viewBox={`0 0 100 100`}
                  fill="#72C165"
                >
                  <Circle cx="50" cy="50" r="40" />
                </Svg>
                <View className="p-1"></View>
                <Text className="dark:text-white">Overall</Text>
              </View>
            </View>
          </View>
          <View className="mt-4 px-4 h-[300px] border border-white rounded-lg overflow-hidden">
            <SmallMapView />
          </View>
          <View className="mt-16 mb-10 bg-white px-4">
            <TextInput
              inlineImageLeft="search_icon"
              className="h-10 rounded-lg border border-gray-50 bg-gray-200 px-2"
              placeholder="search project"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default TopLevelHomeScreen

const styles = StyleSheet.create({
  imageView: {
    width: 30,
    height: 30,
    margin: 7,
    borderRadius: 7,
    rounded: 100,
  },
});