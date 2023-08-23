import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import CustomSidebarMenu from './CustomSidebarMenu';
import {routes, screens} from './RouteItems';
import Education from '../Screens/Education';
import {HomeStack} from './BottomTab';
import { Colors } from '../Constants/Colors';
import { NavigationString } from './NavigationString';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Skills from '../Screens/Skills';
import Projects from '../Screens/Project';
import Addition from '../Screens/MathGame/Addition';
import Contact from '../Screens/Contact';
import MosqitoKill from '../Screens/MosqitoKill';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NavigationString.Home}
      screenOptions={{
        
        headerShown: false, 
        drawerType: 'slide',
        
        overlayColor:Colors.transparent,
        drawerStyle:{
          width:'60%',
          backgroundColor:Colors.Dark
        },
        sceneContainerStyle:{
          backgroundColor:Colors.Dark
        },
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name={NavigationString.Home} component={Home} />
      <Drawer.Screen options={{ Animation:'none' }} name={NavigationString.About} component={About} />
      <Drawer.Screen name={NavigationString.Education} component={Education} />
      <Drawer.Screen name={NavigationString.Skills} component={Skills} />
      <Drawer.Screen name={NavigationString.Projects} component={Projects} />
      <Drawer.Screen name={NavigationString.Addition} component={Addition} />
      <Drawer.Screen name={NavigationString.Contact} component={Contact} />
      <Drawer.Screen name={NavigationString.Mosquito} component={MosqitoKill} />
    </Drawer.Navigator>
  );
};

const MyNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationString.DrawerNavigation}
      screenOptions={{headerShown: false}}>
      <Stack.Screen  name={NavigationString.DrawerNavigation} component={DrawerNavigation} />
      <Stack.Screen name={NavigationString.Projects} component={Projects} />

    </Stack.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <MyNavigation />
    </NavigationContainer>
  );
};

export default Routes;
