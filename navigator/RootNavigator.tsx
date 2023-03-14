import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Login from "../src/screen/login";
import AdminTabNavigatorComponent from "./AdminTabNavigatorComponent";
import UserTabNavigatorComponent from "./UserTabNavigatorComponent";
import { useAuthStore } from "../useStore/useRoleStore";
import { SplashScreenOnly } from "../src/screen/splashScreen";
import ProjectDetails from "../src/screen/userScreen/projectDetails";
import Map from "../src/screen/userScreen/map";
import ProjectMap from "../src/screen/userScreen/projectMap";
import SubmitReport from "../src/screen/userScreen/submitReport";

export type StackParamListType = {
  Home: undefined;
  Dashboard: undefined;
  SplashScreen: undefined;
  Login: undefined;
  Profile: undefined;
  ProjectDetails: undefined;
  Map: undefined;
  ProjectMap: undefined;
  SubmitReport: undefined;
};

type AppNavigatorProps = {
  userRole: 'user' | 'admin';
}

export type Props = NativeStackScreenProps<StackParamListType>;

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreenOnly} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

const AppNavigator = ({ userRole }: AppNavigatorProps) => {
  return (
    <Stack.Navigator>
      {userRole === null && (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
      {
        userRole === 'user' ? (
          <>
            <Stack.Screen name="UserTabNavigator" component={UserTabNavigator} />
            <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="ProjectMap" component={ProjectMap} />
            <Stack.Screen name="SubmitReport" component={SubmitReport} />
          </>
        ) : (
          <Stack.Screen name="AdminTabNavigator" component={AdminTabNavigator} />
        )
      }
      
    </Stack.Navigator>
  )
}

const AdminTabNavigator = () => {
  return (
    <AdminTabNavigatorComponent />
  )
}

const UserTabNavigator = () => {
  return (
    <UserTabNavigatorComponent />
  )
}

const RootNavigator = () => {
  const userRole = useAuthStore((state) => state.userRole)

  if (userRole === null) {
    return <AuthNavigator />;
  }

  return <AppNavigator userRole={userRole} />
};

export default RootNavigator;
