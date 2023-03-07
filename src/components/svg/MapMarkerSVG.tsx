import React from "react";
import Svg, { Path, SvgProps, G, Ellipse } from "react-native-svg";

const MapMarkerSVG = (props: SvgProps) => {
  return (
    <Svg
      stroke={"#C35555"}
      strokeWidth={8}
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="50px"
      height="50px"
      viewBox="0 0 527.678 527.678"
      style={{
        backgroundColor: "transparent",
      }}
      xmlSpace="preserve"
    >
      <G>
        <G>
          <Path
            fill={"#FB6363"}
            d="M263.877,0C169.782,0,93.512,76.271,93.512,170.213c0,93.941,159.197,349.834,159.197,349.834 c6.196,10.175,16.217,10.175,22.338,0c0,0,159.119-255.816,159.119-349.834C434.166,76.194,357.973,0,263.877,0z M263.877,264.537 c-61.583,0-111.384-49.878-111.384-111.384c0-61.506,49.801-111.461,111.384-111.461c61.582,0,111.384,49.878,111.384,111.384 S325.459,264.537,263.877,264.537z"
          />
          <Ellipse
            cx={263.877}
            cy={153.153}
            rx={69.844}
            ry={69.844}
            fill={"#FB6363"}
          />
        </G>
      </G>
    </Svg>
  );
};

export default MapMarkerSVG;
