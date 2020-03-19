import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: new Date(),
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: -6.227909 + increment * tenMetersWithDegrees,
            longitude: 106.8231462 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId: Location._getCurrentWatchId(),
        location: getLocation()
    });
    counter++;
}, 10000);
