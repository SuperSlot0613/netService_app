import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import useAuth from "../Hooks/useAuth";
import { Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Dimensions } from "react-native";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  const { user, handleBiometricAuth, signInUser } = useAuth();
  const [loginDetail, setloginDetail] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo2.png")} style={styles.logo} />
      <Text style={styles.text}>SbroadBand</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="user" size={25} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          numberOfLines={1}
          value={loginDetail.email}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            setloginDetail({ ...loginDetail, email: text })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="lock" size={25} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          value={loginDetail.password}
          numberOfLines={1}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
          onChangeText={(text) =>
            setloginDetail({ ...loginDetail, password: text })
          }
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: "#25519c" }]}
        onPress={() => signInUser(loginDetail)}
      >
        {/* <View style={styles.iconWrapper}>
          <FontAwesome name="" style={styles.icon} size={22} color="white" />
        </View> */}
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, { color: "white" }]}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },
  logo: {
    height: 130,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 30,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    padding: 10,
    flexDirection: "row",
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "Lato-Regular",
  },
});
