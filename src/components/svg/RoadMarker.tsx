import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RoadMarker = (props: SvgProps) => (
  <Svg
    width={24}
    height={30}
    viewBox='0 0 24 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M12 0C18.6274 0 24 5.3406 24 11.9286C24 17.14 20.638 21.5709 15.9524 23.195L12 30L8.0476 23.195C3.36198 21.5709 0 17.14 0 11.9286C0 5.3406 5.37258 0 12 0Z'
      fill='#FF7070'
    />
    <Path
      d='M22.1317 11.8929C22.1317 17.4354 17.6117 21.9286 12.0359 21.9286C6.46017 21.9286 1.94012 17.4354 1.94012 11.8929C1.94012 6.35029 6.46017 1.85714 12.0359 1.85714C17.6117 1.85714 22.1317 6.35029 22.1317 11.8929Z'
      fill='white'
    />
    <Path
      d='M16.2493 5.75357C16.1807 5.32723 15.9067 5.07143 15.5642 5.07143H12.7553L12.8923 7.62946H11.2481L11.3851 5.07143H8.50769C8.16515 5.07143 7.89111 5.4125 7.8226 5.75357L5.97285 17.6911C5.90434 18.2027 6.24688 18.7143 6.65794 18.7143H10.7L10.9055 14.4509H13.2348L13.4404 18.7143H17.4139C17.825 18.7143 18.1675 18.2027 18.099 17.6911L16.2493 5.75357ZM10.974 12.7455L11.1111 9.33482H12.8923L13.0293 12.7455H10.974Z'
      fill='#FF7070'
    />
  </Svg>
);
export default RoadMarker;