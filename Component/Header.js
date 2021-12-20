import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-rn";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../Hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Header = () => {
  const navigation = useNavigation();

  const { logout, userDetails, userImage } = useAuth();
  const [image, setimage] = useState("");
  useEffect(async () => {
    const information = await (
      await getDoc(doc(db, "registerUser", userDetails.id))
    ).data();
    setimage(information?.image);
  }, []);

  return (
    <View style={tw("flex-row flex-1 items-center justify-between mr-5")}>
      <View
        style={tw("flex flex-row items-center")}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <TouchableOpacity style={tw("p-2")}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw("flex flex-row items-center")}>
        <TouchableOpacity style={[tw("w-40 items-center"), { height: 60 }]}>
          <Image
            style={[tw("w-20 items-center"), { height: 60 }]}
            source={require("../assets/logo2.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={tw("rounded-full items-center bg-red-200 w-10 h-10 mr-2")}
          onPress={() => logout()}
        >
          <Image
            style={[tw("rounded-full w-10"), { height: 40 }]}
            source={{ uri: image }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
