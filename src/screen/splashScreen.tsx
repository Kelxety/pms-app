import React from 'react';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Props, StackParamListType } from "../../navigator/RootNavigator";
import { TabStackParamList } from "../../navigator/AdminTabNavigatorComponent";
import * as SplashScreen from "expo-splash-screen";
void SplashScreen.preventAutoHideAsync();

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "SplashScreen">,
  NativeStackNavigationProp<StackParamListType>
>;

export const SplashScreenOnly = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
      } catch (e) {
        console.warn(e);
      } finally {
        void SplashScreen.hideAsync();
      }
    }

    void prepare();
  }, []);

  return (
    <SafeAreaView className="flex h-full flex-col items-center justify-center">
      <Text className="text-2xl font-bold text-gray-500">Welcome to</Text>
      <Text className="text-center text-4xl font-extrabold text-gray-900">
        Project Monitoring System
      </Text>
      <View className="p-4"></View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-gray-300">Click to start login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
