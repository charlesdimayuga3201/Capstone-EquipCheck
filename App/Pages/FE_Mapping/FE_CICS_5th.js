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

export default function FE_CICS_5th({
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

  const [FE37, setFE37] = useState([]);
  useEffect(() => {
    const Fe37Data = [];
    const FE37Collections = collection(firebase, "FE37");
    const fetchFe37Data = async () => {
      try {
        const q37 = query(
          FE37Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot37 = await getDocs(q37);
        querySnapshot37.forEach((doc) => {
          const data37 = doc.data();
          Fe37Data.push(data37);
          // Use the data as needed
          console.log("Fetched FE37 data:", data37);
        });
        console.log(Fe37Data);
        setFE37(Fe37Data);
      } catch (error) {
        console.error("Error fetching FE37:", error);
      }
    };
    fetchFe37Data();
  }, []);

  const [FE38, setFE38] = useState([]);
  useEffect(() => {
    const Fe38Data = [];
    const FE38Collections = collection(firebase, "FE38");
    const fetchFe38Data = async () => {
      try {
        const q38 = query(
          FE38Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot38 = await getDocs(q38);
        querySnapshot38.forEach((doc) => {
          const data38 = doc.data();
          Fe38Data.push(data38);
          // Use the data as needed
          console.log("Fetched FE38 data:", data38);
        });
        console.log(Fe38Data);
        setFE38(Fe38Data);
      } catch (error) {
        console.error("Error fetching FE38:", error);
      }
    };
    fetchFe38Data();
  }, []);

  const [FE39, setFE39] = useState([]);
  useEffect(() => {
    const Fe39Data = [];
    const FE39Collections = collection(firebase, "FE39");
    const fetchFe39Data = async () => {
      try {
        const q39 = query(
          FE39Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot39 = await getDocs(q39);
        querySnapshot39.forEach((doc) => {
          const data39 = doc.data();
          Fe39Data.push(data39);
          // Use the data as needed
          console.log("Fetched FE39 data:", data39);
        });
        console.log(Fe39Data);
        setFE39(Fe39Data);
      } catch (error) {
        console.error("Error fetching FE39:", error);
      }
    };
    fetchFe39Data();
  }, []);

  const [FE40, setFE40] = useState([]);
  useEffect(() => {
    const Fe40Data = [];
    const FE40Collections = collection(firebase, "FE40");
    const fetchFe40Data = async () => {
      try {
        const q40 = query(
          FE40Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot40 = await getDocs(q40);
        querySnapshot40.forEach((doc) => {
          const data40 = doc.data();
          Fe40Data.push(data40);
          // Use the data as needed
          console.log("Fetched FE40 data:", data40);
        });
        console.log(Fe40Data);
        setFE40(Fe40Data);
      } catch (error) {
        console.error("Error fetching FE40:", error);
      }
    };
    fetchFe40Data();
  }, []);

  const [FE41, setFE41] = useState([]);
  useEffect(() => {
    const Fe41Data = [];
    const FE41Collections = collection(firebase, "FE41");
    const fetchFe41Data = async () => {
      try {
        const q41 = query(
          FE41Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot41 = await getDocs(q41);
        querySnapshot41.forEach((doc) => {
          const data41 = doc.data();
          Fe41Data.push(data41);
          // Use the data as needed
          console.log("Fetched FE41 data:", data41);
        });
        console.log(Fe41Data);
        setFE41(Fe41Data);
      } catch (error) {
        console.error("Error fetching FE41:", error);
      }
    };
    fetchFe41Data();
  }, []);

  const [FE42, setFE42] = useState([]);
  useEffect(() => {
    const Fe42Data = [];
    const FE42Collections = collection(firebase, "FE42");
    const fetchFe42Data = async () => {
      try {
        const q42 = query(
          FE42Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot42 = await getDocs(q42);
        querySnapshot42.forEach((doc) => {
          const data42 = doc.data();
          Fe42Data.push(data42);
          // Use the data as needed
          console.log("Fetched FE42 data:", data42);
        });
        console.log(Fe42Data);
        setFE42(Fe42Data);
      } catch (error) {
        console.error("Error fetching FE42:", error);
      }
    };
    fetchFe42Data();
  }, []);

  const [FE43, setFE43] = useState([]);
  useEffect(() => {
    const Fe43Data = [];
    const FE43Collections = collection(firebase, "FE43");
    const fetchFe43Data = async () => {
      try {
        const q43 = query(
          FE43Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot43 = await getDocs(q43);
        querySnapshot43.forEach((doc) => {
          const data43 = doc.data();
          Fe43Data.push(data43);
          // Use the data as needed
          console.log("Fetched FE43 data:", data43);
        });
        console.log(Fe43Data);
        setFE43(Fe43Data);
      } catch (error) {
        console.error("Error fetching FE43:", error);
      }
    };
    fetchFe43Data();
  }, []);
  const refreshData = async () => {
    const Fe37Data = [];
    const FE37Collections = collection(firebase, "FE37");
    const fetchFe37Data = async () => {
      try {
        const q37 = query(
          FE37Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot37 = await getDocs(q37);
        querySnapshot37.forEach((doc) => {
          const data37 = doc.data();
          Fe37Data.push(data37);
          // Use the data as needed
          console.log("Fetched FE37 data:", data37);
        });
        console.log(Fe37Data);
        setFE37(Fe37Data);
      } catch (error) {
        console.error("Error fetching FE37:", error);
      }
    };
    fetchFe37Data();

    const Fe38Data = [];
    const FE38Collections = collection(firebase, "FE38");
    const fetchFe38Data = async () => {
      try {
        const q38 = query(
          FE38Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot38 = await getDocs(q38);
        querySnapshot38.forEach((doc) => {
          const data38 = doc.data();
          Fe38Data.push(data38);
          // Use the data as needed
          console.log("Fetched FE38 data:", data38);
        });
        console.log(Fe38Data);
        setFE38(Fe38Data);
      } catch (error) {
        console.error("Error fetching FE38:", error);
      }
    };
    fetchFe38Data();

    const Fe39Data = [];
    const FE39Collections = collection(firebase, "FE39");
    const fetchFe39Data = async () => {
      try {
        const q39 = query(
          FE39Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot39 = await getDocs(q39);
        querySnapshot39.forEach((doc) => {
          const data39 = doc.data();
          Fe39Data.push(data39);
          // Use the data as needed
          console.log("Fetched FE39 data:", data39);
        });
        console.log(Fe39Data);
        setFE39(Fe39Data);
      } catch (error) {
        console.error("Error fetching FE39:", error);
      }
    };
    fetchFe39Data();

    const Fe40Data = [];
    const FE40Collections = collection(firebase, "FE40");
    const fetchFe40Data = async () => {
      try {
        const q40 = query(
          FE40Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot40 = await getDocs(q40);
        querySnapshot40.forEach((doc) => {
          const data40 = doc.data();
          Fe40Data.push(data40);
          // Use the data as needed
          console.log("Fetched FE40 data:", data40);
        });
        console.log(Fe40Data);
        setFE40(Fe40Data);
      } catch (error) {
        console.error("Error fetching FE40:", error);
      }
    };
    fetchFe40Data();

    const Fe41Data = [];
    const FE41Collections = collection(firebase, "FE41");
    const fetchFe41Data = async () => {
      try {
        const q41 = query(
          FE41Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot41 = await getDocs(q41);
        querySnapshot41.forEach((doc) => {
          const data41 = doc.data();
          Fe41Data.push(data41);
          // Use the data as needed
          console.log("Fetched FE41 data:", data41);
        });
        console.log(Fe41Data);
        setFE41(Fe41Data);
      } catch (error) {
        console.error("Error fetching FE41:", error);
      }
    };
    fetchFe41Data();

    const Fe42Data = [];
    const FE42Collections = collection(firebase, "FE42");
    const fetchFe42Data = async () => {
      try {
        const q42 = query(
          FE42Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot42 = await getDocs(q42);
        querySnapshot42.forEach((doc) => {
          const data42 = doc.data();
          Fe42Data.push(data42);
          // Use the data as needed
          console.log("Fetched FE42 data:", data42);
        });
        console.log(Fe42Data);
        setFE42(Fe42Data);
      } catch (error) {
        console.error("Error fetching FE42:", error);
      }
    };
    fetchFe42Data();

    const Fe43Data = [];
    const FE43Collections = collection(firebase, "FE43");
    const fetchFe43Data = async () => {
      try {
        const q43 = query(
          FE43Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot43 = await getDocs(q43);
        querySnapshot43.forEach((doc) => {
          const data43 = doc.data();
          Fe43Data.push(data43);
          // Use the data as needed
          console.log("Fetched FE43 data:", data43);
        });
        console.log(Fe43Data);
        setFE43(Fe43Data);
      } catch (error) {
        console.error("Error fetching FE43:", error);
      }
    };
    fetchFe43Data();
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
          source={require("../../assets/images/CICS_5th.png")}
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
          {FE43.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE11}
              onPress={() => showModal("43")}
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
          <View style={styles.fE1Row}>
            {FE37.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("37")}
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

            {FE38.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("38")}
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

            {FE39.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE3}
                onPress={() => showModal("39")}
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

            {FE40.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE4}
                onPress={() => showModal("40")}
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

            {FE41.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("41")}
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

            {FE42.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE10}
                onPress={() => showModal("42")}
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
    width: 1215,
    height: 412,
    flexDirection: "row",

    marginLeft: 39,
  },
  image_imageStyle: {},
  fE11: {
    width: 30,
    height: 31,
    marginLeft: 1087,
    marginTop: 188,
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
  fE1: {
    width: 30,
    height: 31,
    marginTop: 1,
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
    marginLeft: 140,
    marginTop: 1,
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
    marginLeft: 141,
    marginTop: 1,
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
    marginLeft: 53,
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
    marginLeft: 56,
    marginTop: 1,
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
    marginLeft: 54,
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
  fE1Row: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 336,
    marginLeft: -862,
    marginTop: 225,
  },
});
