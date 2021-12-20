import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlanScreen from "../Screens/PlanScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import { useNavigation } from "@react-navigation/native";
import Header from "../Component/Header";

const PlanStack = createNativeStackNavigator();

const HomeStackNavigator = () => {

  return (
    <PlanStack.Navigator>
      <PlanStack.Screen
        // options={{
        //   headerTitle: () => <Header />,
        // }}
        name="PlanScreen"
        component={PlanScreen}
      />
      <PlanStack.Screen name="Details" component={DetailsScreen} />
    </PlanStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
