import React from "react";
import { G, Path, Polygon, Svg } from "react-native-svg";
import { useColorScheme } from "nativewind";

const ExpandArrowDownSVG = () => {
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
        <Polygon points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586  " />
      </G>
    </Svg>
  );
};

export default ExpandArrowDownSVG;
