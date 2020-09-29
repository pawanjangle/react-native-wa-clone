import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const ChatScreen = () =>{
return( 
<View>
 <View style = {styles.chatstructure}>
 <Avatar.Image size={50} source={require('../assets/pawan.jpg')} /> 
 <View style = {{ marginLeft: 20,marginVertical:5}}>
<Text style = {{fontSize: 18, fontWeight: "bold"}}>Pawan</Text>
<View style ={ styles.chattext}>
<MaterialCommunityIcons name="check-all" size={24} color="#00b8e6" />
<Text>hi</Text>
</View>
 </View>
 <Text style = {{ marginLeft: 170, paddingVertical: 15}}>9.45 pm</Text>
 </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', width: 400 }} />
     <View style = {styles.chatstructure}>
 <Avatar.Image size={50} source={require('../assets/pawan.jpg')} /> 
 <View style = {{ marginLeft: 20,marginVertical:5}}>
<Text style = {{fontSize: 18, fontWeight: "bold"}}>Pawan</Text>
<View style ={ styles.chattext}>
<MaterialCommunityIcons name="check-all" size={24} color="#00b8e6" />
<Text>hi</Text>
</View>
 </View>
 <Text style = {{ marginLeft: 170, paddingVertical: 15}}>9.45 pm</Text>
 </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', width: 400 }} />
     <View style = {styles.chatstructure}>
 <Avatar.Image size={50} source={require('../assets/pawan.jpg')} /> 
 <View style = {{ marginLeft: 20,marginVertical:5}}>
<Text style = {{fontSize: 18, fontWeight: "bold"}}>Pawan</Text>
<View style ={ styles.chattext}>
<MaterialCommunityIcons name="check-all" size={24} color="#00b8e6" />
<Text>hi</Text>
</View>
 </View>
 <Text style = {{ marginLeft: 170, paddingVertical: 15}}>9.45 pm</Text>
 </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', width: 400 }} />
     <View style = {styles.chatstructure}>
 <Avatar.Image size={50} source={require('../assets/pawan.jpg')} /> 
 <View style = {{ marginLeft: 20,marginVertical:5}}>
<Text style = {{fontSize: 18, fontWeight: "bold"}}>Pawan</Text>
<View style ={ styles.chattext}>
<MaterialCommunityIcons name="check-all" size={24} color="#00b8e6" />
<Text>hi</Text>
</View>
 </View>
 <Text style = {{ marginLeft: 170, paddingVertical: 15}}>9.45 pm</Text>
 </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', width: 400 }} />
 </View>
 ); 
 }
 export default ChatScreen;
 const styles = StyleSheet.create( {
 chatstructure:{
 display: "flex",
 flexDirection: "row",
 marginVertical:15,
 marginLeft: 10
 },
 chattext:{
 display: "flex",
 flexDirection: "row"
 }
 } )