import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image,ScrollView} from 'react-native';
import { styles } from './styles'
import PersonContainer from './src/components/PersonContainer';
import PersonCircle from './src/components/PersonCircle';


const App = () => {
  const notificationIcon = require('./assets/notificationIcon.png');
  const plus = require('./assets/plus.png');
  const personCircles = [{
    imgURL: "",
    username: "User 1",
  }, 
  {
    imgURL: "",
    username: "User 2",
  },
  {
    imgURL: "",
    username: "User 3",
  },
  {
    imgURL: "",
    username: "User 4",
  },
  {
    imgURL: "",
    username: "User 2",
  },
  {
    imgURL: "",
    username: "User 2",
  },
];

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={notificationIcon} style={styles.notificationIcon} />
        <View style={styles.bluecircle} />
      </View>
      <PersonContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.personcircle}>
            <View style={styles.bluecircle} />
            <View style={{ flex: 1 }}>
            <Image source={plus} style={styles.plus} />
          </View>
          </View>
          {personCircles.map((item, index) => (
            <PersonCircle key={index} data={item} />
          ))}
        </ScrollView>
      </PersonContainer>
      <View style={styles.UserControlBar}></View>
      <View style={styles.shape}>
        <View style={styles.slidebar}>
        </View>
      </View>
    </View>
  );
}

export default App;
