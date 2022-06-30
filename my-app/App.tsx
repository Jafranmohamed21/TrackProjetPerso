import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TitleMovie from './fetchMovieTitle';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 200,
  }
});

const HelloWorldApp = () => {
  const [image, setImage] = useState('')

  TitleMovie((result) => {setImage(result)});

  console.log(image);

  return (
    <View>
      <Image
       style={styles.image}
       source={{uri: image}}
      />
    </View>
  );
};

export default HelloWorldApp;

