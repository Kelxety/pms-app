import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

type Props = {
  size: number;
  percentage: number;
  color: string;
  numberOfProj: number;
  textColor: string;
};

const SvgChart = ({
  size,
  percentage,
  color,
  numberOfProj,
  textColor,
}: Props) => {
  const strokeWidth = 5;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <Svg
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="transparent"
      >
        <G>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={"#FFFFFF"}
            strokeDasharray={circumference}
            transform={`rotate(${-90} ${center} ${center})`}
            opacity={0.5}
          />
          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={color}
            strokeLinecap={"round"}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage)}
            transform={`rotate(${-90} ${center} ${center})`}
          />

          <View className="mt-5 flex items-center justify-center">
            <Text
              className={`flex items-center justify-center dark:text-white text-${textColor}`}
            >
              {numberOfProj}
            </Text>
          </View>
        </G>
      </Svg>
    </>
  );
};

export default SvgChart;
