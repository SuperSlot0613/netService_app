import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Component/Header";
import SettingScreen from "../Screens/SettingScreen";

const SettingsStack = createNativeStackNavigator();

const SettingStackNavigator = () => {

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        // options={{
        //   headerTitle: () => <Header />,
        // }}
        name="SettingScreen"
        component={SettingScreen}
      />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
};

export default SettingStackNavigator;

const styles = StyleSheet.create({});
