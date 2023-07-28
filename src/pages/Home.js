import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  PanResponder,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles";
import PersonContainer from "../components/PersonContainer";
import PersonCircle from "../components/PersonCircle";

const Home = ({ navigation }) => {
  const notificationIcon = require("../../assets/notificationIcon.png");
  const plus = require("../../assets/plus.png");
  const phoneIcon = require("../../assets/phone-icon.png");
  const profileIcon = require("../../assets/profile-icon.png");
  const sohbetIcon = require("../../assets/sohbet.png");
  const rick = require("../../assets/rick.png");



  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        { dy: pan.y }, // 'dy' değerini 'pan.y' ye atadık.
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  const personCircles = [
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
    { imgURL: "", username: "User" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("Notice")}>
        <Image source={notificationIcon} style={styles.notificationIcon} />
        <View style={styles.bluecircle} />
      </TouchableOpacity>
      </View>
     
      <PersonContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.personcircle}>
            <View style={styles.bluecircle} />
            <View style={{ flex: 1 }}>
              <Image source={plus} style={styles.plus} />
            </View>
          </View>
          {personCircles.map((item, index) => {
            item.username = `User ${index + 1}`;
            return <PersonCircle key={index} data={item} />;
          })}
        </ScrollView>
      </PersonContainer>
      
      <View style={styles.UserControlBar}>
        <View style={styles.iconTextPair}>
          <Image source={phoneIcon} style={styles.Icon} />
          <Text style={styles.Text}>Call</Text>
        </View>
        <View style={styles.iconTextPair}>
          <Image source={profileIcon} style={styles.Icon} />
          <Text style={styles.Text}>Profile</Text>
        </View>
        <View style={styles.iconTextPair}>
          <Image source={sohbetIcon} style={styles.Icon} />
          <Text style={styles.Text}>Chat</Text>
        </View>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.shape]}
      >
        <View style={styles.slidebar} />
      </Animated.View>
    </View>
  );
};

export default Home;
