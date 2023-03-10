import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Props, StackParamListType } from "../../navigator/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { create } from 'zustand';
import TopLevelHomeScreen from "../components/TopLevel/TopLevelHomeScreen";

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Dashboard">,
  NativeStackNavigationProp<StackParamListType>
>;

export type PieChartData = {
  color: string;
  percent: number;
}[];

type Roles = {
  role: string,
  removeRole: () => void
}

const HomeScreen = ({ navigation }: Props) => {


  const useRoleStore = create<Roles>((set) => ({
    role: 'admin',
    removeRole: () => set({ role: '' }),
  }));

  const userRole = useRoleStore((state) => state.role)

 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

 

  if(userRole !== 'admin') navigation.navigate('Login')
  return (
    <SafeAreaView className="bg-primary-500 dark:bg-gray-900">
      <StatusBar barStyle={"light-content"} />
      {userRole === 'topLevel' && 
        <TopLevelHomeScreen navigation={navigation.navigate} />
      }
    </SafeAreaView>
  );
};

export default HomeScreen;

