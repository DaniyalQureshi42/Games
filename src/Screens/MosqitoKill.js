import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableHighlight, TouchableOpacity, Alert, Button } from 'react-native';
import { Colors } from '../Constants/Colors';
import LottieView from 'lottie-react-native';
import { Path } from '../Constants/Path';
import { Image } from 'react-native-animatable';

const MosqitoKill = ({ navigation }) => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [isPressed, setIsPressed] = useState(false);

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const Speed = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = Math.floor(Math.random() * (windowHeight - 50));
      setX(newX);
      const newY = Math.floor(Math.random() * (windowWidth - 50));
      setY(newY);
    }, Speed);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
        Alert.alert('Game Over', `Your score: ${count}`, [
          { text: 'Play Again', onPress: playAgain },
          { text: 'Go Back', onPress: navigation.goBack },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const playAgain = () => {
    setCount(0);
    setSeconds(30);
  };

  return (
    <View>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: Colors.lightblue,
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}
      >
        <Text style={{ color: Colors.orange, fontSize: 30 }}>Score {count}</Text>
        <Text style={{ color: Colors.red, fontSize: 30 }}>{seconds}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setCount(count + 1);
        }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ position: 'absolute', top: X + 50, left: Y }}
      >
        {isPressed ? (
          <Image source={Path.KilledMosqito} style={{ height: 40, width: 40 }} />
        ) : (
          <LottieView
            source={Path.Mosqito}
            autoPlay
            loop
            style={{ height: 40, width: 40 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MosqitoKill;
