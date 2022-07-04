import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MovieData from './fetchMovieData';

var title = new Array();
var image = new Array();

const HelloWorldApp = () => {

  const [data, setData] = useState('')
  MovieData((result) => {setData(result)});

  var value = Object.values(data); //recupere toutes les donnees des films
  var j = 0;

  for (let n in value) {
    var val = Object.values(value[n]); // recuperer les donnees d'un film a la suite
    var tab = Object.getOwnPropertyNames(value[n]); //les differentes donnees presentes
    for (let i in tab) {
      if (tab.hasOwnProperty(i)) { //parcourir les differents donnees d'un film
          if(tab[i] == 'title'){
            title[j] = val[i] + '\n';
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
      <ScrollView style={styles.scrollView}>
        {title.map((item) => {
          return (
            <View>
            <Text style={styles.item}>{item}</Text>
            </View>
          )
        })}
      </ScrollView>
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
    padding: 15,
    backgroundColor: 'pink',
    fontSize: 15
  }
});

export default HelloWorldApp;

