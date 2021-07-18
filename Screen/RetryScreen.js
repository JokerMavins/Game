import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RetryScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.cardIcon}>
            <FontAwesome name="hourglass" size={200} color="#ffffff"/>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.button}>
                <Text style={styles.buttonText}>Reessayer</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    cardIcon:{
        width: 250,
        height: 250,
        elevation: 2,
        backgroundColor: "#545454",
        borderRadius: 10,
        marginVertical: 100,
        justifyContent: 'center',
        alignItems: "center"
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 200,
        backgroundColor: '#055AEC', 
        height: 50,
        marginVertical: 10
    },
    buttonText:{
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})


export default RetryScreen;