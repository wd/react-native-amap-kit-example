/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AMAP from 'react-native-amap-kit';

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AMAP example.</Text>
        <AMAP
          style={{width: 300, height: 300}}
          centerCoordinate={{latitude: 39.9042, longitude: 116.4074}}
          zoomLevel={7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
