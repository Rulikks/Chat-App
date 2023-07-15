import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { styles } from './styles'
import PersonContainer from './src/components/PersonContainer';
import PersonCircle from './src/components/PersonCircle';

const App = () => {
  const notificationIcon = require('./assets/notificationIcon.png');
  const plus = require('./assets/plus.png');
  const personCircles = [{
    imgURL: "",
    username: "",
  }, 'Item 2', 'Item 3'];

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={notificationIcon} style={styles.notificationIcon} />
        <View style={styles.bluecircle} />
      </View>
      <PersonContainer>
        <View style={styles.personcircle}>
          <View style={styles.bluecircle} />
          <Image source={plus} style={styles.plus} />
        </View>
        {personCircles.map((item, index) => (
          <PersonCircle data={item} />
        ))}
      </PersonContainer>

      <View style={styles.shape}>

        <View style={styles.slidebar}>
        </View>
      </View>


    </View>

  );
}

export default App;
