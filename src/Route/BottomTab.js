import React from 'react';
import { View, Text } from 'react-native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import { DrawerNavigation } from './Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Education from '../Screens/Education';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreenWraper from './DrawerScreenWraper';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Education" component={Education} />
    </Stack.Navigator>
  );
}

const BottomTab = () => {
  return (
    <DrawerScreenWraper>
    <Tab.Navigator  initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Tab.Screen name="Home" component={HomeStack}  />
    <Tab.Screen name="About" component={About} />
  </Tab.Navigator>
  </DrawerScreenWraper>
  );
}

export default BottomTab;
