import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B5B6C',
  },
  text: {
    fontSize: 16,
    color: 'red',
  },
  circle: {
    width: 40,
    height: 40,
    left: 140,
    bottom: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'relative',
  },
  bluecircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#52707F',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  notificationIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 8,
    top: 8,
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personcircle: {
    width: 71,
    height: 71,
    borderRadius: 80,
    backgroundColor: 'white',
    marginLeft: 10,
    position: 'relative',
    bottom: 210,
    right: 15,
  },
  plus: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 10,
    bottom: 15,
    top: 10,
  },
  slideoval: {
    color: '#5B5B6C',
    height: 10,
    with: 104,
    borderRadius: 50,
  },
  shape: {
    width: 375 ,
    height: 450,
    backgroundColor: '#F5F5F5',
    borderTopEndRadius:50,
    borderTopStartRadius:50,
    position: 'absolute',
    bottom: 0,
  },
});

const App = () => {
  const notificationIcon = require('./assets/notificationIcon.png');
  const plus = require('./assets/plus.png');

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={notificationIcon} style={styles.notificationIcon} />
        <View style={styles.bluecircle} />
      </View>
      <View style={styles.personContainer}>
        <View style={styles.personcircle}>
          <View style={styles.bluecircle} />
          <Image source={plus} style={styles.plus} />
        </View>
        <View style={styles.personcircle}>
          <View style={styles.bluecircle} />
        </View>
        <View style={styles.personcircle}>
          <View style={styles.bluecircle} />
        </View>
        <View style={styles.personcircle}>
          <View style={styles.bluecircle} />
        </View>
      </View>
      <View style={styles.slideoval}></View>
      <View style={styles.shape}>
      </View>
      <View style={styles.bluecircle} />
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}

export default App;
