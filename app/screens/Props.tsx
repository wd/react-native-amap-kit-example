import React from 'react';

import {View} from 'react-native';
import AMAP, {MoveByUserEvent, TapEvent, ZoomChangeEvent} from 'react-native-amap-kit';

export default class Props extends React.Component {
    constructor(props: {}) {
        super(props)
        this.onDidMoveByUser.bind(this)
        this.onSingleTapped.bind(this)
        this.onMapZoomChange.bind(this)
    }

    onDidMoveByUser(e: MoveByUserEvent) {
        console.log('move by user', e.nativeEvent.data)
    }
    onSingleTapped(e: TapEvent) {
        console.log('user tap', e.nativeEvent.coordinate)
    }

    onMapZoomChange(e: ZoomChangeEvent) {
        console.log('zoom change', e.nativeEvent.zoomLevel)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <AMAP 
                    style={{width: "100%", height: '100%'}}
                    centerCoordinate={{latitude: 39.9042, longitude: 116.4074}}
                    zoomLevel={7}
                    mapType={0}
                    showsUserLocation={true}
                    bearing={140}
                    tilt={50}
                    onDidMoveByUser={this.onDidMoveByUser}
                    onSingleTapped={this.onSingleTapped}
                    onLongTapped={this.onSingleTapped}
                    onMapZoomChange={this.onMapZoomChange}
                />
            </View>
        )
    }
}