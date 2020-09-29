import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'; 
import { Avatar } from 'react-native-paper';
const StatusScreen = () =>{
return( 
<View>
 <View style = {styles.userflex}>
<Avatar.Image style ={styles.imageflex}
size={50} source={require('../assets/splash.png')} />
<View style = {styles.textflex}>
<Text style = {styles.usertext}>My status</Text>
<Text style = {styles.updatestatustext}>Tap to add status update</Text>
</View>
<View style = {styles.usericon}
icon ="dots-horizontal">
</View>
</View>
 <View style = {styles.updatecontainer}>
 <Text style = {styles.updatetext}>Viewed updates</Text>
 </View>
 <View style = {styles.friendstatus}>
 <Avatar.Image style = {styles.friendsimage}
size={50} source={require('../assets/splash.png')} />
<Text style = { styles.friendstext}>Pawan Jangle</Text>
  </View>
   <View style={{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', width: 400, paddingTop: 10}} /> 
 </View> 
 ); 
 }
 export default StatusScreen;
 const styles = StyleSheet.create( {
 imageflex: {
margin: 10
 },
 userflex: {
 display: "flex",
 flexDirection: "row"
 },
 usertext:{
 marginHorizontal: 25,
 paddingTop: 15,
 fontWeight: "bold"
 },
 updatestatustext:{
 marginHorizontal: 25,
 },
 textflex:{
 display: "flex",
 flexDirection: "column"
 },
 usericon:{

 },
 friendstatus:{
 display: "flex",
 flexDirection: "row",
 marginTop: 10
 },
 updatetext:{ 
 padding: 10
 },
 updatecontainer:{
 backgroundColor: "#e8e8e8",
 height: 35
 },
 friendsimage:{
 marginHorizontal: 10
 },
 friendstext:{
 fontWeight: "bold",
 marginTop: 15,
 marginHorizontal: 25
 }
 } );