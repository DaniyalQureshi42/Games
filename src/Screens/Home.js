import React, {useRef} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {Colors} from '../Constants/Colors';
import DrawerScreenWraper from '../Route/DrawerScreenWraper';
import {ImagePath} from '../Constants/ImagePath';
import {NavigationString} from '../Route/NavigationString';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const data = [
  {
    id: '1',
    name: 'Education',
    jobTitle: 'BS Computer Science',
    image: 'https://www.mul.edu.pk/images/programs/bs-computer-science_1.jpg', // Example kitten image
    color: '#3498db',
    icon:{
      
        id: '1',
        name: 'Icon 1',
        backgroundColor: '#3498db',
        icon: 'book', // AntDesign icon name
     
     
        id: '2',
        name: 'Icon 2',
        backgroundColor: '#e74c3c',
        icon: 'codepen-circle', // AntDesign icon name
   
    
        id: '3',
        name: 'Icon 3',
        backgroundColor: '#2ecc71',
        icon: 'database', // AntDesign icon name
    }
  
  },
  {
    id: '2',
    name: 'Jane Smith',
    jobTitle: 'Product Designer',
    image: 'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg', // Example kitten image
    color: '#e06c',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    jobTitle: 'Marketing Manager',
    image: 'https://wallpaperaccess.com/full/170249.jpg', // Example kitten image
    color: '#2ecc71',
  },
  {
    id: '4',
    name: 'Bob Brown',
    jobTitle: 'Sales Representative',
    image: 'https://cdn.wallpapersafari.com/1/17/ZMBC10.jpg', // Example kitten image
    color: '#f39c12',
  },
  {
    id: '5',
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    image: 'https://webneel.com/wallpaper/sites/default/files/images/06-2013/beautiful%20sky%20tree%20wallpaper.jpg', // Example kitten image
    color: '#34900b',
  },
  {
    id: '6',
    name: 'Jane Smith',
    jobTitle: 'Product Designer',
    image: 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg', // Example kitten image
    color: '#e7400c',
  },
  {
    id: '7',
    name: 'Alice Johnson',
    jobTitle: 'Marketing Manager',
    image: 'https://c4.wallpaperflare.com/wallpaper/26/26/373/full-size-hd-nature-1920x1200-wallpaper-preview.jpg', // Example kitten image
    color: '#200c71',
  },
  {
    id: '8',
    name: 'Bob Brown',
    jobTitle: 'Sales Representative',
    image: 'https://www.pixelstalk.net/wp-content/uploads/2016/03/Nature-Wallpaper-HD-Desktop-free.jpg', // Example kitten image
    color: '#f00c12',
  },
];

const Home = ({navigation}) => {
  return (
    <DrawerScreenWraper>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.Dark}}>
        <FlatList
          data={data}
          keyExtractor={(item)=>item.id}
          contentContainerStyle={{padding:20}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
              onPress={()=>{navigation.navigate(NavigationString.About, {item})}}>
                <SharedElement id={`item.${item.key}.container`}>
                <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.textContainer}>
                
                <Text style={styles.name}>{item.name}</Text>
                
                
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                
                </View>
                </View>
                </SharedElement>
              </TouchableOpacity>
            );
          }}
        />
        <SharedElement id="general.bg">
        <View style={styles.bg}/>
        </SharedElement>
      </SafeAreaView>
    </DrawerScreenWraper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  jobTitle: {
    fontSize: 16,
    color: 'white',
  },
  bg:{
    position:'absolute',
    width:'100%',
    height:'50%',
    backgroundColor:'red',
  transform:[{translateY: 1000}],
    borderRadius:32,
  }
});
export default Home;
