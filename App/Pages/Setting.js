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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
  getDoc,
} from "firebase/firestore";
import { firebase, auth } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/Ionicons";
import {
  // getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  updatePassword,
  sendEmailVerification,
  updateEmail,
} from "firebase/auth";

function Setting(props) {
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;

        if (currentUser) {
          // Fetch user's email from Firebase Authentication
          const userEmail = currentUser.email;
          setUserEmail(userEmail);
          console.log(userEmail);

          // Retrieve data from Firestore based on the email
          const usersCollection = collection(firebase, "users");
          const q = query(usersCollection, where("userEmail", "==", userEmail));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userData = [];
            querySnapshot.forEach((doc) => {
              userData.push({ id: doc.id, ...doc.data() });
            });
            setUserData(userData);
            console.log(userData);
          } else {
            console.log("No matching documents found for the user's email");
          }
        } else {
          console.log("No user is logged in");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [auth]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const showModal1 = () => {
    setIsModalVisible1(true);
    setButtonOpacity(0.5); // Change opacity when modal is shown
  };

  const hideModal1 = () => {
    setIsModalVisible1(false);
    setButtonOpacity(1); // Restore opacity when modal is hidden
  };

  const showModal = () => {
    setIsModalVisible(true);
    setButtonOpacity(0.5); // Change opacity when modal is shown
  };

  const hideModal = () => {
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsModalVisible(false);
    setButtonOpacity(1); // Restore opacity when modal is hidden
  };

  const updatePasswordAsync = async (password, newpassword) => {
    try {
      const user = auth.currentUser;
      // Sign in the user with their current password before updating the password
      await signInWithEmailAndPassword(auth, user.email, password);
      // Update the password
      await updatePassword(user, newpassword);

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };
  const handleUpdate = async () => {
    let alertMessage = null; // Store the alert message

    if (!password || !newpassword || !confirmpassword) {
      alertMessage = "Please fill in all the required fields.";
    } else if (newpassword !== confirmpassword) {
      alertMessage = "New passwords do not match.";
    } else if (confirmpassword.length < 6 || newpassword.length < 6) {
      alertMessage = "Password must be at least 6 characters long.";
    } else if (confirmpassword === password || newpassword === password) {
      alertMessage = "New password matches the current password.";
    } else {
      const result = await updatePasswordAsync(password, newpassword);

      if (result.success) {
        console.log(result.success);
        // Password update was successful
        alertMessage = "Password updated successfully.";
        hideModal();
      } else {
        console.log(result.success);
        // Password update failed
        alertMessage =
          "Current password does not match or unable to read in the firebase please try again.";
      }
    }
    alert(alertMessage); // Display the alert message
  };

  // const [usernewEmail, setUserNewEmail] = useState("");
  // const [Email, setEmail] = useState("");
  // const [currentpassword, setCurrentPassword] = useState("");
  // const changeEmail = async () => {
  //   try {
  //     const user = auth.currentUser;

  //     if (!user) {
  //       console.log("No user is logged in");
  //       return;
  //     }

  //     const credential = EmailAuthProvider.credential(
  //       user.email,
  //       currentpassword
  //     );
  //     await reauthenticateWithCredential(user, credential);

  //     // Update the email
  //     await updateEmail(user, usernewEmail);

  //     // Update the displayed user email in the UI
  //     setUserEmail(usernewEmail);

  //     // You might want to update the email in your Firestore here if needed

  //     // Show success message or perform necessary actions
  //     alert("Email updated successfully!");
  //     hideModal1(); // Close the modal after successful email change
  //   } catch (error) {
  //     console.error("Error updating email:", error);
  //     alert("Failed to update email. Please try again.");
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/setting.png")}
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
            ACCOUNT SETTINGS
          </Text>
        </View>
        {/* <View style={styles.line} /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/* <View style={styles.container1}>
            <Text style={styles.font}>Edit Session</Text>
          </View> */}
        </View>
        <View style={styles.header}>
          <View style={styles.remarks}>
            <Image
              source={require("../assets/images/phrase.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
            {/* <Text
              style={{
                fontSize: 22,
                fontFamily: "poppins-regular",
                marginBottom: 5,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              EquipCheck
            </Text> */}
          </View>
        </View>
        {/* <View style={styles.container2}>
          <View style={styles.column}>
            <Text style={styles.datafont}>Edit My Account </Text>
          </View>
        </View> */}

        <View style={styles.container3}>
          {/* <View style={styles.column1}>


            <Text style={styles.datafont1}> Email: {userEmail}</Text>
           
          </View> */}

          {/* <View style={styles.column1}>
            <TouchableOpacity style={styles.modalButtonY} onPress={showModal1}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Update Email</Text>
              </View>
            </TouchableOpacity>
          </View> */}

          <View style={styles.column1}>
            <TouchableOpacity style={styles.modalButtonY} onPress={showModal}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Update Password</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.column1}>
            <Text style={styles.datafont1}> Password</Text>
          </View> */}
        </View>
      </View>
      {/* Email Modal */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={hideModal1}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
           \
            <View style={styles.closeicon}>
              <TouchableOpacity onPress={hideModal1}>
                <Icon name="close-circle-outline" style={styles.close}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Change Email</Text>
            <Text style={styles.modalText1}>Current Email</Text>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Your Current Email"
                    style={styles.username}
                    value={userEmail}
                    onChangeText={(text) => setUserEmail(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <Text style={styles.modalText2}>New Email</Text>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Your New Password"
                    style={styles.username}
                    value={usernewEmail}
                    onChangeText={(text) => setUserNewEmail(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <Text style={styles.modalText2}>Current Password</Text>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Your Confirm Password"
                    secureTextEntry={true}
                    style={styles.username}
                    value={currentpassword}
                    onChangeText={(text) => setCurrentPassword(text)}
                  ></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.line}></View>
            <View style={styles.buttonContainer1}>
              <TouchableOpacity
                style={styles.modalButtonY1}
                onPress={changeEmail}
              >
                <Text style={styles.buttonTextU}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
      {/* modal for change password */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* <View style={styles.lineG}></View> */}
            <View style={styles.closeicon}>
              <TouchableOpacity onPress={hideModal}>
                <Icon name="close-circle-outline" style={styles.close}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Change Password</Text>
            <Text style={styles.modalText1}>Current Password</Text>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Your Current Password"
                    style={styles.username}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <Text style={styles.modalText2}>New Password</Text>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Your New Password"
                    secureTextEntry={true}
                    style={styles.username}
                    value={newpassword}
                    onChangeText={(text) => setNewPassword(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <Text style={styles.modalText2}>Confirm Password</Text>
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Your Confirm Password"
                    secureTextEntry={true}
                    style={styles.username}
                    value={confirmpassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                  ></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.line}></View>
            <View style={styles.buttonContainer1}>
              <TouchableOpacity
                style={styles.modalButtonY1}
                onPress={() => {
                  handleUpdate();
                  // Handle "Yes" button press here
                }}
              >
                <Text style={styles.buttonTextU}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  rect2: {
    width: wp("60%"),
    height: hp("6%"),
    marginTop: hp("0.8%"),
  },
  rec: {
    // top: hp("1.5%"),

    width: wp("30%"),
    height: hp("7%"),
    position: "absolute",
    backgroundColor: "rgba(247,251,255,1)",
    borderRadius: wp("2%"),
    borderWidth: wp("0.2%"),
    borderColor: "rgba(212,215,227,1)",
    alignSelf: "center",
    left: wp("3%"),
  },
  username: {
    // top: wp("2%"),
    left: wp("1.5%"),
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    height: hp("7%"),
    width: wp("50%"),
    fontSize: wp("1.5%"),
  },
  username_input: {
    width: wp("50%"),
    height: hp("5%"),
    marginTop: hp("4%"),
    marginLeft: wp("15%"),
    alignSelf: "center",
  },
  closeicon: {
    // top: 2,
    marginLeft: 380,
    zIndex: 5,
  },
  close: {
    // color: "#45474B",
    color: "#FF6464",
    fontSize: 40,
    top: 15,
  },
  buttonContainer1: {
    top: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalText2: {
    color: "#45474B",
    top: 30,
    fontSize: 20,
    right: 105,
    // fontWeight: "500",
    // marginBottom: 20,
    textAlign: "center",
  },
  modalText1: {
    color: "#45474B",
    top: 30,
    fontSize: 20,
    right: 90,
    // fontWeight: "500",
    // marginBottom: 20,
    textAlign: "center",
  },
  modalText: {
    color: "#454545",
    fontWeight: "500",
    fontSize: 28,
    // top: 40,
    marginBottom: 10,
  },
  modalButtonY1: {
    width: "80%",
    elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 40,
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
    height: "72%", // Adjust the height as needed
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
  icon7: {
    color: "rgba(128,214,126,1)",
    fontSize: 155,
  },
  buttonTextU: {
    color: "white",
    fontWeight: "600",
    // fontFamily: "poppins-bold",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  buttonText: {
    color: "#454545",
    // fontWeight: "900",
    // fontFamily: "poppins-bold",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // height: "100%",
    // backgroundColor: "#F5F5F5",
    // elevation: 2,
    // borderRadius: 10,
  },
  modalButtonY: {
    width: "50%",
    // elevation: 2,
    // backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#F5F5F5",
    elevation: 2,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "400",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100, // Set the desired height of the row
    paddingHorizontal: 30,
    top: 50,
  },

  remarks: {
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "red", // You can change the background color
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    height: "100%",

    top: 40,
  },
  container4: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 150, // Adjust horizontal padding as needed
    top: 240,
  },
  container3: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 150, // Adjust horizontal padding as needed
    top: 180,
  },
  column1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    height: "100%", // This makes each column take up the full height of the row
  },
  container2: {
    backgroundColor: "#F1EFEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50, // Set the desired height of the row
    paddingHorizontal: 10, // Adjust horizontal padding as needed
    top: 120,
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
  image1: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: "200%",
    // borderBottomRightRadius: 100,
    // borderBottomLeftRadius: 100,
    borderRadius: 10,
  },
  image: {
    width: "1280",
    height: 121,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  container1: {
    top: 0,
    backgroundColor: "transparent",
    padding: 30,
    // width: "30%",
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

export default Setting;
