import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Props } from '../../../navigator/RootNavigator';
import SvgChart from '../../components/SvgChart';
import { Rect, Svg } from 'react-native-svg';
import ExpandableComponent from '../../components/ExpandableComponent';

export type DataTypes = {
  isExpanded: boolean;
  category_name: string;
  subcategory: SubcategoryT;
};

export type SubcategoryT = {
  subcat_name: string;
  subcat_desc: string;
}[];


type TabPropsT = {
  color: string;
  isActive: boolean;
};

const SubmitReport = ({ navigation }: Props) => {

  const listDataSource: DataTypes[] = [
    {
      isExpanded: false,
      category_name: "Project Details",
      subcategory: [
        {
          subcat_name: "Location",
          subcat_desc: "Purok 1, Bgy. Tinintinan, Araceli, Palawan",
        },
        {
          subcat_name: "Fund",
          subcat_desc: "Trush fund",
        },
        {
          subcat_name: "Schedule",
          subcat_desc: "By contract",
        },
        {
          subcat_name: "Class",
          subcat_desc: "Roads",
        },
        {
          subcat_name: "Calendar days",
          subcat_desc: "300 days",
        },
        {
          subcat_name: "Date started",
          subcat_desc: "November 25, 2022",
        },
        {
          subcat_name: "Date end",
          subcat_desc: "June 20, 2023",
        },
      ],
    },
    {
      isExpanded: false,
      category_name: "Fund",
      subcategory: [
        {
          subcat_name: "Location",
          subcat_desc: "Purok 1, Bgy. Tinintinan, Araceli, Palawan",
        },
        {
          subcat_name: "Fund",
          subcat_desc: "Trush fund",
        },
        {
          subcat_name: "Schedule",
          subcat_desc: "By contract",
        },
        {
          subcat_name: "Class",
          subcat_desc: "Roads",
        },
        {
          subcat_name: "Calendar days",
          subcat_desc: "300 days",
        },
        {
          subcat_name: "Date started",
          subcat_desc: "November 25, 2022",
        },
        {
          subcat_name: "Date end",
          subcat_desc: "June 20, 2023",
        },
      ],
    },
    {
      isExpanded: false,
      category_name: "Schedule",
      subcategory: [
        {
          subcat_name: "Location",
          subcat_desc: "Purok 1, Bgy. Tinintinan, Araceli, Palawan",
        },
        {
          subcat_name: "Fund",
          subcat_desc: "Trush fund",
        },
        {
          subcat_name: "Schedule",
          subcat_desc: "By contract",
        },
        {
          subcat_name: "Class",
          subcat_desc: "Roads",
        },
        {
          subcat_name: "Calendar days",
          subcat_desc: "300 days",
        },
        {
          subcat_name: "Date started",
          subcat_desc: "November 25, 2022",
        },
        {
          subcat_name: "Date end",
          subcat_desc: "June 20, 2023",
        },
      ],
    },
  ];

  const [tab, setTab] = useState<{name:string, isActive:boolean}[]>([
    { name: 'Profile', isActive: true },
    { name: 'Pal', isActive: false },
    { name: 'Bac', isActive: false },
    { name: 'Financial', isActive: false },
    { name: 'SWA', isActive: false }
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  const Profile = ({color, isActive}:TabPropsT) => { 
    return (
      <View className="pt-6">
        <View className="relative rounded-lg bg-white p-4 dark:bg-gray-900">
          <View className="absolute left-4 -top-2 rounded-2xl bg-gray-100 px-4 py-1 ">
            <Text className="text-xs font-bold">On Going</Text>
          </View>
          <View className="flex w-full flex-row gap-2 pt-2">
            <View className="w-2/3">
              <Text className="text-xl font-bold dark:text-white">
                Concreting of Araceli - Dumaran Road "B"
              </Text>
              <Text className="mt-2 text-xs dark:text-white">
                Concreting of 4.60 kms. of road and installation of RCPS' w/end
                Protection
              </Text>
            </View>
            <View className="w-1/3">
              <SvgChart
                key={1}
                size={100}
                color={"#72C165"}
                percentage={0.8}
                numberOfProj={5}
                textColor={"black"}
              />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-xs dark:text-white">Billing status</Text>
            <View className="flex w-full flex-row items-center">
              <Svg height={10} width={300} className="flex-1">
                <Rect
                  width="300"
                  height="10"
                  fill="#e6e6e6"
                  strokeLinecap="square"
                  x="0"
                  y="0"
                />
                <Rect
                  width="100"
                  height="10"
                  fill="#3399ff"
                  strokeLinecap="round"
                  x="0"
                  y="0"
                />
              </Svg>
              <View className="flex pl-4">
                <Text className="mx-auto dark:text-white">50%</Text>
              </View>
            </View>
          </View>
         
          <ScrollView className="mt-4 h-[350px]">
            {listDataSource.map((item: DataTypes, key: number) => {
              return <ExpandableComponent key={key} item={item} />;
            })}
          </ScrollView>
          <View className="flex w-full flex-row gap-4 items-center justify-center pt-4">
            <TouchableOpacity className="bg-primary-500 flex h-8 items-center justify-center rounded-2xl px-4 text-white" onPress={()=>{navigation.navigate('SubmitReport')}}>
              <Text className="text-white">Submit a Report</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary-500 flex h-8 w-32 items-center justify-center rounded-2xl px-4 text-white" onPress={()=>{navigation.navigate('ProjectMap')}}>
              <Text className="text-white">View in map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  const Pal = ({color, isActive}:TabPropsT) => {
    return (
      <View>
        <Text className={`text-[${color}]`}>Pal</Text>
      </View>
    )
  }

  const Bac = ({color, isActive}:TabPropsT) => {
    return (
      <View>
        <Text className={`text-[${color}]`}>Bac</Text>
      </View>
    )
  }

  const Financial = ({color, isActive}:TabPropsT) => {
    return (
      <View>
        <Text className={`text-[${color}]`}>Financial</Text>
      </View>
    )
  }

  const SWA = ({color, isActive}:TabPropsT) => {
    return (
      <View>
        <Text className={`text-[${color}]`}>SWA</Text>
      </View>
    )
  }

  return (
    <SafeAreaView className='bg-primary-500 h-screen w-screen'>
      <View className='bg-white w-full'>
        <View className='h-14 relative flex-row justify-center items-center bg-primary-500'>
          <TouchableOpacity className='absolute left-4' onPress={()=>navigation.navigate("Dashboard")}>
            <Text className='text-white'>Back</Text>
          </TouchableOpacity>
          <Text className='font-bold text-white'>Project Details</Text>
        </View>
      </View>
      <View className='w-full h-full bg-gray-100 p-2'>
        <View className='p-2 rounded-3xl bg-primary-500 flex flex-row justify-between'>
          {tab.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => {
                setTab(tab.map((item, i) => {
                  if (index === i) {
                    return { ...item, isActive: true }
                  } else {
                    return { ...item, isActive: false }
                  }
                }
                ))
              }} className={`w-1/5 items-center justify-center py-1 ${item.isActive? 'bg-white rounded-2xl':''}`}>
                <Text className={`text-white ${item.isActive ? 'font-bold text-black' : ''}`}>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        {tab?.map((item:{name:string, isActive:boolean}, index:number) => {
          return (
            item.isActive &&
              <View key={index}>
                {item.name === 'Profile' ? <Profile color={item.isActive ? 'black' : 'gray'} isActive={item.isActive} /> : null}
                {item.name === 'Pal' ? <Pal color={item.isActive ? 'black' : 'gray'} isActive={item.isActive} /> : null}
                {item.name === 'Bac' ? <Bac color={item.isActive ? 'black' : 'gray'} isActive={item.isActive} /> : null}
                {item.name === 'Financial' ? <Financial color={item.isActive ? 'black' : 'gray'} isActive={item.isActive} /> : null}
                {item.name === 'SWA' ? <SWA color={item.isActive ? 'black' : 'gray'} isActive={item.isActive} /> : null}
              </View>
            )
        })}
      </View>
    </SafeAreaView>
  )
}

export default SubmitReport