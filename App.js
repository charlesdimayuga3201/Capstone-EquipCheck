import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./App/Pages/Login";
import MappingPage from "./App/Pages/Mapping";
import ViewFe from "./App/Pages/ViewFe";
import SidemenuPage from "./App/Custom/Sidemenu";
import DrawermenuPage from "./App/Custom/Drawermenu";
import AppNavigator from "./App/Custom/AppNavigator";
import DrawerNavigation from "./App/Custom/DrawerNavigation";
import Bottomtabs from "./App/Custom/Bottomtabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dropdown } from "react-native-element-dropdown";
import { useFonts } from "expo-font";
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Welcome to Equipcheck</Text>
//       <StatusBar style="auto" /> */}
//       <LoginPage />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "poppins-regular": require("./App/assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./App/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!isLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Sidemenu"
          component={SidemenuPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawermenu"
          component={DrawermenuPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottomtabs"
          component={Bottomtabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mapping"
          component={MappingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewFe"
          component={ViewFe}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
