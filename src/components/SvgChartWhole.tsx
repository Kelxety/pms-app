import React from "react";
import { Circle } from "react-native-svg";

type Props = {
  size: number;
  percentage: number;
  color: string;
};

const SvgChartWhole = ({ size, percentage, color }: Props) => {
  const strokeWidth = 5;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
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
  );
};

export default SvgChartWhole;
