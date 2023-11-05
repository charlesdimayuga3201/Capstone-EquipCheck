import React from "react";
import { View, StyleSheet } from "react-native";
import Mapping from "../Pages/Mapping";
import Bottomtabs from "./Bottomtabs";
import MappingS from "../Pages/MappingS";
import MappingFe from "../Pages/MappingFe";
import MappingSd from "../Pages/MappingSd";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // You can use any icon library you prefer
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Icony } from "@iconify/react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { Icon } from "react-native-iconify";
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Import your screen components

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <View styles={styles.container}> */}
      <Tab.Navigator
        initialRouteName="MappingFe"
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          backgroundColor: "transparent",
          tabBarLabelStyle: {
            fontSize: wp("1.4%"),
          },
          tabBarStyle: [
            {
              // position: "absolute",
              // bottom: 10,
              // borderRadius: 100,
              // height: 70,
              // elevation: 5,
              // borderTopWidth: 0,
              // backgroundColor: "white",
              // marginHorizontal: "20%",
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
          component={MappingFe}
          options={{
            title: null,
            tabBarLabel: "Fire Extinguisher", // Tab label
            tabBarIcon: ({ color, size }) => (
              <Icon name="flame-outline" color={color} size={wp("2.6%")} /> // Icon for the tab
            ),
          }}
        />
        <Tab.Screen
          name="Sprinkler"
          component={MappingS}
          options={{
            title: null,
            tabBarLabel: "Sprinkler",
            tabBarIcon: ({ color, size }) => (
              <Icon name="water-outline" color={color} size={wp("2.6%")} />
            ),
          }}
        />
        <Tab.Screen
          name="SmokeDetector"
          component={MappingSd}
          options={{
            title: null,
            tabBarLabel: "Smoke Detector",
            tabBarIcon: ({ color, size }) => (
              <Icon name="disc-outline" color={color} size={wp("2.6%")} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
