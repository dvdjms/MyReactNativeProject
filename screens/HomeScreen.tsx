import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {


      return (

            <SafeAreaView style={styles.container}>

              <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.text}>David</Text>
              </ScrollView>

      
              <ScrollView showsVerticalScrollIndicator={false}>
                  <Text>fff</Text>
              </ScrollView>
  
          </SafeAreaView>

      )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#25242B'
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
        paddingTop: 10,
      },

    })