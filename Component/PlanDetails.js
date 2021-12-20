import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from "react-native-cool-speedometer";
import tw from "tailwind-rn";

const PlanDetails = () => {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value >= Math.floor((Math.random() * 200) + 30)) {
        return clearInterval(interval);
      }
      setvalue(value + 4);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });

  const Data = [
    {
      id: "1",
      text1: "Plan Name",
      text2: "MrRd_15Mbps_Pre",
    },
    {
      id: "2",
      text1: "Start Date",
      text2: "15-oct-2021",
    },
    {
      id: "3",
      text1: "Expiry Date",
      text2: "23-Jan-2022",
    },
    {
      id: "4",
      text1: "Quota",
      text2: "2171GB",
    },
    {
      id: "5",
      text1: "Price",
      text2: "₹1766.46",
    },
    {
      id: "6",
      text1: "Pack Validity",
      text2: "Quarterly",
    },
    {
      id: "7",
      text1: "Download/Upload speed",
      text2: `${value} Mbps/10 Mbps`,
    },
  ];

  return (
    <View style={[tw("flex-1 items-center"), { backgroundColor: "white" }]}>
      <View style={[tw("flex-row items-center justify-center mt-1")]}>
        <View
          style={[
            tw(" flex-col items-center justify-center h-60 rounded-2xl"),
            styles.shadowProp,
            styles.card,
            { width: "95%" },
          ]}
        >
          <View style={[tw("mt-40")]}>
            <Speedometer
              value={value}
              max={200}
              angle={170}
              fontFamily="squada-one"
              width={300}
            >
              <Background angle={180} />
              <Arc />
              <Needle />
              <Progress />
              <Marks fontSize={14} />
              <Indicator>
                {(value, textProps) => (
                  <Text
                    {...textProps}
                    fontSize={60}
                    fill="#555"
                    x={200}
                    y={500}
                    textAnchor="middle"
                    fontFamily="squada-one"
                    alignmentBaseline="middle"
                  >
                    {value}MBPS
                  </Text>
                )}
              </Indicator>
            </Speedometer>
          </View>
        </View>
      </View>
      <View style={[tw("flex-1 items-center")]}>
        <View
          style={[
            tw(" flex-1 items-center justify-center h-40 rounded-2xl"),
            styles.shadowProp,
            styles.card,
            { width: "100%" },
          ]}
        >
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  tw("flex-row items-center m-1 p-1"),
                  {
                    fontSize: 14,
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
                Key={item.id}
              >
                <Text style={{ width: "50%" }}>{item.text1} :</Text>
                <Text style={tw("text-blue-400")}>{item.text2}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default PlanDetails;

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
