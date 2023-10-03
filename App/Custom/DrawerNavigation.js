import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DrawerNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.hamburger} onPress={toggleDrawer}>
          <View style={styles.hamburgerLine}></View>
          <View style={styles.hamburgerLine}></View>
          <View style={styles.hamburgerLine}></View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Header</Text>
      </View>

      {isDrawerOpen && (
        <View style={styles.drawer}>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Drawer Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Drawer Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Drawer Item 3</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>
        <Text>Main Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  hamburger: {
    padding: 10,
  },
  hamburgerLine: {
    height: 2,
    width: 30,
    backgroundColor: "blue",
    marginVertical: 3,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
  },
  drawer: {
    width: 200,
    backgroundColor: "white",
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  drawerItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DrawerNavigation;
