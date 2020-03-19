import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';


const Map = () => {
    return (
        <MapView 
            style={styles.mapView} 
            initialRegion={{
                latitude: -6.227909,
                longitude: 106.8231462,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Polyline />
            
        </MapView>
    )
};

const styles = StyleSheet.create({
    mapView: {
        height: '100%'
    }
});

export default Map;