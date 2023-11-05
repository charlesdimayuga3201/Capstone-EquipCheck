import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Button,
  Alert,
  BackHandler,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AppNavigator1 from "./AppNavigator1";
import AppNavigator2 from "./AppNavigator2";
import AppNavigator4 from "./AppNavigator4";
import Setting from "../Pages/Setting";
import Login from "../Pages/Login";
import UpdateRole from "../Pages/UpdateRole";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function AdminDrawermenu() {
  const navigation = useNavigation();
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false); // State to control the modal

  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Function to toggle the modal visibility
  };
  const handleLogout = () => {
    Alert.alert(
      "Logout Confirmation",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Perform logout or go back to the login page as needed
            // For instance, you might navigate back to the login page
            navigation.navigate("Login");
          },
        },
      ],
      { cancelable: false }
    );
    return true;
  };
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert(
          "Logout Confirmation",
          "Are you sure you want to log out?",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "Confirm",
              onPress: () => {
                // Perform logout or go back to the login page as needed
                // For instance, you might navigate back to the login page
                navigation.navigate("Login");
              },
            },
          ],
          { cancelable: false }
        );
        return true; // Prevent default back button behavior
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="MappingFe"
        drawerContent={(props) => {
          return (
            <View>
              <ImageBackground
                source={require("../assets/images/menu-bg9.png")}
                style={{ padding: 20 }}
              >
                <TouchableOpacity>
                  <View style={{ alignSelf: "flex-end" }}>
                    <FeatherIcon name="bell" size={22} color="white" />
                  </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../assets/images/eqc_logo3.png")}
                    style={{
                      height: 200,
                      width: 200,
                      borderRadius: 40,

                      alignSelf: "center",
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 28,
                    fontFamily: "poppins-regular",
                    marginBottom: 5,
                  }}
                >
                  EquipCheck
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "#fff",
                      fontFamily: "poppins-regular",
                      marginRight: 5,
                    }}
                  >
                    Head Admin
                  </Text>
                </View>
              </ImageBackground>

              <DrawerItemList {...props} />
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  paddingVertical: 70,
                  paddingHorizontal: 20,
                  borderTopColor: "#f4f4f4",
                  borderTopWidth: 1,
                }}
              >
                <FeatherIcon
                  name="log-out"
                  size={20}
                  color="rgba(255,89,79,1)"
                />
                <Text
                  style={{
                    marginLeft: 29,
                    fontSize: 16,
                    color: "rgba(255,89,79,1)",
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        screenOptions={{
          headerTransparent: true,
          drawerStyle: {
            backgroundColor: "#fff",
            width: 280,
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#111",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "#111",
          },
        }}
      >
        <Drawer.Screen
          name="MappingFe"
          options={{
            drawerLabel: "Mapping",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="map-pin"
                size={20}
                color="#808080"
              ></FeatherIcon>
            ),
          }}
          component={AppNavigator4}
        />
        <Drawer.Screen
          style={{ position: "absolute", bottom: 16, right: 16 }}
          name="ViewEquipment"
          options={{
            drawerLabel: "View",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="search"
                size={20}
                color="#808080"
              ></FeatherIcon>
            ),
          }}
          component={AppNavigator}
        />

        <Drawer.Screen
          name="Update"
          options={{
            drawerLabel: "Update",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="refresh-cw"
                size={20}
                color="#808080"
              ></FeatherIcon>
            ),
          }}
          component={AppNavigator1}
        />
        <Drawer.Screen
          name="History"
          options={{
            drawerLabel: "History",
            title: null,
            drawerIcon: () => (
              <FeatherIcon name="clock" size={20} color="#808080"></FeatherIcon>
            ),
          }}
          component={AppNavigator2}
        />
        <Drawer.Screen
          name="Update Role"
          options={{
            drawerLabel: "Update Role",
            title: null,
            drawerIcon: () => (
              <FeatherIcon name="users" size={20} color="#808080"></FeatherIcon>
            ),
          }}
          component={UpdateRole}
        />
        <Drawer.Screen
          name="Review All Equipment"
          options={{
            drawerLabel: "Review All Equipment",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="file-text"
                size={20}
                color="#808080"
              ></FeatherIcon>
            ),
          }}
          component={AppNavigator2}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="settings"
                size={20}
                color="#808080"
              ></FeatherIcon>
            ),
          }}
          component={Setting}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  subMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
  },
  subMenuItemText: {
    marginLeft: 8,
  },
  subMenuItemActive: {
    backgroundColor: "#f4f4f4",
  },
});
