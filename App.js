import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AuthContext } from './Screen/AuthContext';

const Stack = createStackNavigator();

// Screen
import Home from './Screen/Home';
import Play from './Screen/Play';
import Results from './Screen/Results';



export default function App() {

  const initialGameState = {
    score: 0,
    isPlay:  false,
    currentQuestion: null,
    showScore: false,
    questions: [null],
  }

  const GameReducer = (prevState, action) => {
      switch(action.type) {
        case 'ADD_QUESTIONS':
        return{
          ...prevState,

        };
        case 'STOP_GAME':
        return{
          ...prevState,
          isPlay: false,
          showScore: true,

        };
        case 'START_GAME':
        return{
          ...prevState,
          isPlay: true,
          showScore: false,

        };
        case 'NEXT_QUESTION':
        return{
          ...prevState,

        };
        case 'INIT_GAME':
        return{
          ...prevState,
          isPlay: false,
          showScore: false,

        };
        case 'INCREMENT_SCORE':
        return{
          ...prevState,

        };
      }
  }

  const [GameState, dispatch] = React.useReducer(GameReducer, initialGameState);

  const authContext = React.useMemo(()=>({

    add_questions: async(movieTitle,moviePoster,actorName,actorPoster,expectedAnswer) => {

      dispatch({ type: 'ADD_QUESTIONS' });

    },

    stop_game: async() => {
      
      dispatch({ type: 'STOP_GAME'});

    },

    start_game: async ()=>{

     dispatch({ type:'START_GAME'});

    },

    go_to_next: async ()=>{

     dispatch({ type:'NEXT_QUESTION'});

    },

    init_game: async ()=>{
      
     dispatch({ type:'INIT_GAME'});

    },

    increment_score: async ()=>{
      
     dispatch({ type:'INCREMENT_SCORE'});

    },
  }));

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
        { GameState.isPlay == false && GameState.showScore == false ?
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          : GameState.isPlay == true && GameState.showScore == false ?
          <Stack.Screen name="Play" component={Play} options={{headerShown: false}}/>
          :
          <Stack.Screen name="Results" component={Results} options={{headerShown: false}}/>
        }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
