import React, { Component } from 'react';
import { View,  Text, Dimensions, StyleSheet, SafeAreaView,  ActivityIndicator } from 'react-native';
 

const Loader = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size = "large" color = "#00ff00"/>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100'
     
    },
    horizontal:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding: 10
    }
    

    
});

export default Loader;

 