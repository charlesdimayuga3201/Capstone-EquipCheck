import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

function Login(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bsu2.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.rect}>
          <Text style={styles.equipcheck}>EQUIPCHECK</Text>
          <Text style={styles.aLwaysMAkeSure}>
            Empowering Safety Today, Forging
            {"\n"}a Safer Tomorrow
          </Text>
          <View style={styles.username_input}>
            <View style={styles.recStack}>
              <View style={styles.rec}>
                <FeatherIcon name="user" style={styles.icon}></FeatherIcon>
              </View>
              <TextInput
                placeholder="Username"
                style={styles.username}
              ></TextInput>
            </View>
          </View>
          <View style={styles.password_input}>
            <View style={styles.rect2}>
              <View style={styles.icon2Row}>
                <FeatherIcon name="lock" style={styles.icon2}></FeatherIcon>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.password}
                ></TextInput>
              </View>
            </View>
          </View>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Drawermenu");
            }}
          >
            <Text style={styles.logindbtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 2012,
    height: 1490,
    marginTop: -345,
    marginLeft: -354,
  },
  image_imageStyle: {
    opacity: 0.5,
  },
  rect: {
    width: 733,
    height: 608,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.28,
    shadowRadius: 4,
    elevation: 12,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    borderRadius: 52,
    marginTop: 441,
    marginLeft: 640,
  },
  equipcheck: {
    fontFamily: "poppins-regular",
    color: "rgba(255,89,79,1)",
    fontWeight: "900",
    fontSize: 70,
    marginTop: 48,
    textAlign: "center",
  },
  aLwaysMAkeSure: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 23,
    textAlign: "center",
    marginTop: 3,
  },
  username_input: {
    width: 426,
    height: 50,
    marginTop: 66,
    marginLeft: 141,
  },
  rec: {
    top: 12,
    left: 0,
    width: 426,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(247,251,255,1)",
    borderRadius: 39,
    borderWidth: 1,
    borderColor: "rgba(212,215,227,1)",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    height: 18,
    width: 18,
    marginTop: 16,
    marginLeft: 22,
  },
  username: {
    top: 0,
    left: 49,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 75,
    width: 334,
    fontSize: 15,
  },
  recStack: {
    width: 426,
    height: 75,
    marginTop: -12,
  },
  password_input: {
    width: 426,
    height: 50,
    marginTop: 18,
    marginLeft: 141,
  },
  rect2: {
    width: 426,
    height: 50,
    backgroundColor: "rgba(247,251,255,1)",
    borderRadius: 39,
    borderWidth: 1,
    borderColor: "rgba(212,215,227,1)",
    flexDirection: "row",
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    height: 18,
    width: 18,
    marginTop: 14,
  },
  password: {
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 46,
    width: 350,
    marginLeft: 10,
  },
  icon2Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 22,
    marginTop: 2,
  },
  forgotPassword: {
    color: "rgba(239,7,7,1)",
    height: 22,
    width: 113,
    marginTop: 16,
    marginLeft: 435,
  },
  button: {
    width: 451,
    height: 66,
    backgroundColor: "rgba(58,110,144,1)",
    borderRadius: 19,
    justifyContent: "center",
    marginTop: 12,
    marginLeft: 129,
  },
  logindbtn: {
    fontFamily: "poppins-regular",
    color: "rgba(255,254,254,1)",
    fontSize: 23,
    alignSelf: "center",
  },
});

export default Login;
