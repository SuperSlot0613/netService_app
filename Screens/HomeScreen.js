import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import Header from "../Component/Header";
import tw from "tailwind-rn";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
// import { FlatList } from "react-native-web";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, []);

  const Data = [
    {
      id: "1",
      text1: "Plan Name",
      text2: "MrRd_15Mbps_Pre",
    },
    {
      id: "2",
      text1: "Expiry Date",
      text2: "23-Jan-2022",
    },
    {
      id: "3",
      text1: "Account Type",
      text2: "Prepaid",
    },
    {
      id: "4",
      text1: "Price",
      text2: "₹1766.46",
    },
    {
      id: "5",
      text1: "No of Days left",
      text2: "41",
    },
    {
      id: "6",
      text1: "Data Usage",
      text2: "161.0 GB/2182.8 GB",
    },
  ];

  return (
    <View style={tw("flex-1")}>
      <View style={[tw("h-40 items-center"), { width: "100%" }]}>
        <Image
          style={[tw("h-40"), { width: "100%" }]}
          source={{
            uri: "http://socialorange.in/wp-content/uploads/2018/03/Zomato-Billboard-Marketing-Social-Brand.jpg",
          }}
        />
      </View>
      <View style={[tw("flex items-center mt-2 h-20"), { width: "100%" }]}>
        <View
          style={[
            tw("flex-1 rounded-2xl w-80"),
            { backgroundColor: "#eb6434" },
          ]}
        >
          <View
            style={[
              tw("flex-row items-center"),
              { justifyContent: "flex-start" },
            ]}
          >
            <FontAwesome5
              style={tw("m-2")}
              name="rupee-sign"
              size={22}
              color="white"
            />
            <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
              Total Amount
            </Text>
          </View>
          <View
            style={[
              tw("mt-2 flex-row justify-between"),
              { marginHorizontal: 20 },
            ]}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                color: "white",
              }}
            >
              ₹1766
            </Text>
            <TouchableOpacity
              style={[tw(""), styles.ReviewPay]}
              onPress={() => navigation.navigate("PaymentPage")}
            >
              <Text
                style={{ color: "orange", fontWeight: "bold", fontSize: 14 }}
              >
                REVIEW & PAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[tw("flex-1 items-center justify-center")]}>
        <View
          style={[
            tw(" flex-col w-80 bg-gray-200 h-80 rounded-2xl"),
            styles.shadowProp,
            styles.card,
          ]}
        >
          <View
            style={[
              tw("flex-row m-2 justify-between"),
              { alignItems: "center" },
            ]}
          >
            <Text
              style={[
                tw("text-center"),
                { alignItems: "center", fontSize: 18 },
              ]}
            >
              <AntDesign name="infocirlce" size={28} color="orange" /> Plan
              Details
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PlanDetails")}
            >
              <Text style={{ fontSize: 14, color: "orange" }}>
                view Plan Info
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  tw("flex-row items-center m-1 p-2"),
                  {
                    fontSize: 14,
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
                Key={item.id}
              >
                <Text>{item.text1} :</Text>
                <Text style={tw("text-blue-400")}>{item.text2}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  shadowProp: {
    // borderColor:'yourchoice', // if you need
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "white",
    // shadowRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
  },
  ReviewPay: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 100,
    fontSize: 20,
    height: 25,
    alignItems: "center",
  },
});
