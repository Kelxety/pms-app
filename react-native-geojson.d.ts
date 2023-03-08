declare module 'react-native-geojson' {
  export interface GeoJSON {
    type: string;
    features: Feature[];
  }

  export interface Feature {
    type: string;
    geometry: Geometry;
    properties: any;
  }

  export interface Geometry {
    type: string;
    coordinates: number[] | number[][];
  }

  export function parse(data: string): GeoJSON;
}