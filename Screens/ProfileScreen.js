import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Avatar } from "react-native-elements";
import tw from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { db } from "../firebase";
import useAuth from "../Hooks/useAuth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Header from "../Component/Header";

const ProfileScreen = () => {
  const [image, setImage] = useState("");
  const [userInfo, setuserInfo] = useState(null);

  const { user, userDetails, userImage, userImageSet } = useAuth();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    (async () => {
      const information = await (
        await getDoc(doc(db, "registerUser", userDetails.id))
      ).data();
      // console.log("profile", information);
      setuserInfo(information);
      userImageSet(information?.image);
      // console.log("image null", image);
      setImage(information?.image);
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      userImageSet(result.uri);
      setDoc(doc(db, "registerUser", userDetails.id), {
        id: userDetails.id,
        Name: userDetails.Name,
        email: userDetails.email,
        password: userDetails.password,
        mobile: userDetails.mobile,
        image: result.uri,
        timestamp: serverTimestamp(),
      });
    }
  };

  const Data = [
    {
      id: "1",
      text1: "Full Name",
      text2: `${userInfo?.Name}`,
    },
    {
      id: "2",
      text1: "Account No",
      text2: "1317962032",
    },
    {
      id: "4",
      text1: "Email Id",
      text2: `${userInfo?.email}`,
    },
    {
      id: "5",
      text1: "Mobile No",
      text2: `${userInfo?.mobile}`,
    },
    {
      id: "6",
      text1: "Address",
      text2: "Laxmi Nager Akurli Road Kandivali East Mumbai-400101",
    },
    {
      id: "7",
      text1: "Service Address",
      text2: "Mumbai Maharashtra-400101 India",
    },
  ];

  return (
    <View style={tw("flex-1 items-center justify-between")}>
      <View
        style={[
          tw("items-center justify-center flex-col bg-blue-300"),
          { width: "100%", height: "20%", margin: "auto", zIndex: 10 },
        ]}
      >
        <View
          style={[
            tw("items-center mt-20 bg-gray-400 rounded-full"),
            { zIndex: 10 },
          ]}
        >
          {image === "" ? (
            <Avatar
              rounded
              icon={{ name: "adduser", type: "antdesign" }}
              size="xlarge"
              activeOpacity={0.7}
              containerStyle={{ position: "relative", zIndex: 10 }}
              onPress={pickImage}
            />
          ) : (
            <Avatar
              rounded
              source={{
                uri: image,
              }}
              size="xlarge"
              activeOpacity={0.7}
              containerStyle={{ position: "relative", zIndex: 10 }}
              onPress={pickImage}
            />
          )}
        </View>
      </View>
      <View
        style={[
          tw("flex-1 items-center justify-center"),
          { width: "100%", height: "100%", zIndex: 5 },
        ]}
      >
        <View
          style={[
            tw(" flex-col bg-gray-100 "),
            styles.shadowProp,
            styles.card,
            { width: "100%", height: "100%" },
          ]}
        >
          <View
            style={[
              tw("flex-row m-2 mt-10 justify-between"),
              { alignItems: "center" },
            ]}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "orange" }}>
                view User Info
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  tw("flex-row items-center m-2 p-1"),
                  {
                    fontSize: 14,
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
                Key={item.id}
              >
                <Text>{item.text1} :</Text>
                {/* {item.text1 === "Email Id" || item.text1 === "Mobile No" ? (
                  <TextInput value={item.text2} style={tw("text-blue-400")} />
                ) : (
                )} */}
                <Text style={[tw("text-blue-500 "), { width: "50%" }]}>
                  {item.text2}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 14,
    marginVertical: 2,
  },
  shadowProp: {
    // borderColor:'yourchoice', // if you need
    borderWidth: 0.5,
    overflow: "hidden",
    shadowColor: "white",
    // shadowRadius: 10,
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 0.8,
  },
});
