import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import useAuth from "../Hooks/useAuth";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const { registerFun } = useAuth();
  const [userDetail, setuserDetail] = useState({
    email: "",
    password: "",
    Name: "",
    Mobile: "",
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="user" size={25} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          numberOfLines={1}
          value={userDetail.email}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            setuserDetail({...userDetail, email : text})
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="lock" size={25} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          value={userDetail.password}
          numberOfLines={1}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
          onChangeText={(text) => setuserDetail({...userDetail, password : text})}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <FontAwesome5 name="user" size={25} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          value={userDetail.Name}
          numberOfLines={1}
          placeholder="Enter Your Name"
          placeholderTextColor="#666"
          onChangeText={(text) => setuserDetail({...userDetail, Name : text})}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <FontAwesome name="mobile" size={25} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          value={userDetail.Mobile}
          numberOfLines={1}
          placeholder="Enter Your Mobile Number"
          placeholderTextColor="#666"
          onChangeText={(text) => setuserDetail({...userDetail, Mobile : text})}
          keyboardType={"phone-pad"}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: "#25519c" }]}
        onPress={() => registerFun(userDetail)}
      >
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, { color: "white" }]}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
          Privacy Policy
        </Text>
      </View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },
  text: {
    // fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    // fontFamily: "Lato-Regular",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    // fontFamily: "Lato-Regular",
    color: "grey",
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
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
    // fontFamily: "Lato-Regular",
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    // fontFamily: "Lato-Regular",
  },
});
