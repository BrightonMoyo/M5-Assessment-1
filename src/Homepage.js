 import React, { Component } from 'react';
import { View,  Text, Dimensions, StyleSheet, SafeAreaView, FlatList, Image,TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './Dataserv';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Homepage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={serviceData}
                contentInset={{padding:12}}
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity  onPress={() => {navigation.navigate ('Info')  }                       }style = {{margin:10, height:windowHeight *0.2,
                        backgroundColor:item.bgColor,borderRadius:11}}>

                            <View style={{backgroundColor:item.bgColor}}> 
                            <Text style= {styles.category}>
                                {item.category}
                            </Text> 
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text>
                                {item.numCompany}
                            </Text>
                            
                            </View>
                            <Image style={{
                              height:80, width:70,position:'absolute',right:0 ,margin
                            :10,bottom:0
                            }} source={item.image}/>
                        </TouchableOpacity>

                    )
                }}
            >

            </FlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex:1,
        //backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
     
    }, 
    category:{
        fontSize:24,
        fontWeight:'200',
        color: 'white'
    },
    name:{
       
       fontSize:16,
       fontWeight:'500'
       
    }

    
});

export default Homepage;

 