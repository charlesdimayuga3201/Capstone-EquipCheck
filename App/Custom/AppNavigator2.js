import React from "react";
import { View, StyleSheet } from "react-native";
import Mapping from "../Pages/Mapping";
import Bottomtabs from "./Bottomtabs";
import HistoryS from "../Pages/HistoryS";
import HistoryFe from "../Pages/HistoryFe";
import HistorySd from "../Pages/HistorySd";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // You can use any icon library you prefer
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Icony } from "@iconify/react";
// import { Icon } from "react-native-iconify";
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Import your screen components

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <View styles={styles.container}> */}
      <Tab.Navigator
        initialRouteName="FireExinguisher"
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          backgroundColor: "transparent",
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle: [
            {
              position: "absolute",
              // bottom: 10,
              // borderRadius: 100,
              // width: "60%",
              // left: "23%",
              // height: 70,
              elevation: 5,
              borderTopWidth: 0,
              backgroundColor: "white",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="FireExinguisher"
          component={HistoryFe}
          options={{
            title: null,
            tabBarLabel: "Fire Extinguisher", // Tab label
            tabBarIcon: ({ color, size }) => (
              <Icon name="flame-outline" color={color} size={size} /> // Icon for the tab
            ),
          }}
        />
        <Tab.Screen
          name="Sprinkler"
          component={HistoryS}
          options={{
            title: null,
            tabBarLabel: "Sprinkler",
            tabBarIcon: ({ color, size }) => (
              <Icon name="water-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SmokeDetector"
          component={HistorySd}
          options={{
            title: null,
            tabBarLabel: "Smoke Detector",
            tabBarIcon: ({ color, size }) => (
              <Icon name="disc-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
