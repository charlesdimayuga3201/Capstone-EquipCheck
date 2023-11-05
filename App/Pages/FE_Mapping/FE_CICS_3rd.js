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

export default function FE_CICS_3rd({
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

  const [FE17, setFE17] = useState([]);
  useEffect(() => {
    const Fe17Data = [];
    const FE17Collections = collection(firebase, "FE17");
    const fetchFe17Data = async () => {
      try {
        const q17 = query(
          FE17Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot17 = await getDocs(q17);
        querySnapshot17.forEach((doc) => {
          const data17 = doc.data();
          Fe17Data.push(data17);
          // Use the data as needed
          console.log("Fetched FE17 data:", data17);
        });
        console.log(Fe17Data);
        setFE17(Fe17Data);
      } catch (error) {
        console.error("Error fetching FE17:", error);
      }
    };
    fetchFe17Data();
  }, []);

  const [FE18, setFE18] = useState([]);
  useEffect(() => {
    const Fe18Data = [];
    const FE18Collections = collection(firebase, "FE18");
    const fetchFe18Data = async () => {
      try {
        const q18 = query(
          FE18Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot18 = await getDocs(q18);
        querySnapshot18.forEach((doc) => {
          const data18 = doc.data();
          Fe18Data.push(data18);
          // Use the data as needed
          console.log("Fetched FE18 data:", data18);
        });
        console.log(Fe18Data);
        setFE18(Fe18Data);
      } catch (error) {
        console.error("Error fetching FE18:", error);
      }
    };
    fetchFe18Data();
  }, []);

  const [FE19, setFE19] = useState([]);
  useEffect(() => {
    const Fe19Data = [];
    const FE19Collections = collection(firebase, "FE19");
    const fetchFe19Data = async () => {
      try {
        const q19 = query(
          FE19Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot19 = await getDocs(q19);
        querySnapshot19.forEach((doc) => {
          const data19 = doc.data();
          Fe19Data.push(data19);
          // Use the data as needed
          console.log("Fetched FE19 data:", data19);
        });
        console.log(Fe19Data);
        setFE19(Fe19Data);
      } catch (error) {
        console.error("Error fetching FE19:", error);
      }
    };
    fetchFe19Data();
  }, []);

  const [FE20, setFE20] = useState([]);
  useEffect(() => {
    const Fe20Data = [];
    const FE20Collections = collection(firebase, "FE20");
    const fetchFe20Data = async () => {
      try {
        const q20 = query(
          FE20Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot20 = await getDocs(q20);
        querySnapshot20.forEach((doc) => {
          const data20 = doc.data();
          Fe20Data.push(data20);
          // Use the data as needed
          console.log("Fetched FE20 data:", data20);
        });
        console.log(Fe20Data);
        setFE20(Fe20Data);
      } catch (error) {
        console.error("Error fetching FE20:", error);
      }
    };
    fetchFe20Data();
  }, []);

  const [FE21, setFE21] = useState([]);
  useEffect(() => {
    const Fe21Data = [];
    const FE21Collections = collection(firebase, "FE21");
    const fetchFe21Data = async () => {
      try {
        const q21 = query(
          FE21Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot21 = await getDocs(q21);
        querySnapshot21.forEach((doc) => {
          const data21 = doc.data();
          Fe21Data.push(data21);
          // Use the data as needed
          console.log("Fetched FE21 data:", data21);
        });
        console.log(Fe21Data);
        setFE21(Fe21Data);
      } catch (error) {
        console.error("Error fetching FE21:", error);
      }
    };
    fetchFe21Data();
  }, []);

  const [FE22, setFE22] = useState([]);
  useEffect(() => {
    const Fe22Data = [];
    const FE22Collections = collection(firebase, "FE22");
    const fetchFe22Data = async () => {
      try {
        const q22 = query(
          FE22Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot22 = await getDocs(q22);
        querySnapshot22.forEach((doc) => {
          const data22 = doc.data();
          Fe22Data.push(data22);
          // Use the data as needed
          console.log("Fetched FE22 data:", data22);
        });
        console.log(Fe22Data);
        setFE22(Fe22Data);
      } catch (error) {
        console.error("Error fetching FE22:", error);
      }
    };
    fetchFe22Data();
  }, []);

  const [FE23, setFE23] = useState([]);
  useEffect(() => {
    const Fe23Data = [];
    const FE23Collections = collection(firebase, "FE23");
    const fetchFe23Data = async () => {
      try {
        const q23 = query(
          FE23Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot23 = await getDocs(q23);
        querySnapshot23.forEach((doc) => {
          const data23 = doc.data();
          Fe23Data.push(data23);
          // Use the data as needed
          console.log("Fetched FE23 data:", data23);
        });
        console.log(Fe23Data);
        setFE23(Fe23Data);
      } catch (error) {
        console.error("Error fetching FE23:", error);
      }
    };
    fetchFe23Data();
  }, []);

  const [FE24, setFE24] = useState([]);
  useEffect(() => {
    const Fe24Data = [];
    const FE24Collections = collection(firebase, "FE24");
    const fetchFe24Data = async () => {
      try {
        const q24 = query(
          FE24Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot24 = await getDocs(q24);
        querySnapshot24.forEach((doc) => {
          const data24 = doc.data();
          Fe24Data.push(data24);
          // Use the data as needed
          console.log("Fetched FE24 data:", data24);
        });
        console.log(Fe24Data);
        setFE24(Fe24Data);
      } catch (error) {
        console.error("Error fetching FE24:", error);
      }
    };
    fetchFe24Data();
  }, []);

  const [FE25, setFE25] = useState([]);
  useEffect(() => {
    const Fe25Data = [];
    const FE25Collections = collection(firebase, "FE25");
    const fetchFe25Data = async () => {
      try {
        const q25 = query(
          FE25Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot25 = await getDocs(q25);
        querySnapshot25.forEach((doc) => {
          const data25 = doc.data();
          Fe25Data.push(data25);
          // Use the data as needed
          console.log("Fetched FE25 data:", data25);
        });
        console.log(Fe25Data);
        setFE25(Fe25Data);
      } catch (error) {
        console.error("Error fetching FE25:", error);
      }
    };
    fetchFe25Data();
  }, []);

  const [FE26, setFE26] = useState([]);
  useEffect(() => {
    const Fe26Data = [];
    const FE26Collections = collection(firebase, "FE26");
    const fetchFe26Data = async () => {
      try {
        const q26 = query(
          FE26Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot26 = await getDocs(q26);
        querySnapshot26.forEach((doc) => {
          const data26 = doc.data();
          Fe26Data.push(data26);
          // Use the data as needed
          console.log("Fetched FE26 data:", data26);
        });
        console.log(Fe26Data);
        setFE26(Fe26Data);
      } catch (error) {
        console.error("Error fetching FE26:", error);
      }
    };
    fetchFe26Data();
  }, []);

  const [FE27, setFE27] = useState([]);
  useEffect(() => {
    const Fe27Data = [];
    const FE27Collections = collection(firebase, "FE27");
    const fetchFe27Data = async () => {
      try {
        const q27 = query(
          FE27Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot27 = await getDocs(q27);
        querySnapshot27.forEach((doc) => {
          const data27 = doc.data();
          Fe27Data.push(data27);
          // Use the data as needed
          console.log("Fetched FE27 data:", data27);
        });
        console.log(Fe27Data);
        setFE27(Fe27Data);
      } catch (error) {
        console.error("Error fetching FE27:", error);
      }
    };
    fetchFe27Data();
  }, []);

  const [FE28, setFE28] = useState([]);
  useEffect(() => {
    const Fe28Data = [];
    const FE28Collections = collection(firebase, "FE28");
    const fetchFe28Data = async () => {
      try {
        const q28 = query(
          FE28Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot28 = await getDocs(q28);
        querySnapshot28.forEach((doc) => {
          const data28 = doc.data();
          Fe28Data.push(data28);
          // Use the data as needed
          console.log("Fetched FE28 data:", data28);
        });
        console.log(Fe28Data);
        setFE28(Fe28Data);
      } catch (error) {
        console.error("Error fetching FE28:", error);
      }
    };
    fetchFe28Data();
  }, []);

  const [FE29, setFE29] = useState([]);
  useEffect(() => {
    const Fe29Data = [];
    const FE29Collections = collection(firebase, "FE29");
    const fetchFe29Data = async () => {
      try {
        const q29 = query(
          FE29Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot29 = await getDocs(q29);
        querySnapshot29.forEach((doc) => {
          const data29 = doc.data();
          Fe29Data.push(data29);
          // Use the data as needed
          console.log("Fetched FE29 data:", data29);
        });
        console.log(Fe29Data);
        setFE29(Fe29Data);
      } catch (error) {
        console.error("Error fetching FE29:", error);
      }
    };
    fetchFe29Data();
  }, []);

  //   refresh datas
  const refreshData = async () => {
    const Fe17Data = [];
    const FE17Collections = collection(firebase, "FE17");
    const fetchFe17Data = async () => {
      try {
        const q17 = query(
          FE17Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot17 = await getDocs(q17);
        querySnapshot17.forEach((doc) => {
          const data17 = doc.data();
          Fe17Data.push(data17);
          // Use the data as needed
          console.log("Fetched FE17 data:", data17);
        });
        console.log(Fe17Data);
        setFE17(Fe17Data);
      } catch (error) {
        console.error("Error fetching FE17:", error);
      }
    };
    fetchFe17Data();

    const Fe18Data = [];
    const FE18Collections = collection(firebase, "FE18");
    const fetchFe18Data = async () => {
      try {
        const q18 = query(
          FE18Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot18 = await getDocs(q18);
        querySnapshot18.forEach((doc) => {
          const data18 = doc.data();
          Fe18Data.push(data18);
          // Use the data as needed
          console.log("Fetched FE18 data:", data18);
        });
        console.log(Fe18Data);
        setFE18(Fe18Data);
      } catch (error) {
        console.error("Error fetching FE18:", error);
      }
    };
    fetchFe18Data();

    const Fe19Data = [];
    const FE19Collections = collection(firebase, "FE19");
    const fetchFe19Data = async () => {
      try {
        const q19 = query(
          FE19Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot19 = await getDocs(q19);
        querySnapshot19.forEach((doc) => {
          const data19 = doc.data();
          Fe19Data.push(data19);
          // Use the data as needed
          console.log("Fetched FE19 data:", data19);
        });
        console.log(Fe19Data);
        setFE19(Fe19Data);
      } catch (error) {
        console.error("Error fetching FE19:", error);
      }
    };
    fetchFe19Data();

    const Fe20Data = [];
    const FE20Collections = collection(firebase, "FE20");
    const fetchFe20Data = async () => {
      try {
        const q20 = query(
          FE20Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot20 = await getDocs(q20);
        querySnapshot20.forEach((doc) => {
          const data20 = doc.data();
          Fe20Data.push(data20);
          // Use the data as needed
          console.log("Fetched FE20 data:", data20);
        });
        console.log(Fe20Data);
        setFE20(Fe20Data);
      } catch (error) {
        console.error("Error fetching FE20:", error);
      }
    };
    fetchFe20Data();

    const Fe21Data = [];
    const FE21Collections = collection(firebase, "FE21");
    const fetchFe21Data = async () => {
      try {
        const q21 = query(
          FE21Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot21 = await getDocs(q21);
        querySnapshot21.forEach((doc) => {
          const data21 = doc.data();
          Fe21Data.push(data21);
          // Use the data as needed
          console.log("Fetched FE21 data:", data21);
        });
        console.log(Fe21Data);
        setFE21(Fe21Data);
      } catch (error) {
        console.error("Error fetching FE21:", error);
      }
    };
    fetchFe21Data();

    const Fe22Data = [];
    const FE22Collections = collection(firebase, "FE22");
    const fetchFe22Data = async () => {
      try {
        const q22 = query(
          FE22Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot22 = await getDocs(q22);
        querySnapshot22.forEach((doc) => {
          const data22 = doc.data();
          Fe22Data.push(data22);
          // Use the data as needed
          console.log("Fetched FE22 data:", data22);
        });
        console.log(Fe22Data);
        setFE22(Fe22Data);
      } catch (error) {
        console.error("Error fetching FE22:", error);
      }
    };
    fetchFe22Data();

    const Fe23Data = [];
    const FE23Collections = collection(firebase, "FE23");
    const fetchFe23Data = async () => {
      try {
        const q23 = query(
          FE23Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot23 = await getDocs(q23);
        querySnapshot23.forEach((doc) => {
          const data23 = doc.data();
          Fe23Data.push(data23);
          // Use the data as needed
          console.log("Fetched FE23 data:", data23);
        });
        console.log(Fe23Data);
        setFE23(Fe23Data);
      } catch (error) {
        console.error("Error fetching FE23:", error);
      }
    };
    fetchFe23Data();

    const Fe24Data = [];
    const FE24Collections = collection(firebase, "FE24");
    const fetchFe24Data = async () => {
      try {
        const q24 = query(
          FE24Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot24 = await getDocs(q24);
        querySnapshot24.forEach((doc) => {
          const data24 = doc.data();
          Fe24Data.push(data24);
          // Use the data as needed
          console.log("Fetched FE24 data:", data24);
        });
        console.log(Fe24Data);
        setFE24(Fe24Data);
      } catch (error) {
        console.error("Error fetching FE24:", error);
      }
    };
    fetchFe24Data();

    const Fe25Data = [];
    const FE25Collections = collection(firebase, "FE25");
    const fetchFe25Data = async () => {
      try {
        const q25 = query(
          FE25Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot25 = await getDocs(q25);
        querySnapshot25.forEach((doc) => {
          const data25 = doc.data();
          Fe25Data.push(data25);
          // Use the data as needed
          console.log("Fetched FE25 data:", data25);
        });
        console.log(Fe25Data);
        setFE25(Fe25Data);
      } catch (error) {
        console.error("Error fetching FE25:", error);
      }
    };
    fetchFe25Data();

    const Fe26Data = [];
    const FE26Collections = collection(firebase, "FE26");
    const fetchFe26Data = async () => {
      try {
        const q26 = query(
          FE26Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot26 = await getDocs(q26);
        querySnapshot26.forEach((doc) => {
          const data26 = doc.data();
          Fe26Data.push(data26);
          // Use the data as needed
          console.log("Fetched FE26 data:", data26);
        });
        console.log(Fe26Data);
        setFE26(Fe26Data);
      } catch (error) {
        console.error("Error fetching FE26:", error);
      }
    };
    fetchFe26Data();

    const Fe27Data = [];
    const FE27Collections = collection(firebase, "FE27");
    const fetchFe27Data = async () => {
      try {
        const q27 = query(
          FE27Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot27 = await getDocs(q27);
        querySnapshot27.forEach((doc) => {
          const data27 = doc.data();
          Fe27Data.push(data27);
          // Use the data as needed
          console.log("Fetched FE27 data:", data27);
        });
        console.log(Fe27Data);
        setFE27(Fe27Data);
      } catch (error) {
        console.error("Error fetching FE27:", error);
      }
    };
    fetchFe27Data();

    const Fe28Data = [];
    const FE28Collections = collection(firebase, "FE28");
    const fetchFe28Data = async () => {
      try {
        const q28 = query(
          FE28Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot28 = await getDocs(q28);
        querySnapshot28.forEach((doc) => {
          const data28 = doc.data();
          Fe28Data.push(data28);
          // Use the data as needed
          console.log("Fetched FE28 data:", data28);
        });
        console.log(Fe28Data);
        setFE28(Fe28Data);
      } catch (error) {
        console.error("Error fetching FE28:", error);
      }
    };
    fetchFe28Data();

    const Fe29Data = [];
    const FE29Collections = collection(firebase, "FE29");
    const fetchFe29Data = async () => {
      try {
        const q29 = query(
          FE29Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot29 = await getDocs(q29);
        querySnapshot29.forEach((doc) => {
          const data29 = doc.data();
          Fe29Data.push(data29);
          // Use the data as needed
          console.log("Fetched FE29 data:", data29);
        });
        console.log(Fe29Data);
        setFE29(Fe29Data);
      } catch (error) {
        console.error("Error fetching FE29:", error);
      }
    };
    fetchFe29Data();
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
          source={require("../../assets/images/CICS_3rd.png")}
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

          <View style={styles.fE1StackRow}>
            <View style={styles.fE1Stack}>
              {FE17.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE1}
                  onPress={() => showModal("17")}
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
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}

              {FE18.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE2}
                  onPress={() => showModal("18")}
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

            <View style={styles.fE3Stack}>
              {FE19.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE3}
                  onPress={() => showModal("19")}
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
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}

              {FE20.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE4}
                  onPress={() => showModal("20")}
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

            <View style={styles.fE5Stack}>
              {FE21.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE5}
                  onPress={() => showModal("21")}
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
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}

              {FE22.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE10}
                  onPress={() => showModal("22")}
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

            <View style={styles.fE11Stack}>
              {FE23.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE11}
                  onPress={() => showModal("23")}
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
                            item.date === formattedToday
                              ? "#7FCD91"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}

              {FE24.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE12}
                  onPress={() => showModal("24")}
                >
                  <View style={styles.fE12circleStackStack}>
                    <View style={styles.fE12circleStack}>
                      <View
                        style={[
                          styles.fE12circle,
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
                        style={styles.fE12icon}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE12downcircle,
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

            {FE25.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("25")}
              >
                <View style={styles.fE13circleStackStack}>
                  <View style={styles.fE13circleStack}>
                    <View
                      style={[
                        styles.fE13circle,
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
                      style={styles.fE13icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE13downcircle,
                      {
                        backgroundColor:
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.fE14Stack}>
              {FE26.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE14}
                  onPress={() => showModal("26")}
                >
                  <View style={styles.fE14circleStackStack}>
                    <View style={styles.fE14circleStack}>
                      <View
                        style={[
                          styles.fE14circle,
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
                        style={styles.fE14icon}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE14downcircle,
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

              {FE27.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE15}
                  onPress={() => showModal("27")}
                >
                  <View style={styles.fE15circleStackStack}>
                    <View style={styles.fE15circleStack}>
                      <View
                        style={[
                          styles.fE15circle,
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
                        style={styles.fE15icon}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE15downcircle,
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
            <View style={styles.fE16Stack}>
              {FE28.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE16}
                  onPress={() => showModal("28")}
                >
                  <View style={styles.fE16circleStackStack}>
                    <View style={styles.fE16circleStack}>
                      <View
                        style={[
                          styles.fE16circle,
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
                        style={styles.fE16icon}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE16downcircle,
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

              {FE29.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE17}
                  onPress={() => showModal("29")}
                >
                  <View style={styles.fE17circleStackStack}>
                    <View style={styles.fE17circleStack}>
                      <View
                        style={[
                          styles.fE17circle,
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
                        style={styles.fE17icon}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.fE17downcircle,
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
    // backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
  },
  image: {
    width: 1209,
    height: 702,
    // flexDirection: "row",
    bottom: "10%",
    marginLeft: 37,
  },
  image_imageStyle: {},
  fE1: {
    top: 29,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
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
    top: 0,
    left: 16,
    width: 30,
    height: 31,
    position: "absolute",
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
    color: "rgba(35,151,69,1)",
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
  fE1Stack: {
    width: 46,
    height: 60,
    marginTop: 1,
  },
  fE3: {
    top: 29,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
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
    top: 0,
    left: 14,
    width: 30,
    height: 31,
    position: "absolute",
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
    color: "rgba(35,151,69,1)",
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
  fE3Stack: {
    width: 44,
    height: 60,
    marginLeft: 120,
    marginTop: 2,
  },
  fE5: {
    top: 30,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
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
    top: 0,
    left: 12,
    width: 30,
    height: 31,
    position: "absolute",
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
    color: "rgba(35,151,69,1)",
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
  fE5Stack: {
    width: 42,
    height: 61,
    marginLeft: 125,
    marginTop: 1,
  },
  fE11: {
    top: 25,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
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
  fE12: {
    top: 0,
    left: 15,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE12circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE12icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE12circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE12downcircle: {
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
  fE12circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE11Stack: {
    width: 45,
    height: 56,
    marginLeft: 123,
    marginTop: 4,
  },
  fE13: {
    width: 30,
    height: 31,
    marginLeft: 40,
    marginTop: 30,
  },
  fE13circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE13icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE13circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE13downcircle: {
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
  fE13circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE14: {
    top: 28,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE14circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE14icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE14circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE14downcircle: {
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
  fE14circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE15: {
    top: 0,
    left: 13,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE15circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE15icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE15circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE15downcircle: {
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
  fE15circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE14Stack: {
    width: 43,
    height: 59,
    marginLeft: 54,
    marginTop: 1,
  },
  fE16: {
    top: 29,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE16circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE16icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE16circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE16downcircle: {
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
  fE16circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE17: {
    top: 0,
    left: 12,
    width: 30,
    height: 31,
    position: "absolute",
  },
  fE17circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE17icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE17circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE17downcircle: {
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
  fE17circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE16Stack: {
    width: 42,
    height: 60,
    marginLeft: 123,
  },
  fE1StackRow: {
    height: 62,
    flexDirection: "row",
    flex: 1,
    marginRight: 246,
    marginLeft: 86,
    marginTop: 342,
  },
});
