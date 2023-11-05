import React, { Component, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
  where,
} from "firebase/firestore";
import { firebase } from "../../firebaseConfig";
import FeFetch from "./FeFetch";
import Icon from "react-native-vector-icons/Ionicons";

function HistoryFe(props) {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedSafetyEquipment, setSelectedSafetyEquipment] = useState(null);

  const [buildingOptions, setBuildingOptions] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);
  const [safetyEquipmentOptions, setSafetyEquipmentOptions] = useState([]);

  useEffect(() => {
    // Fetch building options from Firebase
    const fetchBuildingOptions = async () => {
      const Buildings = [];
      const q = collection(firebase, "ListFireExtinguisher");
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (
          data.building &&
          !Buildings.some((item) => item.value === data.building)
        ) {
          Buildings.push({ label: data.building, value: data.building });
        }
      });

      setBuildingOptions(Buildings);
    };

    fetchBuildingOptions();
  }, []);

  useEffect(() => {
    // Fetch floor options from Firebase based on the selected building
    const fetchFloorOptions = async () => {
      if (!selectedBuilding) {
        return; // No need to fetch if building is not selected yet
      }

      const Floors = [];
      const q = query(
        collection(firebase, "ListFireExtinguisher"),
        orderBy("floor", "asc"),
        where("building", "==", selectedBuilding)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.floor && !Floors.some((item) => item.value === data.floor)) {
          Floors.push({ label: data.floor, value: data.floor });
        }
      });

      setFloorOptions(Floors);
    };

    fetchFloorOptions();
  }, [selectedBuilding]);

  useEffect(() => {
    // Fetch safety equipment options from Firebase based on the selected building and floor
    const fetchSafetyEquipmentOptions = async () => {
      if (!selectedBuilding || !selectedFloor) {
        return; // No need to fetch if building or floor is not selected yet
      }

      const IDOptions = [];
      const q = query(
        collection(firebase, "ListFireExtinguisher"),
        orderBy("number", "asc"),
        where("building", "==", selectedBuilding),
        where("floor", "==", selectedFloor)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.id && !IDOptions.some((item) => item.value === data.id)) {
          IDOptions.push({ label: data.id, value: data.id });
        }
      });

      setSafetyEquipmentOptions(IDOptions);
    };

    fetchSafetyEquipmentOptions();
  }, [selectedBuilding, selectedFloor]);

  const safetyEquipmentCollections = {
    FE1: collection(firebase, "E1"),
    FE2: collection(firebase, "E2"),
    FE3: collection(firebase, "E3"),
    // Add more options as needed
  };

  const [safetyEquipmentData, setSafetyEquipmentData] = useState([]);
  useEffect(() => {
    const fetchSafetyEquipmentData = async () => {
      if (!selectedSafetyEquipment) {
        return; // No need to fetch if safety equipment is not selected yet
      }

      const equipmentData = [];
      // const selectedCollection =
      //   safetyEquipmentCollections[selectedSafetyEquipment];
      const selectedCollection = collection(firebase, selectedSafetyEquipment);
      if (!selectedCollection) {
        console.error(`Collection not found for ${selectedSafetyEquipment}`);
        return;
      }

      const q = query(
        selectedCollection,
        where("id", "==", selectedSafetyEquipment),
        orderBy("date", "desc"),
        orderBy("time", "desc")
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        equipmentData.push(data);
      });

      setSafetyEquipmentData(equipmentData);
      console.log(equipmentData);
    };

    fetchSafetyEquipmentData();
  }, [selectedSafetyEquipment]);

  const refreshData = async () => {
    const Buildings = [];
    const q = collection(firebase, "ListFireExtinguisher");
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (
        data.building &&
        !Buildings.some((item) => item.value === data.building)
      ) {
        Buildings.push({ label: data.building, value: data.building });
      }
    });

    setBuildingOptions(Buildings);

    const Floors = [];
    const q1 = query(
      collection(firebase, "ListFireExtinguisher"),
      orderBy("floor", "asc"),
      where("building", "==", selectedBuilding)
    );
    const querySnapshot1 = await getDocs(q1);

    querySnapshot1.forEach((doc) => {
      const data = doc.data();
      if (data.floor && !Floors.some((item) => item.value === data.floor)) {
        Floors.push({ label: data.floor, value: data.floor });
      }
    });

    setFloorOptions(Floors);

    const IDOptions = [];
    const q2 = query(
      collection(firebase, "ListFireExtinguisher"),
      orderBy("number", "asc"),
      where("building", "==", selectedBuilding),
      where("floor", "==", selectedFloor)
    );
    const querySnapshot2 = await getDocs(q2);

    querySnapshot2.forEach((doc) => {
      const data = doc.data();
      if (data.id && !IDOptions.some((item) => item.value === data.id)) {
        IDOptions.push({ label: data.id, value: data.id });
      }
    });

    setSafetyEquipmentOptions(IDOptions);

    if (!selectedSafetyEquipment) {
      return; // No need to fetch if safety equipment is not selected yet
    }

    const equipmentData = [];
    // const selectedCollection =
    //   safetyEquipmentCollections[selectedSafetyEquipment];
    const selectedCollection = collection(firebase, selectedSafetyEquipment);
    if (!selectedCollection) {
      console.error(`Collection not found for ${selectedSafetyEquipment}`);
      return;
    }

    const q3 = query(
      selectedCollection,
      where("id", "==", selectedSafetyEquipment),
      orderBy("date", "desc"),
      orderBy("time", "desc")
    );

    const querySnapshot3 = await getDocs(q3);

    querySnapshot3.forEach((doc) => {
      const data = doc.data();
      equipmentData.push(data);
    });

    setSafetyEquipmentData(equipmentData);
    console.log(equipmentData);
  };

  const scrollViewRef = useRef(null);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.measure((x, y, width, height) => {
        setScrollViewHeight(height);
      });
    }
  }, [selectedSafetyEquipment, safetyEquipmentData]);
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/felogo1.png")}
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
            HISTORY EQUIPMENT INFORMATION
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
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

        {/* <View style={styles.line} /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.container1}>
            <Text style={styles.font}>Buildings</Text>
            <Dropdown
              style={[styles.dropdown, { backgroundColor: "white" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={buildingOptions}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={selectedBuilding}
              onChange={(item) => {
                setSelectedBuilding(item.value);
                setSelectedFloor(null);
                setSelectedSafetyEquipment(null);
              }}
            />
          </View>
          <View style={styles.container1}>
            <Text style={styles.font}>Floors</Text>
            <Dropdown
              style={[styles.dropdown, { backgroundColor: " " }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={floorOptions}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={selectedFloor}
              onChange={(item) => {
                setSelectedFloor(item.value);
                setSelectedSafetyEquipment(null);
              }}
            />
          </View>
          <View style={styles.container1}>
            <Text style={styles.font}>Safety Equipment</Text>
            <Dropdown
              style={[styles.dropdown, { backgroundColor: "white" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={safetyEquipmentOptions}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={selectedSafetyEquipment}
              onChange={(item) => {
                setSelectedSafetyEquipment(item.value);
              }}
            />
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.remarks}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "poppins-regular",
                marginBottom: 5,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Remarks
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.column}>
            <Text style={styles.datafont}>Date</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Time</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Nozzle</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Gauge</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Pin/Lock</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Body</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Inspected By</Text>
          </View>
        </View>

        {/* Third container */}
        <ScrollView
          ref={scrollViewRef}
          style={{ height: scrollViewHeight }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.container3}>
            {selectedSafetyEquipment ? (
              <>
                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafont1}>
                      {item.date}
                    </Text>
                  ))}
                </View>

                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafont1}>
                      {item.time}
                    </Text>
                  ))}
                </View>
                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafontc}>
                      {item.nozzle === "check" ? (
                        // Use Ionicons for the check icon
                        <Icon name="checkmark-circle" size={24} color="green" />
                      ) : (
                        // Use Ionicons for the close icon
                        <Icon name="close-circle" size={24} color="red" />
                      )}
                    </Text>
                  ))}
                </View>
                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafontc}>
                      {item.gauge === "check" ? (
                        // Use Ionicons for the check icon
                        <Icon name="checkmark-circle" size={24} color="green" />
                      ) : (
                        // Use Ionicons for the close icon
                        <Icon name="close-circle" size={24} color="red" />
                      )}
                    </Text>
                  ))}
                </View>
                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafontc}>
                      {item.pinlock === "check" ? (
                        // Use Ionicons for the check icon
                        <Icon name="checkmark-circle" size={24} color="green" />
                      ) : (
                        // Use Ionicons for the close icon
                        <Icon name="close-circle" size={24} color="red" />
                      )}
                    </Text>
                  ))}
                </View>
                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafontc}>
                      {item.body === "check" ? (
                        // Use Ionicons for the check icon
                        <Icon name="checkmark-circle" size={24} color="green" />
                      ) : (
                        // Use Ionicons for the close icon
                        <Icon name="close-circle" size={24} color="red" />
                      )}
                    </Text>
                  ))}
                </View>
                <View style={styles.column1}>
                  {safetyEquipmentData.map((item, index) => (
                    <Text key={index} style={styles.datafont1}>
                      {item.inspected}
                    </Text>
                  ))}
                </View>
              </>
            ) : (
              <Text></Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    // flexGrow: 1,
    // paddingVertical: 10,
    // Additional styling for the content inside ScrollView
  },
  datafont1: {
    fontSize: 17,
    fontFamily: "poppins-regular",
    marginBottom: 20,
    fontWeight: "100",
    textAlign: "center",
  },
  datafontc: {
    marginTop: 3,
    marginBottom: 20,
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
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // height: 50, // Set the desired height of the row
    // paddingHorizontal: 10, // Adjust horizontal padding as needed
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
    height: "78%",
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

export default HistoryFe;
