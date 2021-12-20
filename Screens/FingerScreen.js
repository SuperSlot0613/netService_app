import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import useAuth from "../Hooks/useAuth";

const FingerScreen = () => {
  const { handleBiometricAuth } = useAuth();

  return (
    <View style={tw("items-center justify-between mt-40")}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Scan Your FingerPrint
      </Text>
      <TouchableOpacity
        style={tw("mt-10")}
        onPress={() => handleBiometricAuth()}
      >
        <Ionicons name="ios-finger-print-sharp" size={84} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default FingerScreen;

const styles = StyleSheet.create({});
