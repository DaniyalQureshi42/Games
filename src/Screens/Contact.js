import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'; // Added Dimensions
import LottieView from 'lottie-react-native';
import { Path } from '../Constants/Path';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DrawerScreenWraper from '../Route/DrawerScreenWraper';
import LottieButton from '../Components/LottieButton';
const Contact = () => {
  const screenWidth = Dimensions.get('window').width; // Get the screen width

  return (
    <DrawerScreenWraper>
       <View>
      <LottieView source={Path.Lottie3} autoPlay loop style={{ height: scale(300), width: '100%' }} />
      <View style={{ position: 'absolute', top:scale(80), alignSelf: 'center', marginTop:1.5 }}>
        <Image
          source={Path.Tom}
          style={{
            height: scale(140),
            borderRadius: 500,
            aspectRatio: 1,
            width: screenWidth * scale(0.6),

          }}
        />
      </View>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      
     <LottieButton
     source={Path.Call}
     />

     <LottieButton
     source={Path.Whatsapp}
     />


     <LottieButton
     source={Path.Email}
     />
      </View>


      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      
      <LottieButton
     source={Path.Linkedin}
     />

     <LottieButton
     source={Path.Github}
     />


     
      </View>
    </View>
    </DrawerScreenWraper>
 
  );
}

export default Contact;
