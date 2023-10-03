import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useRoute } from "@react-navigation/native";
function Sidemenu(props) {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.redD1Stack}>
        <Image
          source={require("../assets/images/REDB.png")}
          resizeMode="contain"
          style={styles.redD1}
        ></Image>
        <View style={styles.rect7}>
          <View style={styles.rect8}>
            <View style={styles.profile1}>
              <Image
                source={require("../assets/images/user-profile1.png")}
                resizeMode="contain"
                style={styles.staffimg1}
              ></Image>
              <Text style={styles.staff1}>Staff</Text>
            </View>
          </View>
          <Text style={styles.equipcheck}>EQUIPCHECK</Text>
          <View style={styles.rect9}></View>
          <TouchableOpacity
            style={styles.mappingbtn1}
            onPress={() => {
              props.navigation.navigate("Mapping");
            }}
          >
            <View style={styles.mappingicn1Row}>
              <FeatherIcon
                name="map-pin"
                style={styles.mappingicn1}
              ></FeatherIcon>
              <Text style={styles.mappingtxt1}>Mapping</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewbtn1}>
            <View style={styles.viewicn1Row}>
              <FeatherIcon name="search" style={styles.viewicn1}></FeatherIcon>
              <Text style={styles.viewtxt1}>View</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.updatebtn1}>
            <View style={styles.updateicn1Row}>
              <FeatherIcon
                name="refresh-cw"
                style={styles.updateicn1}
              ></FeatherIcon>
              <Text style={styles.updatetxt1}>Update</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historybtn1}>
            <View style={styles.historyicn1Row}>
              <FeatherIcon
                name="clock"
                style={styles.historyicn1}
              ></FeatherIcon>
              <Text style={styles.historytxt1}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingbtn1}>
            <View style={styles.settingicn1Row}>
              <FeatherIcon
                name="settings"
                style={styles.settingicn1}
              ></FeatherIcon>
              <Text style={styles.settingtxt1}>Setting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutbtn1}>
            <FeatherIcon name="log-out" style={styles.logouticn1}></FeatherIcon>
            <View style={styles.logouticn1Filler}>
              <Text style={styles.logout2}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redD1: {
    top: 342,
    left: 0,
    width: 794,
    height: 542,
    position: "absolute",
  },
  rect7: {
    left: 312,
    width: 262,
    height: 717,
    position: "absolute",
    backgroundColor: "rgba(249,249,249,1)",
    borderRadius: 14,
    top: 0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
  },
  rect8: {
    width: 203,
    height: 150,
    backgroundColor: "rgba(255,89,79,1)",
    borderBottomRightRadius: 63,
    borderBottomLeftRadius: 63,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 11,
    },
    elevation: 6,
    shadowOpacity: 0.13,
    shadowRadius: 2,
    marginLeft: 30,
  },
  profile1: {
    width: 91,
    height: 69,
    marginTop: 27,
    marginLeft: 56,
  },
  staffimg1: {
    width: 91,
    height: 91,
    marginTop: -17,
  },
  staff1: {
    fontFamily: "roboto-regular",
    color: "rgba(18,18,18,1)",
    fontSize: 20,
    marginTop: 7,
    marginLeft: 24,
  },
  equipcheck: {
    fontFamily: "poppins-700",
    color: "rgba(255,89,79,1)",
    fontSize: 26,
    marginTop: 26,
    marginLeft: 48,
  },
  rect9: {
    width: 203,
    height: 2,
    backgroundColor: "rgba(194,187,187,1)",
    marginTop: 16,
    marginLeft: 29,
  },
  mappingbtn1: {
    width: 165,
    height: 43,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 41,
  },
  mappingicn1: {
    color: "rgba(18,18,18,1)",
    fontSize: 25,
    marginTop: 5,
  },
  mappingtxt1: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 15,
  },
  mappingicn1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginLeft: 8,
    marginTop: 6,
  },
  viewbtn1: {
    width: 164,
    height: 38,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 41,
  },
  viewicn1: {
    color: "rgba(18,18,18,1)",
    fontSize: 25,
    marginTop: 5,
  },
  viewtxt1: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 16,
  },
  viewicn1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 69,
    marginLeft: 7,
  },
  updatebtn1: {
    width: 164,
    height: 43,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 43,
  },
  updateicn1: {
    color: "rgba(18,18,18,1)",
    fontSize: 25,
    marginTop: 5,
  },
  updatetxt1: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 15,
  },
  updateicn1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 43,
    marginLeft: 7,
    marginTop: 3,
  },
  historybtn1: {
    width: 164,
    height: 36,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 44,
  },
  historyicn1: {
    color: "rgba(18,18,18,1)",
    fontSize: 25,
    marginTop: 3,
  },
  historytxt1: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 16,
  },
  historyicn1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 49,
    marginLeft: 6,
    marginTop: 3,
  },
  settingbtn1: {
    width: 164,
    height: 43,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 44,
  },
  settingicn1: {
    color: "rgba(18,18,18,1)",
    fontSize: 25,
    marginTop: 5,
  },
  settingtxt1: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 14,
  },
  settingicn1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 49,
    marginLeft: 6,
    marginTop: 3,
  },
  logoutbtn1: {
    width: 148,
    height: 37,
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 48,
  },
  logouticn1: {
    color: "rgba(255,68,68,1)",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 4,
  },
  logout2: {
    fontFamily: "poppins-regular",
    color: "rgba(255,68,68,1)",
    fontSize: 20,
    marginTop: 1,
  },
  logouticn1Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  redD1Stack: {
    width: 794,
    height: 884,
    marginTop: 46,
    marginLeft: -281,
  },
});

export default Sidemenu;
