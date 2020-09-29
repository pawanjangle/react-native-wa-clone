import * as React from 'react';
import { Avatar } from 'react-native-paper'; 
import { Feather, FontAwesome } from '@expo/vector-icons'; 


import { StyleSheet, View, Text } from 'react-native'; 
const CallsScreen = () =>{
return( 
 <View>
 <View style = {styles.calls}>
 <Avatar.Image size={60} source={require('../assets/splash.png')} /> 
 <View style = {styles.callstructure}>
 <Text style = {{ fontWeight: "bold", fontSize: 18}}>Priya</Text>
 <View style = {styles.callicon}>
<Feather name="arrow-up-right" size={20} color="#156b59" />
<Text style = {{ paddingRight: 100}}>Today, 1.49 pm</Text>
</View>
 </View>
 <FontAwesome name="video-camera" size={24} color="#156b59" style = {{ paddingTop: 10}}/>
 </View>
 <View style={{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', width: 400, paddingTop: 10}} /> 
 </View>
 ); 
 }
 export default CallsScreen;
 const styles = StyleSheet.create( {
 calls:{
 display: "flex",
 flexDirection: "row",
 marginTop: 10,
 marginLeft: 10
 },
 callicon:{
 display: "flex",
 flexDirection: "row",
 },
 callstructure:{
 marginLeft: 20,
 paddingTop: 10
 }
 } );