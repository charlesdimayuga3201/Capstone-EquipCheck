import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Mapping from "../Pages/Mapping";
import Bottomtabs from "../Custom/Bottomtabs";
import ViewFe from "../Pages/ViewFe";
import Login from "../Pages/Login";
import SubDrawerNavigator from "./SubDrawerNavigator";
import SubDrawer2Navigator from "./SubDrawer2Navigator";
import SubDrawerScreen1 from "./SubDrawerScreen1";
import SubDrawerScreen2 from "./SubDrawerScreen2";
import { StyleSheet } from "react-native";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sub Drawer 1"
        onPress={() => props.navigation.navigate("ViewFe")}
      />
      <DrawerItem
        label="Sub Drawer 2"
        onPress={() => props.navigation.navigate("ViewFe")}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Mapping} />
      {/* Add more main drawer items here */}
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
