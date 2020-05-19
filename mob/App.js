import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import {Button, TextInput} from 'react-native-paper'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen' ;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
  // <network-security-config>
  //  <domain-config cleartextTrafficPermitted="true">
  //    <domain includeSubdomains="true">192.168.0.102</domain>
  //  </domain-config>
  //</network-security-config>

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="login" component={LoginScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
