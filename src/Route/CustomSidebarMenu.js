import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import { Colors } from '../Constants/Colors';
import { NavigationString } from './NavigationString';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const CustomSidebarMenu = props => {
  const {state} = props;
  const {routes, index} = state;
  const focusedRoute = routes[index];

 


  

  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.Dark}}>
      <View style={{height: '15%', marginBottom: 10}}>
        <View
          style={{
            height: '100%',
            flexDirection: 'row',
            width: '100%',
            marginLeft: 25,
            marginBottom: 50,
          }}>
         
          
        </View>
      </View>
      <View
        {...props}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <View>
          <DrawerItem
            label=""
            onPress={() => {
              props.navigation.navigate(NavigationString.Home);
            }}
            icon={({color, size, focused}) => (
              <View style={styles.drawerItem}>
                <View style={{width: 25, height: 25}}>
                <Entypo
                name="home"
                size={24}
                color={focusedRoute.name === NavigationString.Home ? Colors.blue : Colors.white}
              />
                </View>
                <Text
                  style={
                    focusedRoute.name === NavigationString.Home
                      ? styles.activitems
                      : styles.inActiveitems
                  }>
                  Home
                </Text>
              </View>
            )}
            style={
              focusedRoute.name === NavigationString.Home ? styles.active : styles.inActive
            }
          />

        

          <DrawerItem
            label=""
            onPress={() => {
              props.navigation.navigate(NavigationString.Education);
            }}
            icon={({color, size, focused}) => (
              <View style={styles.drawerItem}>
                <View style={{width: 25, height: 25}}>
                <Entypo
                name="home"
                size={24}
                color={focusedRoute.name === NavigationString.Education ? Colors.blue : Colors.white}
              />
                </View>
                <Text
                  style={
                    focusedRoute.name === NavigationString.Education
                      ? styles.activitems
                      : styles.inActiveitems
                  }>
                  Education
                </Text>
              </View>
            )}
            style={
              focusedRoute.name === NavigationString.Education ? styles.active : styles.inActive
            }
          />



          <DrawerItem
            label=""
            onPress={() => {
              props.navigation.navigate(NavigationString.Skills);
            }}
            icon={({color, size, focused}) => (
              <View style={styles.drawerItem}>
                <View style={{width: 25, height: 25}}>
                <MaterialIcons
                name="workspace-premium"
                size={24}
                color={focusedRoute.name === NavigationString.Skills ? Colors.blue : Colors.white}
              />
                </View>
                <Text
                  style={
                    focusedRoute.name ===NavigationString.Skills
                      ? styles.activitems
                      : styles.inActiveitems
                  }>
                  Skills
                </Text>
              </View>
            )}
            style={
              focusedRoute.name === NavigationString.Skills ? styles.active : styles.inActive
            }
          />
          

          <DrawerItem
            label=""
            onPress={() => {
              props.navigation.navigate(NavigationString.Addition);
            }}
            icon={({color, size, focused}) => (
              <View style={styles.drawerItem}>
                <View style={{width: 25, height: 25}}>
                <Entypo
                name="game-controller"
                size={24}
                color={focusedRoute.name === NavigationString.Addition ? Colors.blue : Colors.white}
              />
                </View>
                <Text
                  style={
                    focusedRoute.name === NavigationString.Addition
                      ? styles.activitems
                      : styles.inActiveitems
                  }>
                  Game
                </Text>
              </View>
            )}
            style={
              focusedRoute.name === NavigationString.Addition ? styles.active : styles.inActive
            }
          />


          <DrawerItem
          label=""
          onPress={() => {
            props.navigation.navigate(NavigationString.Contact);
          }}
          icon={({color, size, focused}) => (
            <View style={styles.drawerItem}>
              <View style={{width: 25, height: 25}}>
              <AntDesign
              name="contacts"
              size={24}
              color={focusedRoute.name === NavigationString.Contact ? Colors.blue : Colors.white}
            />
              </View>
              <Text
                style={
                  focusedRoute.name === NavigationString.Contact
                    ? styles.activitems
                    : styles.inActiveitems
                }>
                Contact
              </Text>
            </View>
          )}
          style={
            focusedRoute.name === NavigationString.Contact ? styles.active : styles.inActive
          }
        />



        <DrawerItem
        label=""
        onPress={() => {
          props.navigation.navigate(NavigationString.Mosquito);
        }}
        icon={({color, size, focused}) => (
          <View style={styles.drawerItem}>
            <View style={{width: 25, height: 25}}>
            <FontAwesome6
            name="mosquito"
            size={20}
            color={focusedRoute.name === NavigationString.Mosquito ? Colors.blue : Colors.white}
          />
            </View>
            <Text
              style={
                focusedRoute.name === NavigationString.Mosquito
                  ? styles.activitems
                  : styles.inActiveitems
              }>
              Mosquito
            </Text>
          </View>
        )}
        style={
          focusedRoute.name === NavigationString.Contact ? styles.active : styles.inActive
        }
      />
         
        </View>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: '95%',
    height: 60,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  inActiveitems: {
    marginLeft: 10,
    fontSize: 15,
    color:Colors.white,
  },
  activitems: {
    marginLeft: 10,
    fontSize: 15,
    color: Colors.blue,
    fontWeight:'bold',
  },
  active: {
    backgroundColor:Colors.lightblue,
    color:Colors.black,
  },
  inActive: {
    backgroundColor: Colors.Dark,
  },
});



export default CustomSidebarMenu;