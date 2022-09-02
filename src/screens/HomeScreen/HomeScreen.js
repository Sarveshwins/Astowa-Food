import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import DATABASE_URL from "../../constants/data/database";
// import { firebase } from "@react-native-firebase/database";
const HomeScreen = () => {
  // const restaurantsList = firebase
  //   .app()
  //   .database(DATABASE_URL)
  //   .ref("/Restaurants/");

  // const getRestaurantsList = () => {
  //   restaurantsList.on("value", (snapshot) => {
  //     snapshot.forEach((item) => {
  //       console.log("item", item);
  //     });
  //   });
  // };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={{}}>
        <Text>Hello</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
