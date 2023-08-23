import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import DrawerScreenWraper from '../Route/DrawerScreenWraper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';
import { Colors } from '../Constants/Colors';


const DURATION = 400;

const detail = [
  {
    id: '1',
    name: 'Icon 1',
    backgroundColor: '#3498db',
    icon: 'star', // AntDesign icon name
  },
  {
    id: '2',
    name: 'Icon 2',
    backgroundColor: '#e74c3c',
    icon: 'heart', // AntDesign icon name
  },
  {
    id: '3',
    name: 'Icon 3',
    backgroundColor: '#2ecc71',
    icon: 'like1', // AntDesign icon name
  },
];



const About = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <DrawerScreenWraper>
      <View style={{flex: 1, backgroundColor: item.color, height: '40%' + 32}}>
        <AntDesign
          name="arrowleft"
          size={28}
          style={{
            padding: 12,
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 2,
          }}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <SharedElement SharedElement id={`item.${item.key}.container`}>
        <View style={{flexDirection: 'row', margin: 50}}>
        <View style={{flexDirection: 'column'}}>
        <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: Colors.white,
          marginTop: 100,
        }}>
        {item.name}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.white}}>
        {item.jobTitle}
        </Text>
        </View>
        <Image
        source={{uri: item.image}}
        style={{
          width: 150,
          height: 150,
          borderRadius: 500,
          marginRight: 16,
          marginTop: 40,
          marginLeft: 20,
        }}
        />
        </View>
        
        </SharedElement>
        <SharedElement id="general.bg" style={styles.bg}>
        <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        {detail.map((detail, index)=>{
          return(
            <Animatable.View animation='bounceIn' delay={DURATION + index * 100} key={`${detail.icon}-{index}`} style={{marginTop:50, backgroundColor:detail.backgroundColor, height:64, width:64, borderRadius:32,alignItems:'center', justifyContent:'center'}}>
            <AntDesign name={detail.icon} size={16} color={Colors.white}/>
            </Animatable.View>
            )
          })}
          </View>
          </ScrollView>
        
        </View>
        </SharedElement>
      </View>
    </DrawerScreenWraper>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: '100%',
    height: '65%',
    backgroundColor: Colors.Dark,
    transform: [{translateY: 270}],
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding:20
  },
});

About.SharedElement = (route, otherRoute, showing) =>{
  const {item} = route.params;
  return[
    {
      id:`item.${item.key}.bg`
    },
    {
      id:`item.${item.key}.container`
    }
  ];
}

export default About;
