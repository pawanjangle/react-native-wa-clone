import React, { useState, useEffect } from 'react';
 import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'; 
 import { Camera, Constants } from 'expo-camera'; 
 import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
 export default class CameraScreen extends React.Component{ 
 state = {
 permission: null,
 condition: true,
 type: null,
 image: null,
 video: null
 }
 snap = async () => {
  if (this.camera) { 
   this.camera.takePictureAsync().then(( res ) =>
  this.setState( { image: res.uri} )
  )
 } 
 }
 toggle = (  ) =>{
 this.setState( {condition: !this.state.condition} )
 }

 render(  ){
    return ( 
    <View style={{ flex: 1 }}> 
    <Camera style={{ flex: 1 }} type={this.state.condition? "front": "back"}
    ref={
    ref => { this.camera = ref;
     }
    }
    >
     <View style = {styles.buttons}>  
      <MaterialIcons name="flash-off" size={30} color="white" style = {{alignItems: "left", marginTop: 20, marginRight: "auto", marginLeft: 30}}/>
   
     <MaterialCommunityIcons name="circle-outline" size={70} color="white"  onPress = {this.snap} style = {{ marginBottom: 10}}/>    
     
     <Ionicons name="ios-reverse-camera" size={30} color="white" onPress = {this.toggle} style = {{ marginLeft: "auto", marginTop: 20}}/>      
<Image style={styles.gallery} source={{ uri: this.state.image}} onPress = {this.gallery} />   
</View>
     
  
       </Camera>
        </View> );} 
    }
    const styles = StyleSheet.create( {
    buttons:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: "60vh",    
    },
    gallery:{
    height: 50,
    width: 50,
    marginLeft: 20
    }
    } );