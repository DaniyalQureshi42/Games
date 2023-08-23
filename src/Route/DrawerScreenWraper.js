import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const DrawerScreenWraper = ({children}) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
        {perspective:1000},
      {scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
      {rotateY: `${interpolate(progress.value, [0, 1], [1, -10], 'clamp')}deg`},
      {translateX: interpolate(progress.value, [0, 1], [1, 0, -100], 'clamp')},
    ],
    
    overflow:'hidden'
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerScreenWraper;
