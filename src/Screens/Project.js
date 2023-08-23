import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Constants/Colors';

const Projects = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:Colors.Dark}}>
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
      <View
        style={[
          StyleSheet.absoluteFillObject
        ]}>
        <Image
          source={{uri: item.image}}
          style={[styles.image]}
        />
      </View>
      <Text style={{color:Colors.white, fontSize:150}}>Hello</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: '100%', // Adjust the height to fit your design
      }
     

})
export default Projects;
