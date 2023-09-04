import React, { useRef, useState } from "react";
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
  const [isLocked, setIsLocked] = useState(false);

  const SHAPE_HEIGHT = 550; // Bu, styles.shape içinde tanımlanan yükseklik değeri.

const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0 && !isLocked) {
        Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState);
      }
    },
    onPanResponderRelease: () => {
      if (pan.y._value > 50) { // 50 threshold değeri olarak alındı
        setIsLocked(true);
        Animated.spring(pan, {
          // Shape'in ekranın dışına çıkması için yüksekliği kadar kaydırmamız gerekiyor
          toValue: { x: 0, y: SHAPE_HEIGHT },
          friction: 5,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 5,
          useNativeDriver: false,
        }).start();
      }
    },
  });


  const handleIconPress = () => {
    if (isLocked) {
      setIsLocked(false);
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        friction: 5,
        useNativeDriver: false,
      }).start();
    }
  }

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
    <View style={styles.maincontainer}>
      <View style={styles.kutucuk}>
        <Image 
          source={require('../../assets/rick.png')} 
          style={styles.rick} 
        />
        <Text style={styles.logoText}>Marka İsmi</Text>
      </View>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("Notice")}>
        <Image source={notificationIcon} style={styles.notificationIcon} />
        <View style={styles.bluecircle} />
      </TouchableOpacity>
    
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
          <TouchableOpacity onPress={handleIconPress}>
            <Image source={sohbetIcon} style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.Text}>Chat</Text>
        </View>
      </View>
      
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(), 
          styles.shape, 
          { transform: [{ translateY: pan.y }] }
        ]}
      >
        <View style={styles.slidebar} />
      </Animated.View>
    </View>
  );
  
};

export default Home;