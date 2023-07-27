import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';


export default function HomeScreen() {


      return (

            <SafeAreaView style={styles.container}>

              <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                  <Text style={styles.text}>David James</Text>
              </ScrollView>

      
              <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                  <Text style={styles.text}>Edinburgh</Text>
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
      scrollview: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
        paddingTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        width: 300,
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 7,
   
      },
})