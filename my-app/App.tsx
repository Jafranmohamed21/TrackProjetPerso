import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import getMovieData from './fetchMovieData';
import getMovieTitle from './getMovieTitle';
/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';*/



function HomeScreen() {
 const [data, setData] = useState('')
 // getMovieData(result);

  useEffect(() => {
    (async () => {
      const result = await getMovieData();
      console.log(result);
      setData(result);
  })()
},[]);
  
  var value = Object.values(data); //recupere toutes les donnees des films
  var title = getMovieTitle(value);
  
  
  return (
    <View
     >
      {/*{<ScrollView style={styles.scrollView}>
       {title.map((item) => {
       return (
            <View>*/}
            <Text>{title[0]}</Text>
           {/* </View>
          })
        })}
      </ScrollView>}*/}
    </View>
  );
}
/*
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
*/

const HelloWorldApp = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <HomeScreen/>
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

