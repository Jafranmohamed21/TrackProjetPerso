import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TitleMovie from './fetchMovieTitle';

const HelloWorldApp = () => {
  const [title, setTitle] = useState('')

  TitleMovie((result) => {setTitle(result)});

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{title}</Text>
    </View>
  );
};

export default HelloWorldApp;

