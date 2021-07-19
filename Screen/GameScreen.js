import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Alert, Image } from 'react-native';
import RetryScreen from './RetryScreen';
import GameOver from './GameOver';
//import data from './data';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 60,
      delay: 500,
      movies: [],
      random: Math.floor(Math.random() * 10),
      score: 5,
      nbrQuestion: 5
    };
  }

  componentDidMount(){

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=a2f7de1a4da4393a6721d045a1ff9e63', {
     method: 'GET',
     headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    })
    .then((response) => response.json())
    .then((result) => {
       this.setState({movies: result.results}) 
    });

    this.interval = setInterval(this.tick, this.state.delay);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.delay !== this.state.delay){
      clearInterval(this.interval);
      this.interval = setInterval(this.tick, this.state.delay);
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {

    const initCount = () => {
      this.setState({
        count: 60
      });
    }

    const verifyResponse=(val)=>{
     if(this.state.nbrQuestion >= 0)
     {
        if(this.state.question.response == val.oui || this.state.question.response == val.non){
          this.setState({score: this.state.score + 5, random: Math.floor(Math.random() * 10)});
          Alert.alert("Reponse",`Bonne Reponse, ${this.state.score}`)
          initCount();
        }
        else{
          Alert.alert("Reponse",'Mauvaise Reponse')
          this.setState({random: Math.floor(Math.random() * 10),});
          initCount();
        }
      this.setState({nbrQuestion: this.state.nbrQuestion - 1 });
     }
    }
    const {navigation, route} = this.props;
    const nbre = this.state.random;
    const film = this.state.movies[nbre];
    console.log(film);
    return (
      <View style={styles.container}>
          { this.state.nbrQuestion >=0 && this.state.count > 0 ? 
          (
            <View style={styles.container}>
              <View style={styles.cardText}>
                  <Text style={styles.timeText}>---------- { "00:" + this.state.count } ----------</Text>
              </View>
              <View style={styles.cardImage}>
                <Image source={film} resizeMode="cover" style={styles.img}/>
              </View>
              <View style={styles.cardText}>
                  <Text style={styles.text}>{film.title}</Text>
              </View>
              <View style={styles.rowDisplay}>
                  <TouchableOpacity onPress={({oui}) => verifyResponse({oui:'oui'})} style={styles.buttons}>
                      <Text style={styles.textButtons}>OUI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={({non}) => verifyResponse({non: 'non'})} style={styles.buttons}>
                      <Text style={styles.textButtons}>NON</Text>
                  </TouchableOpacity>
              </View>
            </View>
          ) : this.state.nbrQuestion >=0 && this.state.count <= 0 ? (
              <RetryScreen/>
          ) : 
             <GameOver score = {this.state.score - 5}/>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  cardImage:{
    width: 250,
    height: 250,
    elevation: 2,
    backgroundColor: "#5D5D5D",
    borderRadius: 10,
    alignSelf: "center"
  },
  cardText:{
    marginVertical: 50,
    alignItems: "center"
  },
  text:{
    fontWeight: '300',
    fontSize: 20,
  },
  rowDisplay:{
    flexDirection: 'row',
  },
  buttons:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: '#055AEC',
    marginHorizontal: 15,
    borderRadius: 10
  },
  textButtons:{
    color: '#FFFFFF',
    fontWeight: '600'
  },
  timeText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  img:{
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  }
})
