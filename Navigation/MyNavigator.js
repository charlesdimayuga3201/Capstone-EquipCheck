import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "../app/Pages/Login";
import MappingFePage from "../app/Pages/MappingFe";
import ViewFePage from "../app/Pages/ViewFe";
import SidemenuPage from "../app/Custom/Sidemenu";
import DrawermenuPage from "../app/Custom/Drawermenu";
import AppNavigatorPage from "../app/Custom/AppNavigator";
import DrawerNavigationPage from "../app/Custom/DrawerNavigation";
import AdminDrawermenuPage from "../app/Custom/AdminDrawermenu";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dropdown } from "react-native-element-dropdown";
import { useFonts } from "expo-font";
import FE_CICS_1stPage from "../app/Pages/FE_Mapping/FE_CICS_1st";

export default function MyNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Drawermenu"
        component={DrawermenuPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminDrawermenu"
        component={AdminDrawermenuPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AppNavigator"
        component={AppNavigatorPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MappingFe"
        component={MappingFePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewFe"
        component={ViewFePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FE_CICS_1st"
        component={FE_CICS_1stPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
