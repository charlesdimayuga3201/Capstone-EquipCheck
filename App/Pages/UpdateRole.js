import React, { Component, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
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
  addDoc,
  getDoc,
} from "firebase/firestore";
import { firebase, auth } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/Ionicons";
import {
  // getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  updatePassword,
  sendEmailVerification,
  updateEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ScrollView } from "react-native-gesture-handler";

export default function UpdateRole() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(firebase, "users"); // 'users' is the name of your collection
      const q = query(usersCollection, orderBy("role", "asc"));
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = [];
      usersSnapshot.forEach((doc) => {
        usersList.push({ id: doc.id, ...doc.data() });
      });
      // Sort users by role (HeadAdmin first, then other roles)
      usersList.sort((a, b) => {
        if (a.role === "Head Admin" && b.role !== "Head Admin") {
          return -1;
        } else if (a.role !== "Head Admin" && b.role === "Head Admin") {
          return 1;
        } else {
          return 0;
        }
      });
      setUsers(usersList);
      console.log(usersList);
    };

    fetchUsers();
  }, []);
  const scrollViewRef = useRef(null);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.measure((x, y, width, height) => {
        setScrollViewHeight(height);
      });
    }
  }, [users]);
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/updateroles.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.rect}>
        <View style={styles.textcr}>
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontFamily: "poppins-regular",
              marginBottom: 5,
              fontWeight: "700",
              marginLeft: 40,
              marginTop: 30,
            }}
          >
            {" "}
            ALL USERS AND ROLES
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
            paddingBottom: 50,
            // flexDirection: "row",
            // justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#ED474A",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Refresh</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <View style={styles.column}>
            <Text style={styles.datafont}>Email</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Role</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Mapping</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>View</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Update</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>History</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Action </Text>
          </View>
        </View>
        {/* show all user */}
        <ScrollView
          ref={scrollViewRef}
          style={{ height: scrollViewHeight }}
          contentContainerStyle={styles.scrollViewContent}
        >
          {users.map((user, index) => (
            <View
              key={index}
              style={[
                styles.container3,
                index % 2 === 0 ? styles.rowEven : styles.rowOdd, // Alternating colors
              ]}
            >
              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.userEmail}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.role}</Text>
              </View>

              <View style={styles.column1}>
                {user.Mapping === "true" ? (
                  <Icon name="checkmark-outline" size={24} color="green" />
                ) : (
                  <Icon name="close-outline" size={24} color="red" />
                )}
              </View>

              <View style={styles.column1}>
                {user.View === "true" ? (
                  <Icon name="checkmark-outline" size={24} color="green" />
                ) : (
                  <Icon name="close-outline" size={24} color="red" />
                )}
              </View>

              <View style={styles.column1}>
                {user.Update === "true" ? (
                  <Icon name="checkmark-outline" size={24} color="green" />
                ) : (
                  <Icon name="close-outline" size={24} color="red" />
                )}
              </View>

              <View style={styles.column1}>
                {user.History === "true" ? (
                  <Icon name="checkmark-outline" size={24} color="green" />
                ) : (
                  <Icon name="close-outline" size={24} color="red" />
                )}
              </View>

              <View style={styles.column1}>
                <TouchableOpacity>
                  <Text style={styles.datafont1}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 10,
    // Additional styling for the content inside ScrollView
  },
  rowEven: {
    backgroundColor: "white", // Background color for even rows
  },

  rowOdd: {
    backgroundColor: "#F1EFEF", // Background color for odd rows
  },
  datafontc: {
    marginTop: 3,
    marginBottom: 20,
    textAlign: "center",
  },
  datafont1: {
    fontSize: 17,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "100",
    textAlign: "center",
  },
  column1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 5, // Adjust the horizontal margin as needed
    height: "100%", // T
  },
  container3: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%", // Set the desired height of the row
    paddingHorizontal: 10, // A
  },
  container: {
    flex: 1,
  },
  datafont: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "400",
    textAlign: "center",
  },
  container2: {
    backgroundColor: "#F1EFEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 10, // Adjust horizontal padding as needed
  },
  column: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 5, // Adjust the horizontal margin as needed
    height: "100%", // This makes each column take up the full height of the row
  },
  image: {
    width: 1280,
    height: 121,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  textcr: {
    backgroundColor: "#ED474A",
    // borderBottomRightRadius: 50,
    borderRadius: 10,
    width: "100%",
    height: 92,
    shadowColor: "rgba(68,61,61,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.24,
    shadowRadius: 3,
    width: "100%",
    height: 92,
  },
  group: {
    width: 1280,
    height: 121,
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
    marginTop: -2,
  },
  rect: {
    width: "95%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.07,
    shadowRadius: 3,
    marginTop: 30,
    marginLeft: 21,
  },
});
