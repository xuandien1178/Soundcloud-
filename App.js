import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './components/Splash';
import BottomNavigator from './navigation/BottomNavigator';
import Player from './components/Player'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash screen" component={Splash} />
        <Stack.Screen name="Home" component={BottomNavigator} /> 
        <Stack.Screen name="Player screen" component={Player} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
