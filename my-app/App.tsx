import React, { useState } from 'react';
import { Text, View } from 'react-native';




const HelloWorldApp = () => {
  const [title, setTitle] = useState('')

fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
.then(response => response.json())
.then(data => {setTitle(data.title)});

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

