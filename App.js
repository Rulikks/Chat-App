import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
const Stack = createNativeStackNavigator();

import HomeScreen from "./src/pages/Home";
import NoticeScreen from "./src/pages/Notice";

const options = {
  headerShown: false,
};

const App = () => {
  return (
    <>
    <Text>xdddddd</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Chat" component={HomeScreen} options={options} />
          <Stack.Screen
            name="Notice"
            component={NoticeScreen}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
