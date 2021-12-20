import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import HomeStackNavigator from "./StackNavigators/HomeStackNavigator";
import ProfileStackNavigator from "./StackNavigators/ProfileStackNavigator";
import SettingStackNavigator from "./StackNavigators/SettingStackNavigator";
import PlanStackNavigator from "./StackNavigators/PlanStackNavigator";
import useAuth from "./Hooks/useAuth";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import FingerScreen from "./Screens/FingerScreen";

const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  const { user, fingerPrint } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Feather name="home" size={24} color={color} />;
          } else if (route.name === "Settings") {
            return <Feather name="settings" size={24} color={color} />;
          } else if (route.name === "Plan") {
            return <MaterialIcons name="local-offer" size={24} color={color} />;
          } else if (route.name === "Profile") {
            return <AntDesign name="user" size={24} color={color} />;
          } else if (route.name === "Login") {
            return <SimpleLineIcons name="login" size={24} color={color} />;
          } else if (route.name === "SignUP") {
            return <FontAwesome name="sign-in" size={24} color={color} />;
          } else {
            return <Ionicons name="ios-finger-print" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "crimson",
        tabBarInactiveTintColor: "black",
      })}
    >
      {user ? (
        <>
          {fingerPrint ? (
            <Tab.Group>
              <Tab.Screen
                name="Home"
                options={{
                  headerShown: false,
                }}
                component={HomeStackNavigator}
              />
              <Tab.Screen
                options={{
                  headerShown: false,
                }}
                name="Profile"
                component={ProfileStackNavigator}
              />
              <Tab.Screen
                options={{
                  headerShown: false,
                }}
                name="Plan"
                component={PlanStackNavigator}
              />
              <Tab.Screen
                options={{
                  headerShown: false,
                }}
                name="Settings"
                component={SettingStackNavigator}
              />
            </Tab.Group>
          ) : (
            <Tab.Screen
              options={{
                headerShown: true,
                headerTitle: () => (
                  <Text
                    style={{
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontSize: 24,
                      marginLeft: "45%",
                      textAlign: "center",
                    }}
                  >
                    Secure
                  </Text>
                ),
              }}
              name="FingerScreen"
              component={FingerScreen}
            />
          )}
        </>
      ) : (
        <Tab.Group>
          <Tab.Screen
            options={{
              headerShown: true,
              headerTitle: () => (
                <Text
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontSize: 24,
                    marginLeft: "47%",
                    textAlign: "center",
                  }}
                >
                  Login
                </Text>
              ),
            }}
            name="Login"
            component={LoginScreen}
          />
          <Tab.Screen
            options={{
              headerShown: true,
              headerTitle: () => (
                <Text
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontSize: 24,
                    marginLeft: "45%",
                    textAlign: "center",
                  }}
                >
                  SignUP
                </Text>
              ),
            }}
            name="SignUP"
            component={SignUpScreen}
          />
        </Tab.Group>
      )}
    </Tab.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
