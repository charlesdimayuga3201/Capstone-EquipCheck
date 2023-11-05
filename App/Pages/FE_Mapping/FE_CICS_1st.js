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
  const formattedToday = format(today, "MM/d/yyyy");
  console.log(formattedToday);

  const [FE1, setFE1] = useState([]);

  useEffect(() => {
    const Fe1Data = [];
    const FE1Collections = collection(firebase, "FE1");
    const fetchFe1Data = async () => {
      try {
        const q = query(
          FE1Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          Fe1Data.push(data);
          // Use the data as needed
          console.log("Fetched FE1 data:", data);
        });
        console.log(Fe1Data);
        setFE1(Fe1Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchFe1Data();
  }, []);

  const [FE2, setFE2] = useState([]);
  useEffect(() => {
    const Fe2Data = [];
    const FE2Collections = collection(firebase, "FE2");
    const fetchFe2Data = async () => {
      try {
        const q2 = query(
          FE2Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          const data2 = doc.data();
          Fe2Data.push(data2);
          // Use the data as needed
          console.log("Fetched FE1 data:", data2);
        });
        console.log(Fe2Data);
        setFE2(Fe2Data);
      } catch (error) {
        console.error("Error fetching FE3:", error);
      }
    };
    fetchFe2Data();
  }, []);

  const [FE3, setFE3] = useState([]);
  useEffect(() => {
    const Fe3Data = [];
    const FE3Collections = collection(firebase, "FE3");
    const fetchFe3Data = async () => {
      try {
        const q3 = query(
          FE3Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot3 = await getDocs(q3);
        querySnapshot3.forEach((doc) => {
          const data3 = doc.data();
          Fe3Data.push(data3);
          // Use the data as needed
          console.log("Fetched FE3 data:", data3);
        });
        console.log(Fe3Data);
        setFE3(Fe3Data);
      } catch (error) {
        console.error("Error fetching FE3:", error);
      }
    };
    fetchFe3Data();
  }, []);

  const [FE4, setFE4] = useState([]);
  useEffect(() => {
    const Fe4Data = [];
    const FE4Collections = collection(firebase, "FE4");
    const fetchFe4Data = async () => {
      try {
        const q4 = query(
          FE4Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot4 = await getDocs(q4);
        querySnapshot4.forEach((doc) => {
          const data4 = doc.data();
          Fe4Data.push(data4);
          // Use the data as needed
          console.log("Fetched FE4 data:", data4);
        });
        console.log(Fe4Data);
        setFE4(Fe4Data);
      } catch (error) {
        console.error("Error fetching FE4:", error);
      }
    };
    fetchFe4Data();
  }, []);

  const [FE5, setFE5] = useState([]);
  useEffect(() => {
    const Fe5Data = [];
    const FE5Collections = collection(firebase, "FE5");
    const fetchFe5Data = async () => {
      try {
        const q5 = query(
          FE5Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot5 = await getDocs(q5);
        querySnapshot5.forEach((doc) => {
          const data5 = doc.data();
          Fe5Data.push(data5);
          // Use the data as needed
          console.log("Fetched FE5 data:", data5);
        });
        console.log(Fe5Data);
        setFE5(Fe5Data);
      } catch (error) {
        console.error("Error fetching FE5:", error);
      }
    };
    fetchFe5Data();
  }, []);

  const [FE6, setFE6] = useState([]);
  useEffect(() => {
    const Fe6Data = [];
    const FE6Collections = collection(firebase, "FE6");
    const fetchFe6Data = async () => {
      try {
        const q6 = query(
          FE6Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot6 = await getDocs(q6);
        querySnapshot6.forEach((doc) => {
          const data6 = doc.data();
          Fe6Data.push(data6);
          // Use the data as needed
          console.log("Fetched FE6 data:", data6);
        });
        console.log(Fe6Data);
        setFE6(Fe6Data);
      } catch (error) {
        console.error("Error fetching FE6:", error);
      }
    };
    fetchFe6Data();
  }, []);

  const [FE7, setFE7] = useState([]);
  useEffect(() => {
    const Fe7Data = [];
    const FE7Collections = collection(firebase, "FE7");
    const fetchFe7Data = async () => {
      try {
        const q7 = query(
          FE7Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot7 = await getDocs(q7);
        querySnapshot7.forEach((doc) => {
          const data7 = doc.data();
          Fe7Data.push(data7);
          // Use the data as needed
          console.log("Fetched FE7 data:", data7);
        });
        console.log(Fe7Data);
        setFE7(Fe7Data);
      } catch (error) {
        console.error("Error fetching FE7:", error);
      }
    };
    fetchFe7Data();
  }, []);

  const [FE8, setFE8] = useState([]);
  useEffect(() => {
    const Fe8Data = [];
    const FE8Collections = collection(firebase, "FE8");
    const fetchFe8Data = async () => {
      try {
        const q8 = query(
          FE8Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot8 = await getDocs(q8);
        querySnapshot8.forEach((doc) => {
          const data8 = doc.data();
          Fe8Data.push(data8);
          // Use the data as needed
          console.log("Fetched FE8 data:", data8);
        });
        console.log(Fe8Data);
        setFE8(Fe8Data);
      } catch (error) {
        console.error("Error fetching FE8:", error);
      }
    };
    fetchFe8Data();
  }, []);

  // refresh datas
  const refreshData = async () => {
    const Fe1Data = [];
    const FE1Collections = collection(firebase, "FE1");
    const fetchFe1Data = async () => {
      try {
        const q = query(
          FE1Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          Fe1Data.push(data);
          // Use the data as needed
          console.log("Fetched FE1 data:", data);
        });
        console.log(Fe1Data);
        setFE1(Fe1Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchFe1Data();

    const Fe2Data = [];
    const FE2Collections = collection(firebase, "FE2");
    const fetchFe2Data = async () => {
      try {
        const q2 = query(
          FE2Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          const data2 = doc.data();
          Fe2Data.push(data2);
          // Use the data as needed
          console.log("Fetched FE2 data:", data2);
        });
        console.log(Fe2Data);
        setFE2(Fe2Data);
      } catch (error) {
        console.error("Error fetching FE2:", error);
      }
    };
    fetchFe2Data();

    const Fe3Data = [];
    const FE3Collections = collection(firebase, "FE3");
    const fetchFe3Data = async () => {
      try {
        const q3 = query(
          FE3Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot3 = await getDocs(q3);
        querySnapshot3.forEach((doc) => {
          const data3 = doc.data();
          Fe3Data.push(data3);
          // Use the data as needed
          console.log("Fetched FE3 data:", data3);
        });
        console.log(Fe3Data);
        setFE3(Fe3Data);
      } catch (error) {
        console.error("Error fetching FE3:", error);
      }
    };
    fetchFe3Data();

    const Fe4Data = [];
    const FE4Collections = collection(firebase, "FE4");
    const fetchFe4Data = async () => {
      try {
        const q4 = query(
          FE4Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot4 = await getDocs(q4);
        querySnapshot4.forEach((doc) => {
          const data4 = doc.data();
          Fe4Data.push(data4);
          // Use the data as needed
          console.log("Fetched FE4 data:", data4);
        });
        console.log(Fe4Data);
        setFE4(Fe4Data);
      } catch (error) {
        console.error("Error fetching FE4:", error);
      }
    };
    fetchFe4Data();

    const Fe5Data = [];
    const FE5Collections = collection(firebase, "FE5");
    const fetchFe5Data = async () => {
      try {
        const q5 = query(
          FE5Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot5 = await getDocs(q5);
        querySnapshot5.forEach((doc) => {
          const data5 = doc.data();
          Fe5Data.push(data5);
          // Use the data as needed
          console.log("Fetched FE5 data:", data5);
        });
        console.log(Fe5Data);
        setFE5(Fe5Data);
      } catch (error) {
        console.error("Error fetching FE5:", error);
      }
    };
    fetchFe5Data();

    const Fe6Data = [];
    const FE6Collections = collection(firebase, "FE6");
    const fetchFe6Data = async () => {
      try {
        const q6 = query(
          FE6Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot6 = await getDocs(q6);
        querySnapshot6.forEach((doc) => {
          const data6 = doc.data();
          Fe6Data.push(data6);
          // Use the data as needed
          console.log("Fetched FE6 data:", data6);
        });
        console.log(Fe6Data);
        setFE6(Fe6Data);
      } catch (error) {
        console.error("Error fetching FE6:", error);
      }
    };
    fetchFe6Data();

    const Fe7Data = [];
    const FE7Collections = collection(firebase, "FE7");
    const fetchFe7Data = async () => {
      try {
        const q7 = query(
          FE7Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot7 = await getDocs(q7);
        querySnapshot7.forEach((doc) => {
          const data7 = doc.data();
          Fe7Data.push(data7);
          // Use the data as needed
          console.log("Fetched FE7 data:", data7);
        });
        console.log(Fe7Data);
        setFE7(Fe7Data);
      } catch (error) {
        console.error("Error fetching FE7:", error);
      }
    };
    fetchFe7Data();

    const Fe8Data = [];
    const FE8Collections = collection(firebase, "FE8");
    const fetchFe8Data = async () => {
      try {
        const q8 = query(
          FE8Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot8 = await getDocs(q8);
        querySnapshot8.forEach((doc) => {
          const data8 = doc.data();
          Fe8Data.push(data8);
          // Use the data as needed
          console.log("Fetched FE8 data:", data8);
        });
        console.log(Fe8Data);
        setFE8(Fe8Data);
      } catch (error) {
        console.error("Error fetching FE8:", error);
      }
    };
    fetchFe8Data();
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", right: 80 }}>
        <TouchableOpacity
          onPress={refreshData}
          style={{
            backgroundColor: "#ED474A",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
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
              {FE1.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE1}
                  onPress={() => showModal("1")}
                >
                  <View style={styles.fE1_CStackStack}>
                    <View style={styles.fE1_CStack}>
                      <View
                        style={[
                          styles.fE1_C,
                          {
                            backgroundColor:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FF9209"
                                : "#FF6464",
                          },
                        ]}
                      ></View>
                      <MaterialIconsIcon
                        name="location-on"
                        style={styles.fE1_IC}
                      ></MaterialIconsIcon>
                    </View>

                    <View
                      style={[
                        styles.fE1_DC,
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

              {FE2.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE2}
                  onPress={() => showModal("2")}
                >
                  <View style={styles.fE2_CStackStack}>
                    <View style={styles.fE2_CStack}>
                      <View
                        style={[
                          styles.fE2_C,
                          {
                            backgroundColor:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FF9209"
                                : "#FF6464",
                          },
                        ]}
                      ></View>
                      <MaterialIconsIcon
                        name="location-on"
                        style={styles.fE2_IC}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE2_DC,
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

              {FE3.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE3}
                  onPress={() => showModal("3")}
                >
                  <View style={styles.fE3_CStackStack}>
                    <View style={styles.fE3_CStack}>
                      <View
                        style={[
                          styles.fE3_C,
                          {
                            backgroundColor:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FF9209"
                                : "#FF6464",
                          },
                        ]}
                      ></View>
                      <MaterialIconsIcon
                        name="location-on"
                        style={styles.fE3_IC}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE3_DC,
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

              {FE4.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE4}
                  onPress={() => showModal("4")}
                >
                  <View style={styles.fE4_CStackStack}>
                    <View style={styles.fE4_CStack}>
                      <View
                        style={[
                          styles.fE4_C,
                          {
                            backgroundColor:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FF9209"
                                : "#FF6464",
                          },
                        ]}
                      ></View>
                      <MaterialIconsIcon
                        name="location-on"
                        style={styles.fE4_IC}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE4_DC,
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

              {FE5.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE5}
                  onPress={() => showModal("5")}
                >
                  <View style={styles.fE5_CStackStack}>
                    <View style={styles.fE5_CStack}>
                      <View
                        style={[
                          styles.fE5_C,
                          {
                            backgroundColor:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FF9209"
                                : "#FF6464",
                          },
                        ]}
                      ></View>
                      <MaterialIconsIcon
                        name="location-on"
                        style={styles.fE5_IC}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE5_DC,
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

              {FE6.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE6}
                  onPress={() => showModal("6")}
                >
                  <View style={styles.fE6_CStackStack}>
                    <View style={styles.fE6_CStack}>
                      <View
                        style={[
                          styles.fE6_C,
                          {
                            backgroundColor:
                              item.condition === "Good Condition"
                                ? "#7FCD91"
                                : item.condition === "Slightly Damage"
                                ? "#FF9209"
                                : "#FF6464",
                          },
                        ]}
                      ></View>
                      <MaterialIconsIcon
                        name="location-on"
                        style={styles.fE6_IC}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE6_DC,
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

              <View style={styles.fE7Stack}>
                {FE7.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.fE7}
                    onPress={() => showModal("7")}
                  >
                    <View style={styles.fE7_CStackStack}>
                      <View style={styles.fE7_CStack}>
                        <View
                          style={[
                            styles.fE7_C,
                            {
                              backgroundColor:
                                item.condition === "Good Condition"
                                  ? "#7FCD91"
                                  : item.condition === "Slightly Damage"
                                  ? "#FF9209"
                                  : "#FF6464",
                            },
                          ]}
                        ></View>
                        <MaterialIconsIcon
                          name="location-on"
                          style={styles.fE7_IC}
                        ></MaterialIconsIcon>
                      </View>
                      <View
                        style={[
                          styles.fE7_DC,
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

                {FE8.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.fE8}
                    onPress={() => showModal("8")}
                  >
                    <View style={styles.fE8_CStackStack}>
                      <View style={styles.fE8_CStack}>
                        <View
                          style={[
                            styles.fE8_C,
                            {
                              backgroundColor:
                                item.condition === "Good Condition"
                                  ? "#7FCD91"
                                  : item.condition === "Slightly Damage"
                                  ? "#FF9209"
                                  : "#FF6464",
                            },
                          ]}
                        ></View>
                        <MaterialIconsIcon
                          name="location-on"
                          style={styles.fE8_IC}
                        ></MaterialIconsIcon>
                      </View>
                      <View
                        style={[
                          styles.fE8_DC,
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
        </View>
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
    left: 70,
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
  // circle middle condition
  fE1_C: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },

  // color of equipment
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

  // inspected or not
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
