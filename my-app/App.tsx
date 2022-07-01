import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MovieData from './fetchMovieData';

var title = '';
var image = '';

const styles = StyleSheet.create({
  image: {
    height : 300,
    width : 300,
  }
});

const HelloWorldApp = () => {
  const [data, setData] = useState('')
  MovieData((result) => {setData(result)});
 
  var tab = Object.getOwnPropertyNames(data);
  var value = Object.values(data);

  for (let i in tab) {
    if (tab.hasOwnProperty(i)) {
        if(tab[i] == 'title'){
          title = value[i];
        }
        if(tab[i] == 'image'){
          image = value[i];
        }
    }
    else {
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
       style={styles.image}
       source={{uri: image}}
       resizeMode= 'contain'
      />
      <Text>{title}</Text>
    </View>
  );
};

export default HelloWorldApp;

