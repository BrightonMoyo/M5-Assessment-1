import React, {Component} from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView,TextInput,TouchableOpacity  } from 'react-native';
import {useState} from 'react';
import { registration } from '../Backend/Authentication';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Signin = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const signUser = ()=> {
       registration(email,password,name)
}

  return (
        <SafeAreaView style={styles.container}>
            <Text style = {{fontWeight: '100', fontSize: 34, marginBottom:10}}>Registration</Text>
            <Text style = {{marginBottom: 10, fontSize:18 }}>
               Register to ,continue
            </Text>
            <View style={styles.form}>
             <TextInput 
                style={styles.input} 
                placeholder="Name"
                value= {name}
                name = 'name'
                onChange= { (name) =>{setName(name)}}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Email"
                value ={email}
                email = 'email'
                onChange= { (email) =>{setEmail(email)}}
            />
     
            <TextInput
                style={styles.input} 
                placeholder="Password"
                value ={password}
                password = 'password'
                onChange= { (password) =>{setPassword(password)}}
            />
             <TouchableOpacity
                 
                onPress={signUser}  
            >
                <Text style={{color:'black'}}>Login</Text>
            </TouchableOpacity>

            </View>
            
 
            <TouchableOpacity
                style={styles.Button}
                onPress={() => {navigation.navigate('Homepage')}}
            >
                <Text style={{color:'black'}}>Submit</Text>
            </TouchableOpacity>

        </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor:"#4169e",
        padding:30,
        paddingTop: 100
    }, 
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10
    },
    Button:{
        alignItems: "center",
        backgroundColor: "#7df9ff",
        padding: 10,
        margin:10,
        borderRadius:10
        //position:'absolute',
         
         
    },
    form:{
        margin:16,
        paddingTop:windowHeight/5
    }
  
});
  

 

export default Signin;