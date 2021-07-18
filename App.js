import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screen
import HomeScreen from './Screen/HomeScreen';
import HistoryScreen from './Screen/HistoryScreen';
import OptionsScreen from './Screen/OptionsScreen';
import GameScreen from './Screen/GameScreen';
import SplashScreen from './Screen/SplashScreen';
import RetryScreen from './Screen/RetryScreen';
import GameOver from './Screen/GameOver';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="GameScreen" component={GameScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RetryScreen" component={RetryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HistoryScreen" component={HistoryScreen}/>
        <Stack.Screen name="OptionsScreen" component={OptionsScreen}/>
        <Stack.Screen name="GameOver" component={GameOver}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*<Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>*/