import React from "react";
import { G, Path, Svg } from "react-native-svg";
import { Polygon } from "react-native-svg";

const BackArrowSVG = () => {
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill={"#FFFFFF"}
    >
      <Path d="M0 0h48v48H0z" fill="none" />
      <G id="Shopicon">
        <Polygon points="30.586,6.586 13.171,24 30.586,41.414 33.414,38.586 18.829,24 33.414,9.414  " />
      </G>
    </Svg>
  );
};

export default BackArrowSVG;
