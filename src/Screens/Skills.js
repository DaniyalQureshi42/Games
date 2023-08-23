import React, {useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,  Animated } from 'react-native';
import { Image } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationString } from '../Route/NavigationString';
import DrawerScreenWraper from '../Route/DrawerScreenWraper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const data = [
    {
      id: '1',
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      image: 'https://i.pinimg.com/1200x/cf/5d/f7/cf5df7e4e7804644a43be3f66a224b9d.jpg', // Example kitten image
      Location: 'New York America',
      numberOfDays:12

    },
    {
      id: '2',
      name: 'Jane Smith',
      jobTitle: 'Product Designer',
      image: 'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg', // Example kitten image
      Location: 'London England',
      numberOfDays:12

    },
    {
      id: '3',
      name: 'Alice Johnson',
      jobTitle: 'Marketing Manager',
      image: 'https://wallpaperaccess.com/full/170249.jpg', // Example kitten image
      Location: 'Torento Canada',
      numberOfDays:12

    },
    {
      id: '4',
      name: 'Bob Brown',
      jobTitle: 'Sales Representative',
      image: 'https://cdn.wallpapersafari.com/1/17/ZMBC10.jpg', // Example kitten image
      Location: 'Beijing China',
      numberOfDays:12

    },
    {
      id: '5',
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      image: 'https://webneel.com/wallpaper/sites/default/files/images/06-2013/beautiful%20sky%20tree%20wallpaper.jpg', // Example kitten image
      Location: 'Jurusilam Israel',
      numberOfDays:12

    },
    {
      id: '6',
      name: 'Jane Smith',
      jobTitle: 'Product Designer',
      image: 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg', // Example kitten image
      Location: 'Mosco Russia',
      numberOfDays:12

    },
    {
      id: '7',
      name: 'Alice Johnson',
      jobTitle: 'Marketing Manager',
      image: 'https://c4.wallpaperflare.com/wallpaper/26/26/373/full-size-hd-nature-1920x1200-wallpaper-preview.jpg', // Example kitten image
      Location: 'Delhi India',
      numberOfDays:12

    },
    {
      id: '8',
      name: 'Bob Brown',
      jobTitle: 'Sales Representative',
      image: 'https://www.pixelstalk.net/wp-content/uploads/2016/03/Nature-Wallpaper-HD-Desktop-free.jpg', // Example kitten image
      Location: 'Paris France',
      numberOfDays:12

    },
  ];



  const Skills = ({navigation}) => {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
      <DrawerScreenWraper>
      <SafeAreaView style={{backgroundColor:Colors.Dark, marginTop:'auto', marginBottom:'auto'}}>
      
       <Animated.FlatList
       data={data}
       showsHorizontalScrollIndicator={false}
       horizontal
       snapToInterval={200} 
       decelerationRate='fast'
       onScroll={Animated.event([
         {nativeEvent:{contentOffset:{x:scrollX}}}
       ],{useNativeDriver: true})}
       keyExtractor={item => item.id}
       renderItem={({ item, index }) => {
         const inputRange = [(index -1) * 200, index *200, (index + 1) * 200,];
         const translateX = scrollX.interpolate({
             inputRange,
             outputRange: [50, 0, -50]
         });
         const scale = scrollX.interpolate({
           inputRange,
           outputRange:[1, 1.1, 1],
         })
         return (
           <TouchableOpacity style={styles.itemContainer} onPress={()=>{navigation.push(NavigationString.Projects, {item})}}>
             <View style={[StyleSheet.absoluteFillObject, { borderRadius:20, marginTop:20}]}>
             <Animated.Image source={{ uri: item.image }} style={[styles.image, {transform:[{scale}]} ] } />
             </View>
             <Animated.Text style={[styles.location, { transform: [{ translateX }] }]}>
             {item.Location}
           </Animated.Text>
           
             <Animated.View style={[styles.days, { transform: [{ translateX }] }]}>
             <Text style={styles.daysValue}>{item.numberOfDays}</Text>
             <Text style={styles.daysLabel}>days</Text>
             </Animated.View>
           </TouchableOpacity>
         );
       }}
     />
      
      </SafeAreaView>
      </DrawerScreenWraper>
    );
  };

const styles = StyleSheet.create({
    itemContainer:{
        width: 200,
        height: 500,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: '100%',
        height: '80%', // Adjust the height to fit your design
        borderRadius: 10,
        marginBottom: 10,
      },
      location:{
        fontSize:30,
        color:Colors.white,
        fontWeight:'800',
        width:'80%',
        textTransform:'uppercase',
        position:'absolute',
        top:50,
        left:20,
      },
      days:{
        position:'absolute',
        bottom: 100,
        left:20,
        width:52,
        height:52,
        borderRadius:26,
        backgroundColor:'tomato',
        justifyContent:'center',
        alignItems:'center',
      },
      daysValue:{
        fontWeight:'800',
        color:Colors.white,
        fontSize:18,
      },
      daysLabel:{
        color:Colors.white,
        fontSize:10
      }

})

export default Skills;
