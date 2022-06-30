import React from 'react';
import { Text, View } from 'react-native';

var title = 'Hi';

fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
.then(response => response.json())
.then(data => { title = data[0]});


const HelloWorldApp = () => {
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

