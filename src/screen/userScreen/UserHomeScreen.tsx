import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, FlatList, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Props } from "../../../navigator/RootNavigator";
import { useColorScheme } from 'nativewind';
import { Circle, Svg } from 'react-native-svg';
import SvgChart from '../../components/SvgChart';
import SvgChartWhole from '../../components/SvgChartWhole';
import { useAuthStore } from '../../../useStore/useRoleStore';

type SampleDataT = {
  id: number;
  title: string;
  description: string;
  days: string;
  status: string;
  progress: string;
}

const UserHomeScreen = ({ navigation }: Props) => {
  const { logout } = useAuthStore();
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

  const sampleData = [
    {
        id: 1,
        title: "Conreting of Araceli - Dumaran Raod B",
        description: "Concreting of 4.60 kms. of road and ...",
        days: '10 days left',
        status: 'On Going',
        progress: '50'
    },
    {
        id: 2,
        title: "Conreting of Araceli - Dumaran Raod C",
        description: "Concreting of 5.60 kms. of road and ...",
        days: '11 days left',
        status: 'On Going',
        progress: '60'
    },
    {
        id: 3,
        title: "Conreting of Araceli - Dumaran Raod D",
        description: "Concreting of 6.60 kms. of road and ...",
        days: '12 days left',
        status: 'On Going',
        progress: '70'
    },
  ]

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false
    })
  },[navigation])

  const projectActivity = ({item}:{item:SampleDataT}) => {
    return (
      <TouchableOpacity className="bg-white w-40 h-auto p-1 m-2 border-[#CBCBCB] border rounded-lg mb-16" onPress={()=>{
        navigation.navigate('ProjectDetails')
      }}>
          <View className="p-2 flex flex-col justify-between">
              <View className="mb-4">
                  <Text className="text-xs text-black font-semibold">{item.title}</Text>
              </View>
              <View className="mb-4">
                  <Text className="text-xs truncate text-ellipsis text-slate-500">{item.description}</Text>
              </View>
              <View className="item-center flex-row">
                  <View className="flex-auto" >
                      <Text className="text-xs text-slate-500">{item.days}</Text>
                      <Text className="text-xs text-black flex-auto">Status: {item.status}</Text>
                  </View>
                  <View className="items-center">
                      <View className="w-8 h-8 rounded-full bg-[#D8B34B] items-center justify-center"><Text className="text-xs">{item.progress}%</Text></View>
                  </View>
              </View>

          </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView className="bg-primary-500 dark:bg-gray-900">
      <StatusBar barStyle={"light-content"} />
      <View className="flex flex-row justify-between">
        <TouchableOpacity className="flex flex-row items-center p-2" onPress={
          ()=>Alert.alert("Logout", "Are you sure you want to logout?", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => logout() }
          ])
        }>
          <Image
            style={styles.imageView}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <View className="flex py-4">
            <Text className="text-white">Hello, Johny Doe</Text>
            <Text className="text-white">PGP, Engineer Ground Level</Text>
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
          <View className="mt-4 px-4 border border-white rounded-lg overflow-hidden">
            <View className='flex justify-between flex-row w-full items-center p-2' >
              <Text className='font-bold'>Project Activity</Text>
              <Text>View All</Text>
            </View>
            <View>
              <FlatList
                data={sampleData}
                renderItem={projectActivity}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                className=""
              />
            </View>
          </View>
        </View>
      </View>
  </SafeAreaView>
  )
}

export default UserHomeScreen

const styles = StyleSheet.create({
  imageView: {
    width: 30,
    height: 30,
    margin: 7,
    borderRadius: 7,
    rounded: 100,
  },
});
