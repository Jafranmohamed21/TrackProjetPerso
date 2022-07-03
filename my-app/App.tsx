import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MovieData from './fetchMovieData';

var title = new Array();
var image = new Array();

const styles = StyleSheet.create({
  image: {
    height : 300,
    width : 300,
  }
});

const HelloWorldApp = () => {

  const [data, setData] = useState('')
  MovieData((result) => {setData(result)});

  var value = Object.values(data);
  var j = 0;

  for (let n in value) {
    var val = Object.values(value[n]);
    var tab = Object.getOwnPropertyNames(value[n]);
    for (let i in tab) {
      if (tab.hasOwnProperty(i)) {
          if(tab[i] == 'title'){
            title[j] = val[i];
          }
          if(tab[i] == 'image'){
            image[j] = val[i];
            j++;
          }
      }
      else {
      }
    }
  }
  //console.log(value[1]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
       style={styles.image}
       source={{uri: image[0]}}
       resizeMode= 'contain'
      />
      <Text>{title[0]}</Text>
      <Image
       style={styles.image}
       source={{uri: image[1]}}
       resizeMode= 'contain'
      />
      <Text>{title[1]}</Text>
    </View>
  );
};

export default HelloWorldApp;

