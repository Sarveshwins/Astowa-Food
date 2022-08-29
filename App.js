import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./src/constants/theme";

const App = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text
        style={{
          fontFamily: theme.fonts.NotoSansJP_Bold,
        }}
      >
        App
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
