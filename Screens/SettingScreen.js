import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Component/Header";

const SettingScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, []);

  return (
    <View>
      <Text>This Setting Screen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
