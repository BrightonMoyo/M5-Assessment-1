 import  { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/Homepage';
import Info from './src/Info';
import List_of_Service from  './src/List_of_Service';



 
const Stack = createNativeStackNavigator();
import * as firebase from 'firebase' ; // 8.2.3
import Firebase from './src/Firebase';
import Signin from './src/Signin';

 
export default function App(){

  if(!firebase.apps.length){
    console.log("Firebase is connected");
    firebase.initializeApp(Firebase)
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen name="Login Screen" component={Login} options={{headerShown:false}} />
       <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}} />
      <Stack.Screen name="Homepage" component={Homepage}  />
      <Stack.Screen name="Info" component={Info} options= {{title:"Information"}} />
      </Stack.Navigator> 
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
}); 