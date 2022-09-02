import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/routes/RootNavigation";
import BottomNavigation from "./src/routes/BottomNavigation";

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootNavigation /> */}
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
