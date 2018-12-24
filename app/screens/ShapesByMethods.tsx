import React from 'react';

import {Button, ScrollView} from 'react-native';
import AMAP, {Coordinate, Circle, Polygon, Line, Marker} from 'react-native-amap-kit';

export default class ShapesByMethods extends React.Component {
    _amap: AMAP | null
    constructor(props: {}) {
        super(props)
        this._amap = null
    }

    setCircle() {
        let circle: Circle = {
            coordinate: {latitude: 39.1042, longitude: 116.4074},
            radius: 50000,
            lineWidth: 2,
            strokeColor: '#6699ff',
            fillColor: '#ff666650'
        }
        if(this._amap) {
            this._amap.addCircle(circle, (id)=>{
                console.log('add circle succ', id)
            })
        }
    }

    setMarker() {
        let marker: Marker = {
            coordinate: {latitude: 39.9042, longitude: 116.4074},
            imageName: 'm1'
        }
        if(this._amap) {
            this._amap.addAnnotation(marker, (id)=>{
                console.log('add marker succ', id)
            })
        }
    }

    setLine() {
        let line: Line = {
            lineWidth: 2,
            strokeColor: '#009933',
            coordinates: [
                {latitude: 39.1042, longitude: 116.5074},
                {latitude: 39.942, longitude: 116.4074},
                {latitude: 39.1042, longitude: 116.6074}
            ]
        }
        if(this._amap) {
            this._amap.addPolyline(line, (id)=>{
                console.log('add line succ', id)
            })
        }
    }

    setPolygon() {
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
        if(this._amap) {
            this._amap.addPolygon(polygon, (id)=>{
                console.log('add polygon succ', id)
            })
        }
    }

    render() {
        let centerCoordinate: Coordinate = {latitude: 39.9042, longitude: 116.4074};

        return (
            <ScrollView style={{flex:1}}>
                <AMAP 
                    style={{width: "100%", height: 550}}
                    centerCoordinate={centerCoordinate}
                    zoomLevel={7}
                    ref={ c => this._amap = c}
                />
                <Button title='圆' onPress={()=>this.setCircle()}/>
                <Button title='点标记' onPress={()=>this.setMarker()}/>
                <Button title='线' onPress={()=>this.setLine()}/>
                <Button title='多边形' onPress={()=>this.setPolygon()}/>
            </ScrollView>
        )
    }
}