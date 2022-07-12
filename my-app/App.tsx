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


  return (
    <ScrollView style={styles.scrollView}>
      {moviesResponse.map((movie)=> {
        return (
          <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.desc}>{movie.description}</Text>
          <Image
            resizeMode= 'contain'
            style={styles.image}
            source={{uri: movie.image}}
          />
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
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightskyblue',
    fontSize: 15
  },
  desc: {
    backgroundColor: 'pink',
    fontSize: 15
  }
});

export default HelloWorldApp;

