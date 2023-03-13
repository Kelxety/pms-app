import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import ProjectListSVG from "../src/components/svg/ProjectListSVG";
import Projects from "../src/screen/adminScreen/projects";
import MapTabSVG from "../src/components/MapTabSVG";
import HomeSVG from "../src/components/HomeSVG";
import Map from "../src/screen/adminScreen/map";
import { View } from "react-native";
import HomeScreen from "../src/screen/adminScreen/homeScreen";

export type TabStackParamList = {
  HomeScreen: undefined;
  Projects: undefined;
  Maps: undefined;
  SplashScreen: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const AdminTabNavigatorComponent = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
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

export default AdminTabNavigatorComponent;
