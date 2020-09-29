import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';
import CameraScreen  from './camera';
import ChatScreen from './chats';
import  StatusScreen  from './status';
import CallsScreen from './calls';


const Tab = createMaterialTopTabNavigator();

export default function TabScreen() {

return (
<NavigationContainer>

<Tab.Navigator 
 initialRouteName="chats"
showIcon = "true"
showLabel = "false"
tabBarOptions={{
iconStyle: {
backgroundColor: "yellow"
},
labelStyle: { 
fontWeight: "bold"
 },
activeTintColor: "white",
style : {  backgroundColor: "#156b59"}
}}
>

<Tab.Screen name ="camera" component={ CameraScreen }
options =  {{tabBarIcon : ( focused: true, color: "red" ) =>{
<View>
<AntDesign name="camera" size={24} color="red" />
</View>
}}}
/>

<Tab.Screen name="Chats" component={ ChatScreen } 
options={{ tabBarLabel: 'Chats' ,
tabBarBadge: 2
}}
/>

<Tab.Screen name="Status" component={ StatusScreen } 
options={{ tabBarLabel: 'Status' }}
/>

<Tab.Screen name="Calls" component={ CallsScreen } 
options={{ tabBarLabel: 'Calls' }}
/>

</Tab.Navigator>

</NavigationContainer>

);

}
const styles = StyleSheet.create( {
 container:{

 fontWeight: "bold"
 }
 } );