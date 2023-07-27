import { StatusBar } from 'expo-status-bar';
import React, {useCallback} from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/index';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
  
// SplashScreen.preventAutoHideAsync();

export default function App() {


  // const [fontsLoaded] = useFonts({
  //   'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  //   'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (

    // <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
    <SafeAreaView style={styles.container} >
      <SafeAreaProvider  >
        <StatusBar
          style="light"
        />
        <Text style={styles.text}>This is my project</Text>
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
