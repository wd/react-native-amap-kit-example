import React from 'react';

import {View} from 'react-native';
import AMAP, {Coordinate, Circle, Polygon, Line, Marker} from 'react-native-amap-kit';

export default class ShapesByProps extends React.Component {
    constructor(props: {}) {
        super(props)
    }

    render() {

        let centerCoordinate: Coordinate = {latitude: 39.9042, longitude: 116.4074};
        let circle: Circle = {
            coordinate: {latitude: 39.1042, longitude: 116.4074},
            radius: 50000,
            lineWidth: 2,
            strokeColor: '#6699ff',
            fillColor: '#ff666650'
        }

        let marker: Marker = {
            coordinate: {latitude: 39.9042, longitude: 116.4074},
            imageName: 'm1'
        }

        let line: Line = {
            lineWidth: 2,
            strokeColor: '#009933',
            coordinates: [
                {latitude: 39.1042, longitude: 116.5074},
                {latitude: 39.942, longitude: 116.4074},
                {latitude: 39.1042, longitude: 116.6074}
            ]
        }

        let polygon: Polygon = {
            lineWidth: 1,
            strokeColor: '#4d94ff',
            fillColor: '#4d94ff50',
            coordinates: [
                {latitude: 38.842, longitude: 115.5074},
                {latitude: 39.842, longitude: 114.5074},
                {latitude: 38.342, longitude: 115.0074}
            ]
        }

        return (
            <View style={{flex:1}}>
                <AMAP 
                    style={{width: "100%", height: '100%'}}
                    centerCoordinate={centerCoordinate}
                    zoomLevel={7}
                    circles={[circle]}
                    markers={[marker]}
                    polylines={[line]}
                    polygons={[polygon]}
                />
            </View>
        )
    }
}