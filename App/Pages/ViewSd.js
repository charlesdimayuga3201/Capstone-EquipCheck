import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

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
function ViewSd(props) {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
            VIEW EQUIPMENT INFORMATION
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
            <Text style={styles.datafont}>Power Source</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Smoke Sensor</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Sound</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Capacity</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.datafont}>Inspected By</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: "100%",
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

export default ViewSd;
