import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-rn";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { useNavigation } from "@react-navigation/native";
import Header from "../Component/Header";

const PlanScreen = () => {
  const navigation=useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, []);

  const Data = [
    {
      id: "1",
      amount: "₹8400",
      month: "12",
      MBPS: "@50",
    },
    {
      id: "2",
      amount: "₹5988",
      month: "12",
      MBPS: "@40",
    },
    {
      id: "3",
      amount: "₹4200",
      month: "6",
      MBPS: "@50",
    },
    {
      id: "4",
      amount: "₹2994",
      month: "6",
      MBPS: "@40",
    },
    {
      id: "5",
      amount: "₹2100",
      month: "3",
      MBPS: "@50",
    },
    // {
    //   id: "6",
    //   amount: "₹1497",
    //   month: "3",
    //   MBPS: "@40",
    // },
  ];

  const [value, setvalue] = useState();

  var radio_props = [{ label: "", value: 0 }];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={Data}
        contentContainerStyle={{
          width: "100%",
          height: 650,
          overflow: "scroll",
          alignItems: "center",
        }}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <View
            style={[
              tw("flex-row mt-8 bg-gray-200 rounded-2xl"),
              styles.card,
              styles.shadowProp,
              { height: 80, width: "90%" },
            ]}
          >
            <RadioForm
              style={[
                tw("items-center justify-center mt-10 ml-0"),
                { width: 8, height: 8 },
              ]}
              radio_props={radio_props}
              initial={0}
              buttonSize={10}
              buttonOuterSize={20}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={(value) => {
                setvalue(value);
              }}
            />
            <View style={[tw("ml-4 mt-2"), { justifyContent: "space-evenly" }]}>
              <Text style={{ fontSize: 12, color: "black" }}>PLAN</Text>
              <Text style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                {item.amount}
              </Text>
              <Text
                style={{ fontSize: 12, color: "black", fontWeight: "bold" }}
              >
                +GGST
              </Text>
            </View>
            <View
              style={[
                tw("ml-6 items-center"),
                { justifyContent: "space-evenly" },
              ]}
            >
              <Text style={{ fontSize: 12, color: "black" }}>VALIDITY</Text>
              <Text
                style={{
                  fontSize: 12,
                  margin: 1,
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                12 Month
              </Text>
            </View>
            <View
              style={[
                tw("ml-6 mt-2 items-center"),
                { justifyContent: "space-evenly" },
              ]}
            >
              <Text style={{ fontSize: 12, color: "black" }}>DATA</Text>
              <Text style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                Unlimited GB
              </Text>
              <Text
                style={{ fontSize: 12, color: "black", fontWeight: "bold" }}
              >
                @50 MBPS
              </Text>
            </View>
            <TouchableOpacity style={tw("items-center justify-center ml-4")}>
              <Text style={{ fontSize: 12, color: "blue" }}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    marginVertical: 1,
  },
  shadowProp: {
    borderColor: "black", // if you need
    borderWidth: 0.5,
    overflow: "hidden",
    shadowColor: "whitesmoke",
    shadowRadius: 10,
    shadowOffset: { width: 20, height: 10 },
    shadowOpacity: 0.8,
  },
});
