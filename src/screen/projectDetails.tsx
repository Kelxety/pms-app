import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { Props } from "../../navigator/RootNavigator";
import { G, Path, Polygon, Rect, Svg } from "react-native-svg";
import ExpandableComponent from "../components/ExpandableComponent";
import BackArrowSVG from "../components/svg/BackArrow";
import SvgChart from "../components/SvgChart";

export type DataTypes = {
  isExpanded: boolean;
  category_name: string;
  subcategory: SubcategoryT;
};

export type SubcategoryT = {
  subcat_name: string;
  subcat_desc: string;
}[];

const ProjectDetails = ({ navigation }: Props) => {
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-primary-500 dark:bg-gray-900">
      <StatusBar barStyle={"light-content"} />
      <View className="bg-primary-500 relative flex flex-row items-center justify-center p-5 dark:bg-gray-900">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          className="absolute left-4"
        >
          <BackArrowSVG />
        </TouchableOpacity>

        <Text className="font-bold text-white">
          Project Tracking Information
        </Text>
      </View>
      <View className="h-full bg-gray-100 p-4 dark:bg-gray-800">
        <View className="relative h-auto rounded-lg bg-white p-4 dark:bg-gray-900">
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
          <View className="flex w-full items-center justify-center pt-4">
            <TouchableOpacity className="bg-primary-500 flex h-8 w-32 items-center justify-center rounded-2xl px-4 text-white">
              <Text className="text-white">View in map</Text>
            </TouchableOpacity>
          </View>
          <ScrollView className="mt-4 h-[50vh]">
            {listDataSource.map((item: DataTypes, key: number) => {
              return <ExpandableComponent key={key} item={item} />;
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProjectDetails;
