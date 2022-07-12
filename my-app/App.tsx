import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import getMovieData from './fetchMovieData';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const HomeScreen = () => {
  const [title, setTitle] = useState<Array<string>>([])
 
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
            <View key={item}>
            <Text style={styles.item} >{item}</Text>
            </View>
       )})}
    </ScrollView>
  );
};

function SettingsScreen() { //Creation d une 2eme page 'favoris'
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
      <Tabs.Screen name="Favoris" component={SettingsScreen} />
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

