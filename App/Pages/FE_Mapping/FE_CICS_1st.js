import React, { Component, useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";

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
} from "firebase/firestore";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import AppNavigator from "../../Custom/AppNavigator";
export default function FE_CICS_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const addData = () => {};
  const navigation = useNavigation();
  const today = new Date();
  const formattedToday = format(today, "MM/dd/yyyy");
  console.log(formattedToday);

  return (
    <View style={styles.container}>
      <View style={styles.firstfloor}>
        <ImageBackground
          source={require("../../assets/images/CICS_1st.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={hideModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.linetop}>
                  <View style={styles.closeicon}>
                    <TouchableOpacity onPress={hideModal}>
                      <Icon
                        name="close-circle-outline"
                        style={styles.close}
                      ></Icon>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* <View style={styles.lineG}></View> */}

                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <Text key={index} style={styles.inspected}>
                      Inspected Today:
                      {item.date === formattedToday ? (
                        <Icon
                          name="checkmark-circle-outline"
                          style={styles.check}
                        ></Icon>
                      ) : (
                        <Icon
                          name="close-circle-outline"
                          style={styles.check}
                        ></Icon>
                      )}
                    </Text>
                  ))}

                {/* <View style={styles.checkicon}>
                  <Icon
                    name="ios-checkmark-circle-outline"
                    style={styles.check}
                  ></Icon>
                </View> */}
                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <Text key={index} style={styles.modalText}>
                      Fire Extinguisher ID: {item.id}
                    </Text>
                  ))}

                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <Text key={index} style={styles.modalText1}>
                      Conditon: {item.condition}
                    </Text>
                  ))}

                <TouchableOpacity>
                  <Text style={styles.modalText1}>View Details</Text>
                </TouchableOpacity>
                {/* <View style={styles.line}></View> */}
                {/* <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.modalButtonY}
                    onPress={() => {
                      // Handle "Yes" button press here
                      hideModal();
                      // Add your update logic here
                    }}
                  >
                    <Text style={styles.buttonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButtonN}
                    onPress={hideModal}
                  >
                    <Text style={styles.buttonText}>No</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          </Modal>

          <View style={styles.fE1Row}>
            <TouchableOpacity style={styles.fE1} onPress={() => showModal("1")}>
              <View style={styles.fE1_CStackStack}>
                <View style={styles.fE1_CStack}>
                  <View style={styles.fE1_C}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.fE1_IC}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.fE1_DC}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fE2} onPress={() => showModal("2")}>
              <View style={styles.fE2_CStackStack}>
                <View style={styles.fE2_CStack}>
                  <View style={styles.fE2_C}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.fE2_IC}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.fE2_DC}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fE3} onPress={() => showModal("3")}>
              <View style={styles.fE3_CStackStack}>
                <View style={styles.fE3_CStack}>
                  <View style={styles.fE3_C}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.fE3_IC}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.fE3_DC}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fE4} onPress={() => showModal("4")}>
              <View style={styles.fE4_CStackStack}>
                <View style={styles.fE4_CStack}>
                  <View style={styles.fE4_C}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.fE4_IC}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.fE4_DC}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fE5} onPress={() => showModal("5")}>
              <View style={styles.fE5_CStackStack}>
                <View style={styles.fE5_CStack}>
                  <View style={styles.fE5_C}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.fE5_IC}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.fE5_DC}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fE6} onPress={() => showModal("6")}>
              <View style={styles.fE6_CStackStack}>
                <View style={styles.fE6_CStack}>
                  <View style={styles.fE6_C}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.fE6_IC}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.fE6_DC}></View>
              </View>
            </TouchableOpacity>
            <View style={styles.fE7Stack}>
              <TouchableOpacity
                style={styles.fE7}
                onPress={() => showModal("7")}
              >
                <View style={styles.fE7_CStackStack}>
                  <View style={styles.fE7_CStack}>
                    <View style={styles.fE7_C}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE7_IC}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.fE7_DC}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fE8}
                onPress={() => showModal("8")}
              >
                <View style={styles.fE8_CStackStack}>
                  <View style={styles.fE8_CStack}>
                    <View style={styles.fE8_C}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE8_IC}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.fE8_DC}></View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeicon: {
    top: 10,
    marginLeft: 710,
    zIndex: 5,
  },
  close: {
    // color: "#45474B",
    color: "#F9F5F6",
    fontSize: 40,
  },
  checkicon: {
    width: 150,
    height: 150,
    // marginVertical: 35,
    top: 20,
  },
  check: {
    height: 200,
    flex: 1,
    top: 40,
    color: "rgba(128,214,126,1)",
    fontSize: 20,
  },
  linetop: {
    top: 0,
    height: "13%",
    width: "100%",
    backgroundColor: "#3085C3",
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomWidth: 2,
    elevation: 10,
    // borderBottomColor: "red", // You can change the color of the line
  },
  line: {
    top: 10,
    height: 2,
    width: "100%",
    backgroundColor: "#B4B4B3",
    // borderBottomWidth: 2,

    // borderBottomColor: "red", // You can change the color of the line
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,
    // alignItems: "center",
    width: "60%", // Adjust the width as needed
    height: "60%", // Adjust the height as needed
  },
  inspected: {
    color: "#454545",
    fontWeight: "500",
    height: 50,
    fontSize: 20,
    marginBottom: 15,
  },
  modalText1: {
    color: "#7D7C7C",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  modalText: {
    color: "#454545",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButtonY: {
    width: "35%",
    // elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  modalButtonN: {
    width: "35%",
    // elevation: 4,
    backgroundColor: "#FF6464",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontFamily: "poppins-bold",
  },
  container: {
    flex: 1,
  },
  firstfloor: {
    width: 1100,
    height: 417,
    marginTop: 50,
  },
  image: {
    width: 1100,
    height: 417,
    flexDirection: "row",
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 27,
  },
  fE1_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE1_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE1_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE1_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE1_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE2: {
    width: 30,
    height: 31,
    marginLeft: 121,
    marginTop: 27,
  },
  fE2_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE2_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE2_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE2_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE2_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE3: {
    width: 30,
    height: 31,
    marginLeft: 121,
    marginTop: 28,
  },
  fE3_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE3_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE3_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE3_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE3_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE4: {
    width: 30,
    height: 31,
    marginLeft: 123,
    marginTop: 28,
  },
  fE4_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE4_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE4_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE4_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE4_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE5: {
    width: 30,
    height: 31,
    marginLeft: 46,
    marginTop: 27,
  },
  fE5_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE5_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE5_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE5_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE5_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE6: {
    width: 30,
    height: 31,
    marginLeft: 48,
    marginTop: 28,
  },
  fE6_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE6_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE6_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE6_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE6_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE7: {
    top: 28,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE7_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE7_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE7_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE7_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE7_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE8: {
    top: 0,
    left: 14,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE8_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE8_IC: {
    zIndex: 1,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE8_CStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE8_DC: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE8_CStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE7Stack: {
    width: 44,
    height: 59,
    marginLeft: 118,
  },
  fE1Row: {
    height: 59,
    flexDirection: "row",
    flex: 1,
    marginRight: 215,
    marginLeft: 84,
    marginTop: 151,
  },
});
