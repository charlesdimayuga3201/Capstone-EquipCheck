import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";

const data1 = [
  { label: "CICS", value: "1" },
  { label: "CEAFA", value: "2" },
  { label: "GYM", value: "3" },
  { label: "CIT", value: "4" },
  { label: "SSC", value: "5" },
];

const data2 = [
  { label: "1st Floor", value: "1" },
  { label: "2nd Floor", value: "2" },
  { label: "3rd Floor", value: "3" },
  { label: "4th Floor", value: "4" },
  { label: "5Th Floor", value: "5" },
];

const data3 = [
  { label: "E1", value: "1" },
  { label: "E2", value: "2" },
  { label: "E3", value: "3" },
  { label: "E4", value: "4" },
  { label: "E5", value: "5" },
  { label: "E6", value: "6" },
  { label: "E7", value: "7" },
  { label: "E8", value: "8" },
];

function UpdateS(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

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
    switch5: true,
    switch6: true,
  });

  const handleSwitchChange = (switchName) => {
    setSwitchValues((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
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
              data={data1}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={value1}
              onChange={(item) => {
                setValue1(item.value);
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
              data={data2}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={value2}
              onChange={(item) => {
                setValue2(item.value);
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
              data={data3}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={value3}
              onChange={(item) => {
                setValue3(item.value);
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
            <Text style={styles.datafont}>Sprinkler Head</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Piping</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Valves</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Pressure Regulator</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Control Panel</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>BackFlow Preventer</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Inspected By</Text>
          </View>
        </View>

        {/* Third container  */}
        <View style={styles.container3}>
          <View style={styles.column1}>
            <Text style={styles.datafont1}>10/2/2023</Text>
          </View>

          <View style={styles.column1}>
            <Text style={styles.datafont1}>10:06 PM</Text>
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
            <Switch
              trackColor={{ false: "#FF6464", true: "#79AC78" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              value={switchValues.switch5}
              onValueChange={() => handleSwitchChange("switch5")}
              style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
          </View>

          <View style={styles.column1}>
            <Switch
              trackColor={{ false: "#FF6464", true: "#79AC78" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              value={switchValues.switch6}
              onValueChange={() => handleSwitchChange("switch6")}
              style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
          </View>

          <View style={styles.column1}>
            <Text style={styles.datafont1}>Kc Dimayuga</Text>
          </View>
        </View>
        <View
          style={{
            height: 200,

            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity style={styles.updatebtn} onPress={showModal}>
            <View style={styles.updatecont}>
              <Text style={styles.update}>Update</Text>
            </View>
          </TouchableOpacity>

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

export default UpdateS;
const styles = StyleSheet.create({
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
    elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  modalButtonN: {
    width: "35%",
    elevation: 4,
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
    fontSize: 17,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "700",
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
