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

export default function FE_CICS_2nd({
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

  const [FE9, setFE9] = useState([]);

  useEffect(() => {
    const Fe9Data = [];
    const FE9Collections = collection(firebase, "FE9");
    const fetchFe9Data = async () => {
      try {
        const q9 = query(
          FE9Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot9 = await getDocs(q9);
        querySnapshot9.forEach((doc) => {
          const data9 = doc.data();
          Fe9Data.push(data9);
          // Use the data as needed
          console.log("Fetched FE9 data:", data9);
        });
        console.log(Fe9Data);
        setFE9(Fe9Data);
      } catch (error) {
        console.error("Error fetching FE9:", error);
      }
    };
    fetchFe9Data();
  }, []);

  const [FE10, setFE10] = useState([]);
  useEffect(() => {
    const Fe10Data = [];
    const FE10Collections = collection(firebase, "FE10");
    const fetchFe10Data = async () => {
      try {
        const q10 = query(
          FE10Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot10 = await getDocs(q10);
        querySnapshot10.forEach((doc) => {
          const data10 = doc.data();
          Fe10Data.push(data10);
          // Use the data as needed
          console.log("Fetched FE10 data:", data10);
        });
        console.log(Fe10Data);
        setFE10(Fe10Data);
      } catch (error) {
        console.error("Error fetching FE10:", error);
      }
    };
    fetchFe10Data();
  }, []);

  const [FE11, setFE11] = useState([]);
  useEffect(() => {
    const Fe11Data = [];
    const FE11Collections = collection(firebase, "FE11");
    const fetchFe11Data = async () => {
      try {
        const q11 = query(
          FE11Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
          const data11 = doc.data();
          Fe11Data.push(data11);
          // Use the data as needed
          console.log("Fetched FE11 data:", data11);
        });
        console.log(Fe11Data);
        setFE11(Fe11Data);
      } catch (error) {
        console.error("Error fetching FE11:", error);
      }
    };
    fetchFe11Data();
  }, []);

  const [FE12, setFE12] = useState([]);
  useEffect(() => {
    const Fe12Data = [];
    const FE12Collections = collection(firebase, "FE12");
    const fetchFe12Data = async () => {
      try {
        const q12 = query(
          FE12Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot12 = await getDocs(q12);
        querySnapshot12.forEach((doc) => {
          const data12 = doc.data();
          Fe12Data.push(data12);
          // Use the data as needed
          console.log("Fetched FE12 data:", data12);
        });
        console.log(Fe12Data);
        setFE12(Fe12Data);
      } catch (error) {
        console.error("Error fetching FE12:", error);
      }
    };
    fetchFe12Data();
  }, []);

  const [FE13, setFE13] = useState([]);
  useEffect(() => {
    const Fe13Data = [];
    const FE13Collections = collection(firebase, "FE13");
    const fetchFe13Data = async () => {
      try {
        const q13 = query(
          FE13Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot13 = await getDocs(q13);
        querySnapshot13.forEach((doc) => {
          const data13 = doc.data();
          Fe13Data.push(data13);
          // Use the data as needed
          console.log("Fetched FE13 data:", data13);
        });
        console.log(Fe13Data);
        setFE13(Fe13Data);
      } catch (error) {
        console.error("Error fetching FE13:", error);
      }
    };
    fetchFe13Data();
  }, []);

  const [FE14, setFE14] = useState([]);
  useEffect(() => {
    const Fe14Data = [];
    const FE14Collections = collection(firebase, "FE14");
    const fetchFe14Data = async () => {
      try {
        const q14 = query(
          FE14Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot14 = await getDocs(q14);
        querySnapshot14.forEach((doc) => {
          const data14 = doc.data();
          Fe14Data.push(data14);
          // Use the data as needed
          console.log("Fetched FE14 data:", data14);
        });
        console.log(Fe14Data);
        setFE14(Fe14Data);
      } catch (error) {
        console.error("Error fetching FE14:", error);
      }
    };
    fetchFe14Data();
  }, []);

  const [FE15, setFE15] = useState([]);
  useEffect(() => {
    const Fe15Data = [];
    const FE15Collections = collection(firebase, "FE15");
    const fetchFe15Data = async () => {
      try {
        const q15 = query(
          FE15Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot15 = await getDocs(q15);
        querySnapshot15.forEach((doc) => {
          const data15 = doc.data();
          Fe15Data.push(data15);
          // Use the data as needed
          console.log("Fetched FE15 data:", data15);
        });
        console.log(Fe15Data);
        setFE15(Fe15Data);
      } catch (error) {
        console.error("Error fetching FE15:", error);
      }
    };
    fetchFe15Data();
  }, []);

  const [FE16, setFE16] = useState([]);
  useEffect(() => {
    const Fe16Data = [];
    const FE16Collections = collection(firebase, "FE16");
    const fetchFe16Data = async () => {
      try {
        const q16 = query(
          FE16Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot16 = await getDocs(q16);
        querySnapshot16.forEach((doc) => {
          const data16 = doc.data();
          Fe16Data.push(data16);
          // Use the data as needed
          console.log("Fetched FE16 data:", data16);
        });
        console.log(Fe16Data);
        setFE16(Fe16Data);
      } catch (error) {
        console.error("Error fetching FE16:", error);
      }
    };
    fetchFe16Data();
  }, []);

  const refreshData = async () => {
    const Fe9Data = [];
    const FE9Collections = collection(firebase, "FE9");
    const fetchFe9Data = async () => {
      try {
        const q9 = query(
          FE9Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot9 = await getDocs(q9);
        querySnapshot9.forEach((doc) => {
          const data9 = doc.data();
          Fe9Data.push(data9);
          // Use the data as needed
          console.log("Fetched FE9 data:", data9);
        });
        console.log(Fe9Data);
        setFE9(Fe9Data);
      } catch (error) {
        console.error("Error fetching FE9:", error);
      }
    };
    fetchFe9Data();

    const Fe10Data = [];
    const FE10Collections = collection(firebase, "FE10");
    const fetchFe10Data = async () => {
      try {
        const q10 = query(
          FE10Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot10 = await getDocs(q10);
        querySnapshot10.forEach((doc) => {
          const data10 = doc.data();
          Fe10Data.push(data10);
          // Use the data as needed
          console.log("Fetched FE10 data:", data10);
        });
        console.log(Fe10Data);
        setFE10(Fe10Data);
      } catch (error) {
        console.error("Error fetching FE10:", error);
      }
    };
    fetchFe10Data();

    const Fe11Data = [];
    const FE11Collections = collection(firebase, "FE11");
    const fetchFe11Data = async () => {
      try {
        const q11 = query(
          FE11Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
          const data11 = doc.data();
          Fe11Data.push(data11);
          // Use the data as needed
          console.log("Fetched FE11 data:", data11);
        });
        console.log(Fe11Data);
        setFE11(Fe11Data);
      } catch (error) {
        console.error("Error fetching FE11:", error);
      }
    };
    fetchFe11Data();

    const Fe12Data = [];
    const FE12Collections = collection(firebase, "FE12");
    const fetchFe12Data = async () => {
      try {
        const q12 = query(
          FE12Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot12 = await getDocs(q12);
        querySnapshot12.forEach((doc) => {
          const data12 = doc.data();
          Fe12Data.push(data12);
          // Use the data as needed
          console.log("Fetched FE12 data:", data12);
        });
        console.log(Fe12Data);
        setFE12(Fe12Data);
      } catch (error) {
        console.error("Error fetching FE12:", error);
      }
    };
    fetchFe12Data();

    const Fe13Data = [];
    const FE13Collections = collection(firebase, "FE13");
    const fetchFe13Data = async () => {
      try {
        const q13 = query(
          FE13Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot13 = await getDocs(q13);
        querySnapshot13.forEach((doc) => {
          const data13 = doc.data();
          Fe13Data.push(data13);
          // Use the data as needed
          console.log("Fetched FE13 data:", data13);
        });
        console.log(Fe13Data);
        setFE13(Fe13Data);
      } catch (error) {
        console.error("Error fetching FE13:", error);
      }
    };
    fetchFe13Data();

    const Fe14Data = [];
    const FE14Collections = collection(firebase, "FE14");
    const fetchFe14Data = async () => {
      try {
        const q14 = query(
          FE14Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot14 = await getDocs(q14);
        querySnapshot14.forEach((doc) => {
          const data14 = doc.data();
          Fe14Data.push(data14);
          // Use the data as needed
          console.log("Fetched FE14 data:", data14);
        });
        console.log(Fe14Data);
        setFE14(Fe14Data);
      } catch (error) {
        console.error("Error fetching FE14:", error);
      }
    };
    fetchFe14Data();

    const Fe15Data = [];
    const FE15Collections = collection(firebase, "FE15");
    const fetchFe15Data = async () => {
      try {
        const q15 = query(
          FE15Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot15 = await getDocs(q15);
        querySnapshot15.forEach((doc) => {
          const data15 = doc.data();
          Fe15Data.push(data15);
          // Use the data as needed
          console.log("Fetched FE15 data:", data15);
        });
        console.log(Fe15Data);
        setFE15(Fe15Data);
      } catch (error) {
        console.error("Error fetching FE15:", error);
      }
    };
    fetchFe15Data();
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
          source={require("../../assets/images/CICS_2nd.png")}
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

                      {/* <View style={styles.closeicon}>
                        <TouchableOpacity onPress={hideModal}>
                          <Icon
                            name="close-circle-outline"
                            style={styles.close}
                          ></Icon>
                        </TouchableOpacity>
                      </View> */}
                    </View>
                  ))}
                {/* <View style={styles.lineG}></View> */}

                {selectedIcon &&
                  selectedIcon.map((item, index) => (
                    <Text key={index} style={styles.modalText}>
                      Fire Extinguisher ID: {item.id}
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

                {/* <TouchableOpacity onPress={() => navigation.navigate("ViewFe")}>
                  <Text style={styles.modalText1}>View Details</Text>
                </TouchableOpacity> */}
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
            {FE9.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("9")}
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

            {FE10.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("10")}
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

            {FE11.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE3}
                onPress={() => showModal("11")}
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

            {FE12.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE4}
                onPress={() => showModal("12")}
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

            {FE13.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("13")}
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

            {FE14.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("14")}
              >
                <View style={styles.fE10StackStack}>
                  <View style={styles.fE10Stack}>
                    <View
                      style={[
                        styles.fE10,
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
                      style={styles.fE12}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE11,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.fE17Column}>
              {FE16.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE17}
                  onPress={() => showModal("16")}
                >
                  <View style={styles.fE18StackStack}>
                    <View style={styles.fE18Stack}>
                      <View
                        style={[
                          styles.fE18,
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
                        style={styles.fE20}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE19,
                        {
                          backgroundColor:
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}
              {FE15.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE13}
                  onPress={() => showModal("15")}
                >
                  <View style={styles.fE14StackStack}>
                    <View style={styles.fE14Stack}>
                      <View
                        style={[
                          styles.fE14,
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
                        style={styles.fE16}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE15,
                        {
                          backgroundColor:
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
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
    // bottom: "20%",
    // backgroundColor: "rgba(255,255,255,1)",
  },
  image: {
    width: 1188,
    height: 424,

    marginLeft: 46,
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 30,
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
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE1_circleStack: {
    zIndex: 10,
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
    marginLeft: 135,
    marginTop: 30,
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
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE2_circleStack: {
    zIndex: 10,
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
    marginLeft: 137,
    marginTop: 29,
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
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE3_circleStack: {
    zIndex: 10,
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
    marginLeft: 137,
    marginTop: 30,
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
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE4_circleStack: {
    zIndex: 10,
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
    marginLeft: 53,
    marginTop: 29,
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
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE5_circleStack: {
    zIndex: 10,
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
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 55,
    marginTop: 30,
  },
  fE10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE12: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE10Stack: {
    zIndex: 10,
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE11: {
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
  fE10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE17: {
    width: 30,
    height: 31,
    marginLeft: 13,
  },
  fE18: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE20: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE18Stack: {
    zIndex: 10,
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE19: {
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
  fE18StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE13: {
    width: 30,
    height: 31,
  },
  fE14: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE16: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE14Stack: {
    zIndex: 10,
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE15: {
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
  fE14StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE17Column: {
    width: 43,
    marginLeft: 135,
  },
  fE1Row: {
    height: 62,
    flexDirection: "row",
    marginTop: 207,
    marginLeft: 82,
    marginRight: 231,
  },
});
