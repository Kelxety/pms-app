import React from 'react';
import { SafeAreaView } from "react-native";
import Mapviewing from '../../components/MapViewing';

const Map = () => {
  return (
    <SafeAreaView className="bg-white h-screen w-full dark:bg-gray-900">
        <Mapviewing />
    </SafeAreaView>
  );
};

export default Map;
