import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import ProjectListSVG from "../src/components/svg/ProjectListSVG";
import HomeScreen from "../src/screen/home";
import Projects from "../src/screen/projects";
import MapTabSVG from "../src/components/MapTabSVG";
import HomeSVG from "../src/components/HomeSVG";
import Map from "../src/screen/map";
import { View } from "react-native";

export type TabStackParamList = {
  Chart: undefined;
  Projects: undefined;
  Maps: undefined;
  Dashboard: undefined;
  Screen: undefined;
  ProjectDetails: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        options={{
          headerBackground: () => <View className="bg-primary-600" />,
          tabBarIcon: (i) => {
            if (i.color === "#1677FF") {
              return <HomeSVG color={"#1677FF"} />;
            } else {
              return <HomeSVG color={"#CBCBCB"} />;
            }
          },
          tabBarIconStyle: {
            color: "#1677FF",
          },
          tabBarActiveTintColor: "#1677FF",
          tabBarShowLabel: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Projects"
        options={{
          headerShown: false,
          headerBackground: () => <View className="bg-primary-600" />,
          tabBarIcon: (i) => {
            if (i.color === "#1677FF") {
              return <ProjectListSVG color={"#1677FF"} />;
            } else {
              return <ProjectListSVG color={"#CBCBCB"} />;
            }
          },
          tabBarIconStyle: {
            color: "#1677FF",
          },
          tabBarActiveTintColor: "#1677FF",
          tabBarShowLabel: false,
        }}
        component={Projects}
      />
      <Tab.Screen
        name="Maps"
        component={Map}
        options={{
          headerShown: false,
          headerBackground: () => <View className="bg-primary-600" />,
          tabBarIcon: (i) => {
            if (i.color === "#1677FF") {
              return <MapTabSVG color={"#1677FF"} />;
            } else {
              return <MapTabSVG color={"#CBCBCB"} />;
            }
          },
          tabBarIconStyle: {
            color: "#1677FF",
          },
          tabBarActiveTintColor: "#1677FF",
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
