import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TitleMovie from './fetchMovieTitle';

const styles = StyleSheet.create({
  image: {
    height : 200,
    width : 300,
    backgroundColor: 'red'
  }
});

const HelloWorldApp = () => {
  const [image, setImage] = useState('')

  TitleMovie((result) => {setImage(result)});

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
    </View>
  );
};

export default HelloWorldApp;

