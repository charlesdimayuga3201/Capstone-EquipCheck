import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dropdown } from "react-native-element-dropdown";
import { useFonts } from "expo-font";

import MyNavigator from "./Navigation/MyNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "poppins-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!isLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
