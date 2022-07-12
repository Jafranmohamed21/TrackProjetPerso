import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import getMovieData from './fetchMovieData';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { GhibliApi} from "./types";

const HomeScreen = () => {
  const [moviesResponse, setData] = useState<GhibliApi>([])
 
  useEffect(() => {
    (async () => {
      const result = await getMovieData();
      //console.log(result);
      setData(result);
    })()
  },[]);

  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'

  return (
    <ScrollView style={styles.scrollView}>
      {moviesResponse.map((movie)=> {
        return (
          <View >
            <View style={styles.container}>
            <Text style={styles.title}>{movie.title}</Text>
            <Image
              resizeMode= 'contain'
              style={styles.icon}
              source={{uri: starImgCorner}}
            />
            </View> 
          <View>    
          <Text style={styles.desc}>{movie.description}</Text>
          <Image
            resizeMode= 'contain'
            style={styles.image}
            source={{uri: movie.image}}
          />
          </View>  
          </View>
        )
        })}      
    </ScrollView>
  );
};

function FavoriteScreen() { //Creation d une 2eme page 'favoris'
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favoris</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator(); //Cree la navigation en bas de l'appli

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Films" component={HomeScreen} />
      <Tabs.Screen name="Favoris" component={FavoriteScreen} />
    </Tabs.Navigator>
  );
}


const HelloWorldApp = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1, flexDirection: 'row', alignSelf: 'center'
  },
  scrollView: {
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    marginHorizontal: 10,
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightskyblue',
    fontSize: 15
  },
  desc: {
    marginHorizontal: 20,
    backgroundColor: 'pink',
    fontSize: 15
  }
});

export default HelloWorldApp;

