import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator } from 'react-native';
import getMovieData from './fetchMovieData';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


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
    <ScrollView style={styles.scrollView}>
      {title.map((item) => {
       return (
            <View>
            <Text style={styles.item} key="{item}">{item}</Text>
            </View>
       )})}
    </ScrollView>
  );
};

const styles = StyleSheet.create({ //definir la taille de l'image
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image: {
    height : 300,
    width : 300,
  },
  scrollView: {    
    marginHorizontal: 60,
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'pink',
    fontSize: 15
  }
});

export default HelloWorldApp;

