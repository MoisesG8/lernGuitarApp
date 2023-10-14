import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LoginComponent from './components/LoginComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';
import Navigation from './navigation/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
