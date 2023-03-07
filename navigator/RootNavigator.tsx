import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { SplashScreenOnly } from "../src/screen/splashScreen";
import Login from "../src/screen/login";
import ProjectDetails from "../src/screen/projectDetails";

export type StackParamListType = {
  Home: undefined;
  SplashScreen: undefined;
  Login: undefined;
  Profile: undefined;
  ProjectDetails: undefined;
};

export type Props = NativeStackScreenProps<StackParamListType>;

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreenOnly} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
