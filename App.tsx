import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/index';


export default function App() {


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        style="light"
      />
      <SafeAreaProvider>
        <Text style={styles.text}>This is my game</Text>
        <Navigation />

      </SafeAreaProvider>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31303A',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: '800'
  },

});
