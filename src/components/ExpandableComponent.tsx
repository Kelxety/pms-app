import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DataTypes } from "../screen/projectDetails";
import ExpandArrowDownSVG from "./svg/ExpandArrowDownSVG";
import ExpandArrowUpSVG from "./svg/ExpandArrowUpSVG";
import LocationSVG from "./svg/LocationSVG";

type Props = {
  item: DataTypes;
};

const ExpandableComponent = ({ item }: Props) => {
  const [toggleExpanded, setToggleExpanded] = useState(false);

  const toggleExpandedComponent = () => {
    setToggleExpanded(!toggleExpanded);
  };

  return (
    <View className="border-primary-50 mt-2 h-auto rounded border p-4">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => toggleExpandedComponent()}
        className="active:text-white"
      >
        <View className="flex flex-row items-center">
          <Text className="flex-auto font-bold dark:text-white">
            {item.category_name}
          </Text>
          {toggleExpanded ? <ExpandArrowUpSVG /> : <ExpandArrowDownSVG />}
        </View>
      </TouchableOpacity>
      {toggleExpanded && <View className="mt-4 p-[1px]"></View>}
      {toggleExpanded &&
        item.subcategory?.map((item, index) => {
          return (
            <View key={index}>
              <View className="flex flex-row items-center gap-2 pt-2">
                <View className="bg-primary-500 flex h-6 w-6 items-center justify-center rounded-full">
                  <LocationSVG />
                </View>
                <View className="flex">
                  <Text className="text-sm font-bold dark:text-white">
                    {item.subcat_name}
                  </Text>
                  <Text className="text-xs dark:text-white">
                    {item.subcat_desc}
                  </Text>
                </View>
              </View>
              <View className="mt-2 bg-gray-100 p-[1px]"></View>
            </View>
          );
        })}
    </View>
  );
};

export default ExpandableComponent;
