import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawStackNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="DrawerHome">
      <Drawer.Screen name="DrawerHome" component={HomeScreen} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawStackNavigator;

const styles = StyleSheet.create({});
