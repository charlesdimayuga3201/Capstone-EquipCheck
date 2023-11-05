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
  Alert,
} from "react-native";
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
} from "firebase/firestore";
import { firebase } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/Ionicons";

function UpdateFe(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [inspected, setInspected] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedSafetyEquipment, setSelectedSafetyEquipment] = useState(null);

  const [buildingOptions, setBuildingOptions] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);
  const [safetyEquipmentOptions, setSafetyEquipmentOptions] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);

  const [radioButtonColor, setRadioButtonColor] = useState({
    good: "green",
    slightlyDamage: "yellow",
    notWorking: "red",
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const date = `${
        now.getMonth() + 1
      }/${now.getDate()}/${now.getFullYear()}`;
      // const time = `${now.getHours()}:${String(now.getMinutes()).padStart()} `;
      const time = `${now.getHours()}:${String(now.getMinutes()).padStart(
        2,
        "0"
      )} `;
      // ${now.getHours() >= 12 ? "PM" : "AM"}
      setCurrentDate(date);
      setCurrentTime(time);
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup when component unmounts
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
    setButtonOpacity(0.5); // Change opacity when modal is shown
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setButtonOpacity(1); // Restore opacity when modal is hidden
  };

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isEnabled] = useState(false);
  const [switchValues, setSwitchValues] = useState({
    switch1: true,
    switch2: true,
    switch3: true,
    switch4: true,
  });

  const handleSwitchChange = (switchName) => {
    setSwitchValues((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };

  const safetyEquipmentCollections = {
    FE1: collection(firebase, "E1"),
    FE2: collection(firebase, "E2"),
    FE3: collection(firebase, "E3"),
    // Add more options as needed
  };

  const handleUpdate = async () => {
    if (!selectedSafetyEquipment) {
      // Handle the case where safety equipment is not selected
      return;
    }

    try {
      // const selectedCollection =
      //   safetyEquipmentCollections[selectedSafetyEquipment];
      const selectedCollection = collection(firebase, selectedSafetyEquipment);
      if (!selectedCollection) {
        console.error(`Collection not found for ${selectedSafetyEquipment}`);
        return;
      }

      const docData = {
        building: selectedBuilding,
        floor: selectedFloor,
        id: selectedSafetyEquipment,
        date: currentDate,
        time: currentTime,
        nozzle: switchValues.switch1 ? "check" : "notworking",
        gauge: switchValues.switch2 ? "check" : "notworking",
        pinlock: switchValues.switch3 ? "check" : "notworking",
        body: switchValues.switch4 ? "check" : "notworking",
        condition: selectedOption,
        // Repeat the same for other switches
        inspected: inspected, // You can replace this with the actual user data
      };

      const docRef = await addDoc(selectedCollection, docData);
      console.log("Document added with ID: ", docRef.id);
      Alert.alert("Success", "Update Successfully");

      // Optionally, you can reset the form fields or take any other actions here
    } catch (error) {
      console.error("Error adding document: ", error);
      // Handle the error appropriately
    }
  };

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
            UPDATE EQUIPMENT INFORMATION
          </Text>
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
                fontWeight: "900",
                textAlign: "center",
              }}
            >
              Remarks
            </Text>
          </View>
        </View>

        {/* Second Container */}
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

        {/* Third container  */}
        <View style={styles.container3}>
          {selectedSafetyEquipment ? (
            <>
              <View style={styles.column1}>
                <Text style={styles.datafont1}>{currentDate}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{currentTime}</Text>
              </View>

              <View style={styles.column1}>
                <Switch
                  trackColor={{ false: "#FF6464", true: "#79AC78" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={switchValues.switch1}
                  onValueChange={() => handleSwitchChange("switch1")}
                  style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
              </View>

              <View style={styles.column1}>
                <Switch
                  trackColor={{ false: "#FF6464", true: "#79AC78" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={switchValues.switch2}
                  onValueChange={() => handleSwitchChange("switch2")}
                  style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
              </View>

              <View style={styles.column1}>
                <Switch
                  trackColor={{ false: "#FF6464", true: "#79AC78" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={switchValues.switch3}
                  onValueChange={() => handleSwitchChange("switch3")}
                  style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
              </View>

              <View style={styles.column1}>
                <Switch
                  trackColor={{ false: "#FF6464", true: "#79AC78" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={switchValues.switch4}
                  onValueChange={() => handleSwitchChange("switch4")}
                  style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
              </View>

              <View style={styles.column1}>
                <TextInput
                  placeholder="Enter "
                  style={styles.datafont1}
                  value={inspected}
                  onChangeText={(text) => setInspected(text)}
                ></TextInput>
                <View style={styles.lineI}></View>
              </View>
            </>
          ) : (
            <Text></Text>
          )}
        </View>
        <View
          style={{
            height: 200,

            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* for condition */}
          {selectedSafetyEquipment ? (
            <View style={styles.btncontainer}>
              <TouchableOpacity
                style={[
                  styles.radioButton,

                  selectedOption === "Good Condition" && styles.selectedG,
                ]}
                onPress={() => handleOptionSelect("Good Condition")}
              >
                <Text style={styles.textinput}>Good Condition</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOption === "Slightly Damage" && styles.selectedS,
                ]}
                onPress={() => handleOptionSelect("Slightly Damage")}
              >
                <Text style={styles.textinput}>Slightly Damage</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOption === "Not Working" && styles.selectedN,
                ]}
                onPress={() => handleOptionSelect("Not Working")}
              >
                <Text style={styles.textinput}>Not Working</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text></Text>
          )}
          {selectedSafetyEquipment ? (
            <TouchableOpacity
              style={styles.updatebtn}
              onPress={showModal}
              disabled={!selectedOption || !inspected}
            >
              <View style={styles.updatecont}>
                <Text style={styles.update}>Update</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <Text></Text>
          )}
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={hideModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {/* <View style={styles.lineG}></View> */}
                <View style={styles.checkicon}>
                  <Icon
                    name="ios-checkmark-circle-outline"
                    style={styles.icon7}
                  ></Icon>
                </View>
                <Text style={styles.modalText}>Confirm Update?</Text>
                <Text style={styles.modalText1}>
                  Do you really want to update this equipment? {"\n"}
                  This process cannot be undone.
                </Text>
                <View style={styles.line}></View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.modalButtonY}
                    onPress={() => {
                      handleUpdate();
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
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lineI: {
    height: 2,
    width: "100%",
    backgroundColor: "#B4B4B3",
  },
  textinput: {},
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: "5%",
  },
  radioButton: {
    marginHorizontal: "2%",
    borderWidth: 1,
    borderColor: "#B4B4B3",
    borderRadius: 10,
    padding: 10,
  },
  selectedG: {
    backgroundColor: "#7FCD91", // You can change the color to indicate selection
  },
  selectedS: {
    backgroundColor: "#FFA33C", // You can change the color to indicate selection
  },
  selectedN: {
    backgroundColor: "#FF6464", // You can change the color to indicate selection
  },
  checkicon: {
    width: 150,
    height: 150,
    marginVertical: 35,
  },
  icon7: {
    color: "rgba(128,214,126,1)",
    fontSize: 155,
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
    width: "40%", // Adjust the width as needed
    height: "60%", // Adjust the height as needed
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
    marginBottom: 10,
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
  updatebtn: {
    width: 117,
    height: 50,
  },
  updatecont: {
    width: 117,
    height: 50,
    backgroundColor: "#7FCD91",
    // elevation: 4,
    borderRadius: 100,
  },
  update: {
    fontWeight: "700",
    color: "rgba(255,254,254,1)",
    fontSize: 20,
    marginTop: 10,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#007AFF", // Background color of the button
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", // Adjust this value to change the distance from the bottom
    top: 500,
    right: 20, // Adjust this value to change the distance from the right
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 18,
  },
  switchbtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    elevation: 8,
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

    textAlign: "center",
  },
  header: {
    backgroundColor: "white",
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
  lineG: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 10,
    width: "100%",
    backgroundColor: "#7FCD91",
    // borderBottomWidth: 2,

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

export default UpdateFe;
