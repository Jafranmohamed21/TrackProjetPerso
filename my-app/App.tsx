import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator } from 'react-native';
import getMovieData from './fetchMovieData';
import getMovieTitle from './getMovieTitle';
import { GhibliApi } from './types';
/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';*/

const HelloWorldApp = () => {
  const [title, setTitle] = useState(Array<string>)
 
  useEffect(() => {
    (async () => {
      const title = await getMovieData();
      console.log(title);
      setTitle(title);
    })()
  },[]);

if (!title) {
  return <ActivityIndicator testID='loader'/>
}
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>{title[0]}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({ //definir la taille de l'image
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  image: {
    height : 300,
    width : 300,
  },
  scrollView: {    
    marginHorizontal: 30,
  },
  item: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 15
  }
});

export default HelloWorldApp;

