import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Component/Header";
import ProfileScreen from "../Screens/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        // options={{
        //   headerTitle: () => <Header />,
        // }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      {/* <ProfileStack.Screen name="Details" component={DetailsScreen} /> */}
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;

const styles = StyleSheet.create({});
