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
  ScrollView,
  ImageBackground,
} from "react-native";
import { firebase } from "../../../firebaseConfig";
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

export default function FE_CICS_4th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  console.log(formattedToday);

  const [FE30, setFE30] = useState([]);
  useEffect(() => {
    const Fe30Data = [];
    const FE30Collections = collection(firebase, "FE30");
    const fetchFe30Data = async () => {
      try {
        const q30 = query(
          FE30Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot30 = await getDocs(q30);
        querySnapshot30.forEach((doc) => {
          const data30 = doc.data();
          Fe30Data.push(data30);
          // Use the data as needed
          console.log("Fetched FE30 data:", data30);
        });
        console.log(Fe30Data);
        setFE30(Fe30Data);
      } catch (error) {
        console.error("Error fetching FE30:", error);
      }
    };
    fetchFe30Data();
  }, []);

  const [FE31, setFE31] = useState([]);
  useEffect(() => {
    const Fe31Data = [];
    const FE31Collections = collection(firebase, "FE31");
    const fetchFe31Data = async () => {
      try {
        const q31 = query(
          FE31Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot31 = await getDocs(q31);
        querySnapshot31.forEach((doc) => {
          const data31 = doc.data();
          Fe31Data.push(data31);
          // Use the data as needed
          console.log("Fetched FE31 data:", data31);
        });
        console.log(Fe31Data);
        setFE31(Fe31Data);
      } catch (error) {
        console.error("Error fetching FE31:", error);
      }
    };
    fetchFe31Data();
  }, []);

  const [FE32, setFE32] = useState([]);
  useEffect(() => {
    const Fe32Data = [];
    const FE32Collections = collection(firebase, "FE32");
    const fetchFe32Data = async () => {
      try {
        const q32 = query(
          FE32Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot32 = await getDocs(q32);
        querySnapshot32.forEach((doc) => {
          const data32 = doc.data();
          Fe32Data.push(data32);
          // Use the data as needed
          console.log("Fetched FE32 data:", data32);
        });
        console.log(Fe32Data);
        setFE32(Fe32Data);
      } catch (error) {
        console.error("Error fetching FE32:", error);
      }
    };
    fetchFe32Data();
  }, []);

  const [FE33, setFE33] = useState([]);
  useEffect(() => {
    const Fe33Data = [];
    const FE33Collections = collection(firebase, "FE33");
    const fetchFe33Data = async () => {
      try {
        const q33 = query(
          FE33Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot33 = await getDocs(q33);
        querySnapshot33.forEach((doc) => {
          const data33 = doc.data();
          Fe33Data.push(data33);
          // Use the data as needed
          console.log("Fetched FE33 data:", data33);
        });
        console.log(Fe33Data);
        setFE33(Fe33Data);
      } catch (error) {
        console.error("Error fetching FE33:", error);
      }
    };
    fetchFe33Data();
  }, []);

  const [FE34, setFE34] = useState([]);
  useEffect(() => {
    const Fe34Data = [];
    const FE34Collections = collection(firebase, "FE34");
    const fetchFe34Data = async () => {
      try {
        const q34 = query(
          FE34Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot34 = await getDocs(q34);
        querySnapshot34.forEach((doc) => {
          const data34 = doc.data();
          Fe34Data.push(data34);
          // Use the data as needed
          console.log("Fetched FE34 data:", data34);
        });
        console.log(Fe34Data);
        setFE34(Fe34Data);
      } catch (error) {
        console.error("Error fetching FE34:", error);
      }
    };
    fetchFe34Data();
  }, []);

  const [FE35, setFE35] = useState([]);
  useEffect(() => {
    const Fe35Data = [];
    const FE35Collections = collection(firebase, "FE35");
    const fetchFe35Data = async () => {
      try {
        const q35 = query(
          FE35Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot35 = await getDocs(q35);
        querySnapshot35.forEach((doc) => {
          const data35 = doc.data();
          Fe35Data.push(data35);
          // Use the data as needed
          console.log("Fetched FE35 data:", data35);
        });
        console.log(Fe35Data);
        setFE35(Fe35Data);
      } catch (error) {
        console.error("Error fetching FE35:", error);
      }
    };
    fetchFe35Data();
  }, []);

  const [FE36, setFE36] = useState([]);
  useEffect(() => {
    const Fe36Data = [];
    const FE36Collections = collection(firebase, "FE36");
    const fetchFe36Data = async () => {
      try {
        const q36 = query(
          FE36Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot36 = await getDocs(q36);
        querySnapshot36.forEach((doc) => {
          const data36 = doc.data();
          Fe36Data.push(data36);
          // Use the data as needed
          console.log("Fetched FE36 data:", data36);
        });
        console.log(Fe36Data);
        setFE36(Fe36Data);
      } catch (error) {
        console.error("Error fetching FE36:", error);
      }
    };
    fetchFe36Data();
  }, []);

  const refreshData = async () => {
    const Fe30Data = [];
    const FE30Collections = collection(firebase, "FE30");
    const fetchFe30Data = async () => {
      try {
        const q30 = query(
          FE30Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot30 = await getDocs(q30);
        querySnapshot30.forEach((doc) => {
          const data30 = doc.data();
          Fe30Data.push(data30);
          // Use the data as needed
          console.log("Fetched FE30 data:", data30);
        });
        console.log(Fe30Data);
        setFE30(Fe30Data);
      } catch (error) {
        console.error("Error fetching FE30:", error);
      }
    };

    fetchFe30Data();
    const Fe31Data = [];
    const FE31Collections = collection(firebase, "FE31");
    const fetchFe31Data = async () => {
      try {
        const q31 = query(
          FE31Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot31 = await getDocs(q31);
        querySnapshot31.forEach((doc) => {
          const data31 = doc.data();
          Fe31Data.push(data31);
          // Use the data as needed
          console.log("Fetched FE31 data:", data31);
        });
        console.log(Fe31Data);
        setFE31(Fe31Data);
      } catch (error) {
        console.error("Error fetching FE31:", error);
      }
    };
    fetchFe31Data();

    const Fe32Data = [];
    const FE32Collections = collection(firebase, "FE32");
    const fetchFe32Data = async () => {
      try {
        const q32 = query(
          FE32Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot32 = await getDocs(q32);
        querySnapshot32.forEach((doc) => {
          const data32 = doc.data();
          Fe32Data.push(data32);
          // Use the data as needed
          console.log("Fetched FE32 data:", data32);
        });
        console.log(Fe32Data);
        setFE32(Fe32Data);
      } catch (error) {
        console.error("Error fetching FE32:", error);
      }
    };
    fetchFe32Data();

    const Fe33Data = [];
    const FE33Collections = collection(firebase, "FE33");
    const fetchFe33Data = async () => {
      try {
        const q33 = query(
          FE33Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot33 = await getDocs(q33);
        querySnapshot33.forEach((doc) => {
          const data33 = doc.data();
          Fe33Data.push(data33);
          // Use the data as needed
          console.log("Fetched FE33 data:", data33);
        });
        console.log(Fe33Data);
        setFE33(Fe33Data);
      } catch (error) {
        console.error("Error fetching FE33:", error);
      }
    };
    fetchFe33Data();

    const Fe34Data = [];
    const FE34Collections = collection(firebase, "FE34");
    const fetchFe34Data = async () => {
      try {
        const q34 = query(
          FE34Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot34 = await getDocs(q34);
        querySnapshot34.forEach((doc) => {
          const data34 = doc.data();
          Fe34Data.push(data34);
          // Use the data as needed
          console.log("Fetched FE34 data:", data34);
        });
        console.log(Fe34Data);
        setFE34(Fe34Data);
      } catch (error) {
        console.error("Error fetching FE34:", error);
      }
    };
    fetchFe34Data();

    const Fe35Data = [];
    const FE35Collections = collection(firebase, "FE35");
    const fetchFe35Data = async () => {
      try {
        const q35 = query(
          FE35Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot35 = await getDocs(q35);
        querySnapshot35.forEach((doc) => {
          const data35 = doc.data();
          Fe35Data.push(data35);
          // Use the data as needed
          console.log("Fetched FE35 data:", data35);
        });
        console.log(Fe35Data);
        setFE35(Fe35Data);
      } catch (error) {
        console.error("Error fetching FE35:", error);
      }
    };
    fetchFe35Data();

    const Fe36Data = [];
    const FE36Collections = collection(firebase, "FE36");
    const fetchFe36Data = async () => {
      try {
        const q36 = query(
          FE36Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot36 = await getDocs(q36);
        querySnapshot36.forEach((doc) => {
          const data36 = doc.data();
          Fe36Data.push(data36);
          // Use the data as needed
          console.log("Fetched FE36 data:", data36);
        });
        console.log(Fe36Data);
        setFE36(Fe36Data);
      } catch (error) {
        console.error("Error fetching FE36:", error);
      }
    };
    fetchFe36Data();
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", right: 80, zIndex: 10 }}>
        <TouchableOpacity
          onPress={refreshData}
          style={{
            backgroundColor: "#ED474A",
            padding: 10,
            // bottom: "-350%",
            left: 70,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <ImageBackground
          source={require("../../assets/images/CICS_4th.png")}
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
                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.linetop,
                        {
                          backgroundColor:
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    >
                      <View style={styles.cont}>
                        {item.date === formattedToday ? (
                          <>
                            <Icon
                              name="checkmark-circle-outline"
                              style={styles.check}
                            ></Icon>
                            <Text style={styles.inspected}>
                              INSPECTED TODAY
                            </Text>
                          </>
                        ) : (
                          <>
                            <Icon
                              name="close-circle-outline"
                              style={styles.check}
                            ></Icon>
                            <Text style={styles.inspected}>
                              NOT INSPECTED TODAY
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                  ))}

                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <Text key={index} style={styles.modalText}>
                      Fire Extinguisher ID: {item.id}
                    </Text>
                  ))}

                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <View key={index} style={styles.textcont}>
                      <Text style={styles.modalText1}>Conditon: </Text>
                      <Text
                        style={[
                          styles.modalText1,
                          {
                            color:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FFA33C"
                                : "#FF6464",
                          },
                        ]}
                      >
                        {item.condition}
                      </Text>
                    </View>
                  ))}

                <View style={styles.line}></View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.modalButtonY}
                    onPress={hideModal}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <View style={styles.fE1Row}>
            {FE30.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("30")}
              >
                <View style={styles.fE1_circleStackStack}>
                  <View style={styles.fE1_circleStack}>
                    <View
                      style={[
                        styles.fE1_circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE1_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE1_downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            {FE31.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("31")}
              >
                <View style={styles.fE2_circleStackStack}>
                  <View style={styles.fE2_circleStack}>
                    <View
                      style={[
                        styles.fE2_circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE2_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE2_downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            {FE32.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE3}
                onPress={() => showModal("32")}
              >
                <View style={styles.fE3_circleStackStack}>
                  <View style={styles.fE3_circleStack}>
                    <View
                      style={[
                        styles.fE3_circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE3_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE3_downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            {FE33.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE4}
                onPress={() => showModal("33")}
              >
                <View style={styles.fE4_circleStackStack}>
                  <View style={styles.fE4_circleStack}>
                    <View
                      style={[
                        styles.fE4_circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE4_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE4_downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            {FE34.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("34")}
              >
                <View style={styles.fE5_circleStackStack}>
                  <View style={styles.fE5_circleStack}>
                    <View
                      style={[
                        styles.fE5_circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE5_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE5_downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            {FE35.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE10}
                onPress={() => showModal("35")}
              >
                <View style={styles.fE10circleStackStack}>
                  <View style={styles.fE10circleStack}>
                    <View
                      style={[
                        styles.fE10circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE10icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE10downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            {FE36.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE11}
                onPress={() => showModal("36")}
              >
                <View style={styles.fE11circleStackStack}>
                  <View style={styles.fE11circleStack}>
                    <View
                      style={[
                        styles.fE11circle,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FFA33C"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE11icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE11downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  textcont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont: {
    // backgroundColor: "#F1EFEF",
    // flexDirection: "row",
    // justifyContent: "space-between",
    top: 15,
    alignItems: "center",
    // height: 50, // Set the desired height of the row
    // paddingHorizontal: 10,
    // marginBottom: 15,
  },
  closeicon: {
    // top: 2,
    marginLeft: 400,
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
    color: "white",
    fontSize: 150,
    alignSelf: "center",
    // backgroundColor: "#7FCD91",
  },
  linetop: {
    // borderRadius: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: 0,
    height: "45%",
    width: "100%",
    zIndex: 1,
    backgroundColor: "#7FCD91",
    // backgroundColor: "#3085C3",
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomWidth: 2,
    elevation: 1,
    // borderBottomColor: "red", // You can change the color of the line
  },

  line: {
    top: 50,
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
    alignItems: "center",
    width: "35%", // Adjust the width as needed
    height: "65%", // Adjust the height as needed
  },
  inspected: {
    color: "white",
    // fontWeight: "500",
    height: 50,
    fontSize: 25,
    // top: 20,
    // marginBottom: 15,
  },
  modalText1: {
    color: "#454545",
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
    top: 20,
    fontWeight: "500",
  },
  modalText: {
    color: "#454545",
    fontWeight: "500",
    fontSize: 25,
    marginBottom: 40,
    top: 40,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButtonY: {
    width: "70%",
    elevation: 2,
    backgroundColor: "#F5F5F5",

    padding: 20,
    borderRadius: 10,
    top: 40,
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
    color: "#454545",
    fontWeight: "900",
    fontFamily: "poppins-bold",
  },
  container: {
    flex: 1,
  },
  image: {
    width: 1150,
    height: 402,
    flexDirection: "row",

    marginLeft: 65,
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 18,
  },
  fE1_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE1_icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE1_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE1_downcircle: {
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
  fE1_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE2: {
    width: 30,
    height: 31,
    marginLeft: 130,
    marginTop: 20,
  },
  fE2_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE2_icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE2_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE2_downcircle: {
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
  fE2_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE3: {
    width: 30,
    height: 31,
    marginLeft: 131,
    marginTop: 23,
  },
  fE3_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE3_icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE3_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE3_downcircle: {
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
  fE3_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE4: {
    width: 30,
    height: 31,
    marginLeft: 130,
    marginTop: 20,
  },
  fE4_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE4_icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE4_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE4_downcircle: {
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
  fE4_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE5: {
    width: 30,
    height: 31,
    marginLeft: 135,
    marginTop: 20,
  },
  fE5_circle: {
    top: 8,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE5_icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE5_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE5_downcircle: {
    top: 23,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE5_circleStackStack: {
    width: 30,
    height: 34,
    marginTop: -3,
  },
  fE10: {
    width: 30,
    height: 31,
    marginLeft: 128,
    marginTop: 19,
  },
  fE10circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE10icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE10circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE10downcircle: {
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
  fE10circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE11: {
    width: 30,
    height: 31,
    marginLeft: 120,
  },
  fE11circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE11icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE11circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE11downcircle: {
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
  fE11circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE1Row: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 87,
    marginLeft: 79,
    marginTop: 204,
  },
});
