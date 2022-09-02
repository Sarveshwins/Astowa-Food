import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import OrderScreen from "../../screens/OrderScreen";
import { theme } from "../../constants/theme";
import ProfileScreen from "../../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={theme.images.cutlery}
              resizeMode={"contain"}
              style={{
                width: 25,
                height: 25,
                tintColor: focused
                  ? theme.colors.primary
                  : theme.colors.secondary,
              }}
            />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={theme.images.order}
              resizeMode={"contain"}
              style={{
                width: 25,
                height: 25,
                tintColor: focused
                  ? theme.colors.primary
                  : theme.colors.secondary,
              }}
            />
          ),
          title: "Order",
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={theme.images.user}
              resizeMode={"contain"}
              style={{
                width: 25,
                height: 25,
                tintColor: focused
                  ? theme.colors.primary
                  : theme.colors.secondary,
              }}
            />
          ),
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
