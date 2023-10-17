import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Setting(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/setting.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    width: 1280,
    height: 122,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.13,
    shadowRadius: 3,
    alignSelf: "center",
  },
  image: {
    width: 1280,
    height: 122,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
});

export default Setting;
