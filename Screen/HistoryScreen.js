import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score : 0,
    };
  }

  componentDidMount = async()=> {
      this.setState({score: await AsyncStorage.getItem('score')});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Le meilleur score est de {this.state.score} pts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },
  text: {
    fontSize: 16
  }
})