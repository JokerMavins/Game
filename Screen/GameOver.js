import React, { Component,useEffect } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameOver = (props) => {

  useEffect(()=>{
    setTimeout( async () => {
        await AsyncStorage.setItem('score',props.score.toString());
    },1000)
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over</Text>
      <Text style={styles.score}>your score is {props.score} pts</Text>
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
    text:{
        fontSize: 30,
        marginVertical: 10
    },
    score:{
        fontSize: 20,
    }
})

export default GameOver;