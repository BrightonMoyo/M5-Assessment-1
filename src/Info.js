import React, {  useState , useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet, 
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import list_of_Service from './List_of_Service';
import Loader from './Loader';
 
const Info = () => {
  const companies = list_of_Service;

   
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);

  const RenderMarker = () => {
      console.log(list_of_Service[0].coord['']);
      return (
          <View>
          {
           companies.map((maker, index) => {
              return(
                  <Marker
                  key={index}
                  coordinate={{
                  latitude: maker.coord['latitude'],
                  longitude: maker.coord['longitude']  }}
                  title={maker.name}
                  image={maker.avatar}
              />
              )
            })
          }
          </View>
         
       
      )
  }

  const renderCard = () => {
    return( 
    
      <View>
      {
         companies.map(() => {
            })
      }

      </View>
    )
  }

  return (
    <View style={styles.container}>
      {companies != null 
        ?  
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -26.99164,
              longitude: 30.619989,

              latitudeDelta: 0.922,
              longitudeDelta: 0.0421,
            }}
             
            showsUserLocation={true}
            >
            <RenderMarker />
          </MapView>
          
         
         
        
        : <Loader/>

      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'fff',
    ...StyleSheet.absoluteFillObject,
    height:'100%'

  },
  map: {
    ...StyleSheet.absoluteFillObject,

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default Info;
