import { StyleSheet, Image } from 'react-native';
import { NavigationContainer,useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import * as React from 'react';


const Tab = createBottomTabNavigator();

export default function Navigation() {

      return (
            <NavigationContainer >
                  <Tab.Navigator 
                        screenOptions={ {
                              headerShown: false,
          
                              tabBarShowLabel: false,
                              tabBarActiveTintColor: '#25E698',
                              tabBarInactiveTintColor: '#FF914D',                     
                              tabBarStyle: { backgroundColor: '#31303A', borderTopColor:'#31303A', paddingTop: 8, paddingBottom: 10, minHeight: 64, width: 390 } 
                        }}>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                  </Tab.Navigator>
            </NavigationContainer>
      )
}

const styles = StyleSheet.create({
      nav: {
            backgroundColor: '#e11111f3',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30
      },

      text1: {
            fontSize: 20,
            fontWeight: "700",
            marginTop: 50
      },
      navigationContainer: {

      }
});