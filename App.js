import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabScreen from './screens/tabscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from "react-native-paper";
import HeaderScreen from './screens/headerscreen';
export default function App() {
  return (
  <View style = {{ flex: 1}}>
  <PaperProvider>
   <StatusBar style="light" backgroundColor ="#184f43" />
   <HeaderScreen/>
<TabScreen/>
    </PaperProvider>
    </View>
  );
}