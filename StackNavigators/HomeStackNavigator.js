import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import { useNavigation } from "@react-navigation/native";
import Header from "../Component/Header";
import PlanDetails from "../Component/PlanDetails";
import tw from "tailwind-rn";
import PaymentPage from "../Component/PaymentPage";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        // options={{
        //   headerTitle: () => <Header />,
        // }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: { backgroundColor: "#1371cf" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <Text style={{ fontSize: 24, color: "white" }}>
              Your Plan Details
            </Text>
          ),
        }}
        name="PlanDetails"
        component={PlanDetails}
      />
      <HomeStack.Screen
        options={{
          headerStyle: { backgroundColor: "#1371cf" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <Text
              style={{
                flex:0.8,
                fontSize: 24,
                color: "white",
                textAlign: "center",
                justifyContent: "space-evenly"
              }}
            >
              Payment
            </Text>
          ),
        }}
        name="PaymentPage"
        component={PaymentPage}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
