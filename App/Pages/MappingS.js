import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

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
function MappingS(props) {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
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
            style={[styles.dropdown, { backgroundColor: "white" }]}
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
      <View style={styles.group1}>
        <ImageBackground
          source={require("../assets/images/fptest.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.button12ColumnRow}>
            <View style={styles.button12Column}>
              <TouchableOpacity style={styles.button12}>
                <View style={styles.indicator1StackStack}>
                  <View style={styles.indicator1Stack}>
                    <View style={styles.indicator1}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.d_indicator1}></View>
                </View>
              </TouchableOpacity>
              <View style={styles.group8}>
                <View style={styles.rect12StackStack}>
                  <View style={styles.rect12Stack}>
                    <View style={styles.rect12}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon6}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect13}></View>
                </View>
              </View>
            </View>
            <View style={styles.buttonColumn}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.rect2StackStack}>
                  <View style={styles.rect2Stack}>
                    <View style={styles.rect2}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon1}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect3}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button11}>
                <View style={styles.rect14StackStack}>
                  <View style={styles.rect14Stack}>
                    <View style={styles.rect14}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon7}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect15}></View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button2Stack}>
              <TouchableOpacity style={styles.button2}>
                <View style={styles.rect4StackStack}>
                  <View style={styles.rect4Stack}>
                    <View style={styles.rect4}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon2}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect5}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button10}>
                <View style={styles.rect16StackStack}>
                  <View style={styles.rect16Stack}>
                    <View style={styles.rect16}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon8}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect17}></View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button3Stack}>
              <TouchableOpacity style={styles.button3}>
                <View style={styles.rect6StackStack}>
                  <View style={styles.rect6Stack}>
                    <View style={styles.rect6}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon3}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect7}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button9}>
                <View style={styles.rect18StackStack}>
                  <View style={styles.rect18Stack}>
                    <View style={styles.rect18}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon9}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect19}></View>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button8}>
              <View style={styles.rect20StackStack}>
                <View style={styles.rect20Stack}>
                  <View style={styles.rect20}></View>
                  <MaterialIconsIcon
                    name="location-on"
                    style={styles.icon10}
                  ></MaterialIconsIcon>
                </View>
                <View style={styles.rect21}></View>
              </View>
            </TouchableOpacity>
            <View style={styles.button4Stack}>
              <TouchableOpacity style={styles.button4}>
                <View style={styles.rect8StackStack}>
                  <View style={styles.rect8Stack}>
                    <View style={styles.rect8}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon4}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect9}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button7}>
                <View style={styles.rect22StackStack}>
                  <View style={styles.rect22Stack}>
                    <View style={styles.rect22}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon11}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect23}></View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button5Stack}>
              <TouchableOpacity style={styles.button5}>
                <View style={styles.rect10StackStack}>
                  <View style={styles.rect10Stack}>
                    <View style={styles.rect10}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon5}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect11}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button6}>
                <View style={styles.rect24StackStack}>
                  <View style={styles.rect24Stack}>
                    <View style={styles.rect24}></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.icon12}
                    ></MaterialIconsIcon>
                  </View>
                  <View style={styles.rect25}></View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

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
  image1: {
    width: 1112,
    height: 466,
  },
  image1_imageStyle: {},
  button12: {
    width: 30,
    height: 31,
    marginLeft: 15,
  },
  indicator1: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon: {
    top: 0,
    position: "absolute",
    color: "rgba(23,137,23,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  indicator1Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  d_indicator1: {
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
  indicator1StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  indicator1Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  d_indicator1: {
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
  indicator1StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  group8: {
    width: 30,
    height: 31,
    marginTop: 1,
  },
  rect12: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon6: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect12Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect13: {
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
  rect12StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button12Column: {
    width: 44,
  },
  button: {
    width: 30,
    height: 31,
    marginLeft: 14,
  },
  rect2: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon1: {
    top: 0,
    position: "absolute",
    color: "rgba(23,137,23,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect3: {
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
  rect2StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button11: {
    width: 30,
    height: 31,
  },
  rect14: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon7: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect14Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect15: {
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
  rect14StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  buttonColumn: {
    width: 44,
    marginLeft: 106,
    marginTop: 1,
  },
  button2: {
    top: 0,
    left: 16,
    width: 30,
    height: 31,
    position: "absolute",
  },
  rect4: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon2: {
    top: 0,
    position: "absolute",
    color: "rgba(23,137,23,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect4Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect5: {
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
  rect4StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button10: {
    top: 28,
    width: 30,
    height: 31,
    position: "absolute",
    left: 0,
  },
  rect16: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon8: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect16Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect17: {
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
  rect16StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button2Stack: {
    width: 46,
    height: 59,
    marginLeft: 106,
    marginTop: 3,
  },
  button3: {
    top: 0,
    left: 15,
    width: 30,
    height: 31,
    position: "absolute",
  },
  rect6: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon3: {
    top: 0,
    position: "absolute",
    color: "rgba(23,137,23,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect6Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect7: {
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
  rect6StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button9: {
    top: 29,
    width: 30,
    height: 31,
    position: "absolute",
    left: 0,
  },
  rect18: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon9: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect18Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect19: {
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
  rect18StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button3Stack: {
    width: 45,
    height: 60,
    marginLeft: 105,
    marginTop: 3,
  },
  button8: {
    width: 30,
    height: 31,
    marginLeft: 31,
    marginTop: 31,
  },
  rect20: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon10: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect20Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect21: {
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
  rect20StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button4: {
    top: 0,
    left: 15,
    width: 30,
    height: 31,
    position: "absolute",
  },
  rect8: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon4: {
    top: 0,
    position: "absolute",
    color: "rgba(23,137,23,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect8Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect9: {
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
  rect8StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button7: {
    top: 28,
    width: 30,
    height: 31,
    position: "absolute",
    left: 0,
  },
  rect22: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon11: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect22Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect23: {
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
  rect22StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button4Stack: {
    width: 45,
    height: 59,
    marginLeft: 46,
    marginTop: 2,
  },
  button5: {
    top: 0,
    left: 13,
    width: 30,
    height: 31,
    position: "absolute",
  },
  rect10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon5: {
    top: 0,
    position: "absolute",
    color: "rgba(23,137,23,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect10Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect11: {
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
  rect10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button6: {
    top: 29,
    width: 30,
    height: 31,
    position: "absolute",
    left: 0,
  },
  rect24: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  icon12: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 1,
  },
  rect24Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rect25: {
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
  rect24StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button5Stack: {
    width: 43,
    height: 60,
    marginLeft: 107,
    marginTop: 1,
  },
  button12ColumnRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 225,
    marginLeft: 75,
    marginRight: 239,
  },
});

export default MappingS;
