import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

import AMAP from 'react-native-amap-kit';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any>
}

export default class Home extends React.Component<Props> {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.welcome}>AMAP example.</Text>
                <AMAP
                    style={{width: "100%", height: 300}}
                    centerCoordinate={{latitude: 39.9042, longitude: 116.4074}}
                    zoomLevel={7}
                />
                <View>
                    <Button title="基本 Props 使用" onPress={()=>{this.props.navigation.navigate('Props')}}/>
                    <Button title="使用 Props 画图" onPress={()=>{this.props.navigation.navigate('ShapesByProps')}}/>
                    <Button title="使用 addCircle() 画图" onPress={()=>{this.props.navigation.navigate('ShapesByMethods')}}/>
                </View>
                </View>
            </ScrollView>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
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