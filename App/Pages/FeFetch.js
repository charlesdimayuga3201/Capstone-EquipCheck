import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import {
  QuerySnapshot,
  doc,
  getDocs,
  collection,
  todoRef,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import Icon from "react-native-vector-icons/Ionicons";
// import { firebase } from "../firebaseConfig";

import { firebase } from "../../firebaseConfig";

function FeFetch(props) {
  // const [listData, setlistData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const listData = [];
  //       const querySnapshot = await getDocs(collection(firebase, "E1"));
  //       querySnapshot.forEach((doc) => {
  //         if (doc.exists) {
  //           const data = doc.data();
  //           listData.push(data);
  //         }
  //       });
  //       console.log(listData);
  //       setlistData(listData);
  //     } catch (error) {
  //       console.error("Error loading from Firestore: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(firebase, "E1"),
          orderBy("date", "desc"), // Assuming "date" is the field you want to order by
          limit(1) // Fetch only the latest document
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const latestDoc = querySnapshot.docs[0];
          const latestData = latestDoc.data();
          setLatestData([latestData]);
          console.log(latestData);
        }
      } catch (error) {
        console.error("Error loading from Firestore: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container3}>
      <FlatList
        data={latestData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <View style={styles.container3}>
              <View style={styles.column1}>
                <Text style={styles.datafont1}>{item.date}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{item.time}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>
                  {item.nozzle === "check" ? (
                    // Use Ionicons for the check icon
                    <Icon name="checkmark-circle" size={24} color="green" />
                  ) : (
                    // Use Ionicons for the close icon
                    <Icon name="close-circle" size={24} color="red" />
                  )}
                </Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont1}>
                  {item.gauge === "check" ? (
                    // Use Ionicons for the check icon
                    <Icon name="checkmark-circle" size={24} color="green" />
                  ) : (
                    // Use Ionicons for the close icon
                    <Icon name="close-circle" size={24} color="red" />
                  )}
                </Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont1}>
                  {item.pinlock === "check2" ? (
                    // Use Ionicons for the check icon
                    <Icon name="checkmark-circle" size={24} color="green" />
                  ) : (
                    // Use Ionicons for the close icon
                    <Icon name="close-circle" size={24} color="red" />
                  )}
                </Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont1}>
                  {item.body === "check3" ? (
                    // Use Ionicons for the check icon
                    <Icon name="checkmark-circle" size={24} color="green" />
                  ) : (
                    // Use Ionicons for the close icon
                    <Icon name="close-circle" size={24} color="red" />
                  )}
                </Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{item.inspected}</Text>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container3: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 10, // Adjust horizontal padding as needed
  },
  column1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 5, // Adjust the horizontal margin as needed
    height: "100%", // This makes each column take up the full height of the row
  },
  datafont1: {
    fontSize: 17,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "100",
    textAlign: "center",
  },
  datafont: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "400",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 10,
  },

  remarks: {
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "red", // You can change the background color
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    height: "100%",
    bottom: 10,
  },
  container3: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 10, // Adjust horizontal padding as needed
  },
  column1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 5, // Adjust the horizontal margin as needed
    height: "100%", // This makes each column take up the full height of the row
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
  container: {
    flex: 1,
  },
  font: {
    fontSize: 15,
    marginLeft: 9,
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

  line: {
    top: 120,
    borderBottomWidth: 2, // You can adjust the width of the line
    borderBottomColor: "gray", // You can change the color of the line
  },
  rect: {
    width: "95%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,1)",
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
  image: {
    width: 1280,
    height: 121,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  container1: {
    top: 0,
    backgroundColor: "transparent",
    padding: 30,
    width: "30%",
  },
  dropdown: {
    height: 60,
    borderColor: "#B0B5B3",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "transparent",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default FeFetch;
