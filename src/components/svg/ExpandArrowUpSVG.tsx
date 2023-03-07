import React from "react";
import { useColorScheme } from "nativewind";
import { G, Path, Polygon, Svg } from "react-native-svg";

const ExpandArrowUpSVG = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
    >
      <Path d="M0 0h48v48H0z" fill="none" />
      <G id="Shopicon">
        <G>
          <Polygon points="6.586,30.585 9.414,33.413 24,18.827 38.586,33.413 41.414,30.585 24,13.171  " />
        </G>
      </G>
    </Svg>
  );
};

export default ExpandArrowUpSVG;
