import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import { Appbar } from 'react-native-paper';
const HeaderScreen = () =>{
const _goBack = () => console.log('Went back'); const _handleSearch = () => console.log('Searching'); const _handleMore = () => console.log('Shown more'); 
return( 
 <View>
 <Appbar.Header style = { styles.container}>
<Appbar.Content title="Whatsapp" />
<Appbar.Action icon="magnify"  />
 <Appbar.Action icon="dots-vertical" /> 
 </Appbar.Header>
 </View>
 ); 
 }
 export default HeaderScreen;
 const styles = StyleSheet.create( {
 container:{
 backgroundColor: "#156b59"
 }
 } );
