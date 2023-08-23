import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width; // Get the screen width


const LottieButton = (probs) => {
  return (
    <TouchableOpacity style={{margin:10}} onPress={probs.onPress}>
      <LottieView source={probs.source} autoPlay loop style={{ height: scale(70), width: scale(70) }} />
      </TouchableOpacity>
  );
}

export default LottieButton;
