import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import {
  QuerySnapshot,
  doc,
  getDocs,
  collection,
  todoRef,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth"; // Modified import

import { firebaseAuth, firebaseApp, firebase } from "../../firebaseConfig"; // Modified import

import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Sign in the user
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    let userData;
    if (userCredential && userCredential.user && userCredential.user.email) {
      const userEmail = userCredential.user.email;
      const usersCollection = collection(firebase, "users"); // Replace 'users' with your collection name
      const q = query(usersCollection, where("userEmail", "==", userEmail));
      const querySnapshot = await getDocs(q);
      // let userData;
      querySnapshot.forEach((doc) => {
        // Retrieve user data
        userData = doc.data();
        // userRole = userData.role;
        console.log(userData); // Assuming 'role' is the field containing the role in your Firestore
      });

      // Navigate based on the user's role

      // Navigate based on the user's role
      // Move the navigation logic inside the asynchronous function
      if (userData && userData.role) {
        if (userData.role === "Staff") {
          navigation.navigate("Drawermenu");
        } else if (userData.role === "Head Admin") {
          navigation.navigate("AdminDrawermenu");
        } else {
          Alert.alert("Error", "Role not defined");
        }
      } else {
        Alert.alert("Error", "User data not found");
      }
    } else {
      // Handle the case where userCredential doesn't contain the expected email information
      console.error("Error: User email not found in userCredential");
    }
  };

  // useEffect(() => {
  //   const initializeFirebaseAuth = async () => {
  //     try {
  //       initializeAuth(firebaseAuth, {
  //         persistence: getReactNativePersistence(AsyncStorage),
  //       });
  //     } catch (error) {
  //       console.error("Firebase initialization error:", error);
  //     }
  //   };

  //   initializeFirebaseAuth();
  // }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/images/bsu3.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.rect}>
          <Text style={styles.equipcheck}>EQUIPCHECK</Text>
          <Text style={styles.aLwaysMAkeSure}>
            Empowering Safety Today, Forging
            {"\n"}a Safer Tomorrow
          </Text>
          <View style={{ gap: 8 }}>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <FeatherIcon name="user" style={styles.icon}></FeatherIcon>
                </View>
                <TextInput
                  placeholder="Username"
                  style={styles.username}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                ></TextInput>
              </View>
            </View>

            <View style={styles.password_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <FeatherIcon name="lock" style={styles.icon2}></FeatherIcon>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.password}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          {/* <Text style={styles.forgotPassword}>Forgot Password?</Text> */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.logindbtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: wp("100%"),
    height: hp("100%"),
  },
  image_imageStyle: {
    opacity: 0.5,
  },
  rect: {
    width: wp("50%"),
    height: hp("75%"),
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.28,
    shadowRadius: 4,
    elevation: 12,
    shadowOffset: {
      width: wp("1%"),
      height: hp("1%"),
    },
    borderRadius: wp("3%"),
    marginTop: hp("12%"),
    marginLeft: wp("25%"),
  },
  equipcheck: {
    fontFamily: "poppins-regular",
    color: "rgba(255,89,79,1)",
    fontWeight: "900",
    fontSize: wp("4%"),
    marginTop: hp("5%"),
    textAlign: "center",
  },
  aLwaysMAkeSure: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: wp("2%"),
    textAlign: "center",
    marginTop: hp("1%"),
  },
  username_input: {
    width: wp("50%"),
    height: hp("5%"),
    marginTop: hp("4%"),
    marginLeft: wp("15%"),
    alignSelf: "center",
  },
  rec: {
    // top: hp("1.5%"),
    left: 0,
    width: wp("36%"),
    height: hp("7%"),
    position: "absolute",
    backgroundColor: "rgba(247,251,255,1)",
    borderRadius: wp("2%"),
    borderWidth: wp("0.2%"),
    borderColor: "rgba(212,215,227,1)",
    alignSelf: "center",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: wp("2%"),
    height: hp("10%"),
    width: wp("10%"),
    marginTop: hp("1%"),
    marginLeft: wp("3%"),
  },
  username: {
    top: 0,
    left: wp("8%"),
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    height: hp("7%"),
    width: wp("50%"),
    fontSize: wp("1.5%"),
  },
  recStack: {
    width: wp("60%"),
    height: hp("6%"),
    marginTop: hp("1.5%"),
  },
  password_input: {
    width: wp("50%"),
    height: hp("5%"),
    marginTop: hp("4%"),
    marginLeft: wp("15%"),
    alignSelf: "center",
  },
  rect2: {
    width: wp("60%"),
    height: hp("6%"),
    marginTop: hp("1.5%"),
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: wp("2%"),
    height: hp("3%"),
    width: wp("3%"),
    marginTop: hp("1.5%"),
    marginLeft: wp("3%"),
  },
  password: {
    top: 0,
    left: wp("8%"),
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    height: hp("7%"),
    width: wp("50%"),
    fontSize: wp("1.5%"),
  },
  icon2Row: {
    top: hp("1.5%"),
    left: 0,
    width: wp("40%"),
    height: hp("7%"),
    position: "absolute",
    backgroundColor: "rgba(247,251,255,1)",
    borderRadius: wp("2%"),
    borderWidth: wp("0.2%"),
    borderColor: "rgba(212,215,227,1)",
    alignSelf: "center",
  },
  forgotPassword: {
    color: "rgba(239,7,7,1)",
    height: hp("3%"),
    width: wp("15%"),
    marginTop: hp("2.5%"),
    marginLeft: wp("50%"),
  },
  button: {
    width: wp("38%"),
    height: hp("7%"),
    backgroundColor: "rgba(58,110,144,1)",
    borderRadius: wp("15%"),
    justifyContent: "center",
    marginTop: hp("10%"),
    marginLeft: wp("6.5%"),
  },
  logindbtn: {
    fontFamily: "poppins-regular",
    color: "rgba(255,254,254,1)",
    fontSize: wp("1.5%"),
    alignSelf: "center",
  },
});
