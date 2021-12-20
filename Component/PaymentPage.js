import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import tw from "tailwind-rn";
import RazorpayCheckout from "react-native-razorpay";

const PaymentPage = () => {
  const Data = [
    {
      id: "1",
      text1: "Customer Name",
      text2: "Saurabh Rajesh Yadav",
    },
    {
      id: "2",
      text1: "Account No.",
      text2: "1317962032",
    },
    {
      id: "3",
      text1: "Plan Name",
      text2: "MrRd_15Mbps_Pre",
    },
    {
      id: "4",
      text1: "Pack Validity",
      text2: "Quarterly",
    },
    {
      id: "5",
      text1: "Amount",
      text2: "₹1497",
    },
    {
      id: "6",
      text1: "Tex Amount",
      text2: "₹269.46",
    },
    {
      id: "7",
      text1: "Amount To Pay",
      text2: "₹1766",
    },
  ];

  return (
    <View style={tw("flex-1 items-center w-full")}>
      <View
        style={[
          tw(" flex-col rounded-2xl"),
          styles.shadowProp,
          styles.card,
          { width: "95%", height: "70%" },
        ]}
      >
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                tw("flex-row items-center m-2 p-2"),
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
      <View
        style={[
          tw("items-center mt-8 bg-blue-500 h-10 rounded-lg justify-center"),
          { width: "95%" },
        ]}
      >
        <TouchableHighlight
          style={[tw("flex-1 items-center justify-center"), { width: "100%" }]}
          onPress={() => {
            var options = {
              description: "Credits towards consultation",
              image: "https://i.imgur.com/3g7nmJC.png",
              currency: "INR",
              key: "rzp_test_rwb70xq1ifssez",
              amount: "5000",
              name: "foo",
              prefill: {
                email: "saurabhanddevapp@gmail.com",
                contact: "9082502271",
                name: "Razorpay Software",
              },
              theme: { color: "#F37254" },
            };
            RazorpayCheckout.open(options)
              .then((data) => {
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch((error) => {
                alert(
                  `Error: ${error.code} | ${error.description} Error is coming `
                );
              });
          }}
        >
          <Text
            style={[
              tw(""),
              { fontSize: 20, color: "white", fontWeight: "bold" },
            ]}
          >
            Pay
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    marginVertical: 6,
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
