import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Fingers = (props) => {
   

  return (
   
    <TouchableOpacity
  onPress={props.onPress}
  style={[styles.button, props.style]}
>
  <Image resizeMode='contain' source={props.source} style={{height:30, width:30}}/>
</TouchableOpacity>
    
  );
}
const styles = StyleSheet.create({
   
    button: {
     padding:10,
      borderRadius: 5,
      height:50, 
      margin:'2%'
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
export default Fingers;
