import React, { Component, useState, useEffect } from "react";
import {
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
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
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
  addDoc,
} from "firebase/firestore";
import { firebase } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FE_CICS_1st from "./FE_Mapping/FE_CICS_1st";

function MappingFe({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [MselectedBuilding, MsetSelectedBuilding] = useState(null);
  const [MselectedFloor, MsetSelectedFloor] = useState(null);
  const [selectedSafetyEquipment, setSelectedSafetyEquipment] = useState(null);

  const [buildingOptions, setBuildingOptions] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);
  const [safetyEquipmentOptions, setSafetyEquipmentOptions] = useState([]);
  const [selectedFireExtinguisherId, setSelectedFireExtinguisherId] = useState(
    []
  );
  const [selectedIcon, setSelectedIcon] = useState([]);
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
      if (!MselectedBuilding) {
        return; // No need to fetch if building is not selected yet
      }

      const Floors = [];
      const q = query(
        collection(firebase, "ListFireExtinguisher"),
        where("building", "==", MselectedBuilding)
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
  }, [MselectedBuilding]);

  const hideModal = () => {
    setIsModalVisible(false);
    setButtonOpacity(1); // Restore opacity when modal is hidden
    setSelectedFireExtinguisherId("");
  };

  const showModal = (fireExtinguisherId) => {
    console.log(
      `Showing modal for Fire Extinguisher ID: ${fireExtinguisherId}`
    );
    setSelectedFireExtinguisherId(fireExtinguisherId);
    setIsModalVisible(true);
    setButtonOpacity(0.5);
  };

  // all firestore
  useEffect(() => {
    const IconData = [];
    if (selectedFireExtinguisherId) {
      const fireExtinguisherCollection = collection(
        firebase,
        `FE${selectedFireExtinguisherId}`
      );

      const fetchFireExtinguisherData = async () => {
        try {
          const q = query(
            fireExtinguisherCollection,

            orderBy("date", "desc"),
            orderBy("time", "desc"),
            limit(1)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            IconData.push(data);
            // Use the data as needed
            console.log("Fetched Fire Extinguisher data:", data);
          });
          console.log(IconData);
          setSelectedIcon(IconData);
        } catch (error) {
          console.error("Error fetching Fire Extinguisher:", error);
        }
      };
      fetchFireExtinguisherData();
    }
  }, [selectedFireExtinguisherId]);
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/mapping.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
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
            value={MselectedBuilding}
            onChange={(item) => {
              MsetSelectedBuilding(item.value);
              MsetSelectedFloor(null);
            }}
          />
        </View>
        <View style={styles.container1}>
          <Text style={styles.font}>Floors</Text>
          <Dropdown
            style={[styles.dropdown, { backgroundColor: "white" }]}
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
            value={MselectedFloor}
            onChange={(item) => {
              MsetSelectedFloor(item.value);
            }}
          />
        </View>
      </View>

      <View style={styles.group1}>
        {MselectedFloor === "1st Floor" && (
          //Mapping Content//

          <FE_CICS_1st
            isModalVisible={isModalVisible}
            hideModal={hideModal}
            selectedIcon={selectedIcon}
            showModal={showModal}
            MselectedBuilding={MselectedBuilding}
            MselectedFloor={MselectedFloor}
            navigation={navigation}
          />
        )}
      </View>
    </View>
  );
}
export default MappingFe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  group: {
    width: 1280,
    height: 122,
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
    alignSelf: "center",
  },
  image: {
    width: 1280,
    height: 122,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  group1: {
    width: 1112,
    height: 466,

    marginLeft: 84,
  },
});
