//import './src/screens/_mockLocation'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './src/page/Map';
import { SafeAreaView } from 'react-navigation';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';


export default function App() {

  const [error, setError] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        // timeInterval: 10000, //1 detik
        distanceInterval: 100, //10meter
      }, (location) => {
        console.log(location);
      })
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    startWatching();
  }, [])

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
