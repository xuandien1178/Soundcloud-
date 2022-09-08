import 'react-native-gesture-handler';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import Home from '../components/Home';
import Music from '../components/Music';
import Search from '../components/Search';
import Profile from '../components/Profile';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6D26',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="flash-outline" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="headset-outline" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search-outline" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}/>
      
    </Tab.Navigator>
    
  );
}

export default BottomNavigator;
