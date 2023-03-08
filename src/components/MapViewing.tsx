import React, { useEffect } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import leafletHtml from '../../leaflet.html';

const MapViewing = () => {
  // const kmlString = await RNFS.readFileAssets('../../assets/GIS/sample.kml');
  // useEffect(() => {
  //   parseString(kmlString, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       const multiGeometry = result.kml.Document[0].Placemark[0].MultiGeometry[0];
  //       const coordinates = multiGeometry.LineString[0].coordinates[0].split(' ');
  //       const convertedCoords = coordinates.map(coord => {
  //         const [longitude, latitude] = coord.split(',');
  //         return [parseFloat(longitude), parseFloat(latitude)];
  //       });
  //       const jsonData = {
  //         type: 'FeatureCollection',
  //         features: [
  //           {
  //             type: 'Feature',
  //             geometry: {
  //               type: 'MultiLineString',
  //               coordinates: [convertedCoords],
  //             },
  //           },
  //         ],
  //       };
  //       console.log(jsonData);
  //     }
  //   });
  //   parseInt()
  // },[])
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={leafletHtml}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        scrollEnabled={false}
      />
    </View>
  );
};

export default MapViewing;