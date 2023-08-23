import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
import  {Path } from '../../Constants/Path';
import Fingers from '../../Components/Fingers';
import { Colors } from '../../Constants/Colors';
import DrawerScreenWraper from '../../Route/DrawerScreenWraper';


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Substruction = ({ navigation }) => {
  const [randomInt1, setRandomInt1] = useState(0);
  const [randomInt2, setRandomInt2] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [count, setCount]= useState(0);
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const num1 = getRandomInteger(1, 99);
    const num2 = getRandomInteger(1, num1-1);
    setRandomInt1(num1);
    setRandomInt2(num2);
  };

  const checkAnswer = () => {
    const sum = randomInt1 - randomInt2;
    const userAnswer = index1 + index2 + index3 + index4 + index5 +index6 + index7 + index8 + index9  + index10 + index20 + index30 + index40 + index50 + index60 + index70 + index80 + index90 ;
    if (userAnswer === sum) {
      Alert.alert('Correct', 'Your answer is right!', [
        { text: 'OK', onPress: generateRandomNumbers }
      ]);

      setCount(count+1);
      resetState();

      if(count === 9){
        navigation.navigate('Minus')
      }
      
    } else {
      Alert.alert('Incorrect', 'Try again!', [
        { text: 'OK', onPress: () => setUserInput('') }
      ]);
      console.log(userAnswer);
      setCount(count-1);
    }
  };


  const [isToggled1, setIsToggled1] = useState(false);
  const [index1, setIndex1] = useState(0);

  const [isToggled2, setIsToggled2] = useState(false);
  const [index2, setIndex2] = useState(0);

  const [isToggled3, setIsToggled3] = useState(false);
  const [index3, setIndex3] = useState(0);

  const [isToggled4, setIsToggled4] = useState(false);
  const [index4, setIndex4] = useState(0);

  const [isToggled5, setIsToggled5] = useState(false);
  const [index5, setIndex5] = useState(0);

  const [isToggled6, setIsToggled6] = useState(false);
  const [index6, setIndex6] = useState(0);

  const [isToggled7, setIsToggled7] = useState(false);
  const [index7, setIndex7] = useState(0);

  const [isToggled8, setIsToggled8] = useState(false);
  const [index8, setIndex8] = useState(0);

  const [isToggled9, setIsToggled9] = useState(false);
  const [index9, setIndex9] = useState(0);

  const [isToggled10, setIsToggled10] = useState(false);
  const [index10, setIndex10] = useState(0);

  const [isToggled20, setIsToggled20] = useState(false);
  const [index20, setIndex20] = useState(0);

  const [isToggled30, setIsToggled30] = useState(false);
  const [index30, setIndex30] = useState(0);

  const [isToggled40, setIsToggled40] = useState(false);
  const [index40, setIndex40] = useState(0);

  const [isToggled50, setIsToggled50] = useState(false);
  const [index50, setIndex50] = useState(0);

  const [isToggled60, setIsToggled60] = useState(false);
  const [index60, setIndex60] = useState(0);

  const [isToggled70, setIsToggled70] = useState(false);
  const [index70, setIndex70] = useState(0);

  const [isToggled80, setIsToggled80] = useState(false);
  const [index80, setIndex80] = useState(0);

  const [isToggled90, setIsToggled90] = useState(false);
  const [index90, setIndex90] = useState(0);

  const resetState = () => {
    setIsToggled1(false);
    setIsToggled2(false);
    setIsToggled3(false);
    setIsToggled4(false);
    setIsToggled5(false);
    setIsToggled6(false);
    setIsToggled7(false);
    setIsToggled8(false);
    setIsToggled9(false);
    setIsToggled10(false);
    setIsToggled20(false);
    setIsToggled30(false);
    setIsToggled40(false);
    setIsToggled50(false);
    setIsToggled60(false);
    setIsToggled70(false);
    setIsToggled80(false);
    setIsToggled90(false);
    setIndex1(0)
    setIndex2(0)
    setIndex3(0)
    setIndex4(0)
    setIndex5(0)
    setIndex6(0)
    setIndex7(0)
    setIndex8(0)
    setIndex9(0)
    setIndex10(0)
    setIndex20(0)
    setIndex30(0)
    setIndex40(0)
    setIndex50(0)
    setIndex60(0)
    setIndex70(0)
    setIndex80(0)
    setIndex90(0)
  };


  const handleToggle1 = () => {
    setIsToggled1(!isToggled1);
    setIndex1(isToggled1 ? 0 : 1);
  };


  const handleToggle2 = () => {
    setIsToggled2(!isToggled2);
    setIndex2(isToggled2 ? 0 : 2);
  };

  const handleToggle3 = () => {
    setIsToggled3(!isToggled3);
    setIndex3(isToggled3 ? 0 : 3);
  };

  const handleToggle4 = () => {
    setIsToggled4(!isToggled4);
    setIndex4(isToggled4 ? 0 : 4);
  };

  const handleToggle5 = () => {
    setIsToggled5(!isToggled5);
    setIndex5(isToggled5 ? 0 : 5);
  };


  const handleToggle6 = () => {
    setIsToggled6(!isToggled6);
    setIndex6(isToggled6 ? 0 : 6);
  };

  const handleToggle7 = () => {
    setIsToggled7(!isToggled7);
    setIndex7(isToggled7 ? 0 : 7);
  };

  const handleToggle8 = () => {
    setIsToggled8(!isToggled8);
    setIndex8(isToggled8 ? 0 : 8);
  };

  const handleToggle9 = () => {
    setIsToggled9(!isToggled9);
    setIndex9(isToggled9 ? 0 : 9);
  };


 
  const handleToggle10 = () => {
    setIsToggled10(!isToggled10);
    setIndex10(isToggled10 ? 0 : 10);
  };

  const handleToggle20 = () => {
    setIsToggled20(!isToggled20);
    setIndex20(isToggled20 ? 0 : 20);
  };

  const handleToggle30 = () => {
    setIsToggled30(!isToggled30);
    setIndex30(isToggled30 ? 0 : 30);
  };

  const handleToggle40 = () => {
    setIsToggled40(!isToggled40);
    setIndex40(isToggled40 ? 0 : 40);
  };

  const handleToggle50 = () => {
    setIsToggled50(!isToggled50);
    setIndex50(isToggled50 ? 0 : 50);
  };


  const handleToggle60 = () => {
    setIsToggled60(!isToggled60);
    setIndex60(isToggled60 ? 0 : 60);
  };

  const handleToggle70 = () => {
    setIsToggled70(!isToggled70);
    setIndex70(isToggled70 ? 0 : 70);
  };

  const handleToggle80 = () => {
    setIsToggled80(!isToggled80);
    setIndex80(isToggled80 ? 0 : 80);
  };

  const handleToggle90 = () => {
    setIsToggled90(!isToggled90);
    setIndex90(isToggled90 ? 0 : 90);
  };

 


 const Btnstyle1 =  {backgroundColor: isToggled1 ? Colors.red : Colors.blue};
 const Btnstyle2 =  {backgroundColor: isToggled2 ? Colors.red : Colors.blue};
 const Btnstyle3 =  {backgroundColor: isToggled3 ? Colors.red : Colors.blue};
 const Btnstyle4 =  {backgroundColor: isToggled4 ? Colors.red : Colors.blue};
 const Btnstyle5 =  {backgroundColor: isToggled5 ? Colors.red : Colors.blue};
 const Btnstyle6 =  {backgroundColor: isToggled6 ? Colors.red : Colors.blue};
 const Btnstyle7 =  {backgroundColor: isToggled7 ? Colors.red : Colors.blue};
 const Btnstyle8 =  {backgroundColor: isToggled8 ? Colors.red : Colors.blue};
 const Btnstyle9 =  {backgroundColor: isToggled9 ? Colors.red : Colors.blue};
 const Btnstyle10 =  {backgroundColor: isToggled10 ? Colors.red : Colors.blue};
 const Btnstyle20 =  {backgroundColor: isToggled20 ? Colors.red : Colors.blue};
 const Btnstyle30 =  {backgroundColor: isToggled30 ? Colors.red : Colors.blue};
 const Btnstyle40 =  {backgroundColor: isToggled40 ? Colors.red : Colors.blue};
 const Btnstyle50 =  {backgroundColor: isToggled50 ? Colors.red : Colors.blue};
 const Btnstyle60 =  {backgroundColor: isToggled60 ? Colors.red : Colors.blue};
 const Btnstyle70 =  {backgroundColor: isToggled70 ? Colors.red : Colors.blue};
 const Btnstyle80 =  {backgroundColor: isToggled80 ? Colors.red : Colors.blue};
 const Btnstyle90 =  {backgroundColor: isToggled90 ? Colors.red : Colors.blue};
 


  return (
    <DrawerScreenWraper>
    <View style={{flex: 1,backgroundColor:Colors.Dark}}>

    <Text style={{fontSize:40, color:Colors.blue, alignSelf:'center'}}> Addition </Text>
    <View style={{flexDirection:'row', marginTop:20}}>
    <Text style={{fontSize:20, color:Colors.blue}}> Score </Text> 
    <Text style={{fontSize:20, color:Colors.red}}>{count}/10</Text> 
    </View>
     


     <View style={{  justifyContent: 'center', alignItems: 'center', marginTop:50  }}>
    
    
    
    <Text style={styles.text}>{randomInt1}</Text>
      <Text style={styles.text}>{randomInt2}</Text>
     
<View style={{flexDirection:'row', alignSelf:'center'}}>
   

<Fingers 
    style={Btnstyle1}
    onPress={handleToggle1}
    source={Path.a1} />

 


    <Fingers 
    style={Btnstyle2}
    onPress={handleToggle2}
    source={Path.a2} />



    <Fingers 
    style={Btnstyle3}
    onPress={handleToggle3}
    source={Path.a3} />


    <Fingers 
    style={Btnstyle4}
    onPress={handleToggle4}
    source={Path.a4} />


    <Fingers 
    style={Btnstyle5}
    onPress={handleToggle5}
    source={Path.a5} />

</View>


<View style={{flexDirection:'row', alignSelf:'center'}}>
   

<Fingers 
    style={Btnstyle6}
    onPress={handleToggle6}
    source={Path.a6} />

 


    <Fingers 
    style={Btnstyle7}
    onPress={handleToggle7}
    source={Path.a7} />



    <Fingers 
    style={Btnstyle8}
    onPress={handleToggle8}
    source={Path.a8} />


    <Fingers 
    style={Btnstyle9}
    onPress={handleToggle9}
    source={Path.a9} />


   

</View>


<View style={{flexDirection:'row', alignSelf:'center'}}>
   


<Fingers 
    style={Btnstyle10}
    onPress={handleToggle10}
    source={Path.a10} />

 


    <Fingers 
    style={Btnstyle20}
    onPress={handleToggle20}
    source={Path.a20} />



    <Fingers 
    style={Btnstyle30}
    onPress={handleToggle30}
    source={Path.a30} />


    <Fingers 
    style={Btnstyle40}
    onPress={handleToggle40}
    source={Path.a40} />


    <Fingers 
    style={Btnstyle50}
    onPress={handleToggle50}
    source={Path.a50} />

</View>



<View style={{flexDirection:'row', alignSelf:'center'}}>
   

<Fingers 
    style={Btnstyle60}
    onPress={handleToggle60}
    source={Path.a60} />

 


    <Fingers 
    style={Btnstyle70}
    onPress={handleToggle70}
    source={Path.a70} />



    <Fingers 
    style={Btnstyle80}
    onPress={handleToggle80}
    source={Path.a80} />


    <Fingers 
    style={Btnstyle90}
    onPress={handleToggle90}
    source={Path.a90} />


   

</View>

      <TouchableOpacity  onPress={checkAnswer} style={styles.submit} >
      <Text style={styles.textsub}>Submit</Text>
      </TouchableOpacity>
    </View>
    </View>
    </DrawerScreenWraper>
   
  );
};

const styles = StyleSheet.create({
   
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      margin:20
    },
    buttonText: {
      color: Colors.white,
      fontSize: 16,
    },
    text:{
      fontSize:40,
      color:Colors.blue
    },
    submit:{
      marginTop:20,
      backgroundColor:Colors.lightblue,
      padding:15,
      borderRadius:10,
      borderWidth:1,
      borderColor:Colors.black,
    },
    textsub:{
      fontWeight:'bold',
      color:Colors.blue
    }
  });

export default Substruction;
