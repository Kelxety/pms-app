import { SafeAreaView, View } from "react-native";
import Mapviewing from "../components/MapViewing";

const Map = () => {
  return (
    <SafeAreaView className="bg-primary-500 h-screen w-full dark:bg-gray-900">
      <View className="bg-white">
        <Mapviewing />
      </View>
    </SafeAreaView>
  );
};

export default Map;
