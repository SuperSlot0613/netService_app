import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Alert, AsyncStorage, StyleSheet, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { doc, serverTimestamp, setDoc, getDoc } from "@firebase/firestore";
import { auth, app, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [userDetails, setuserDetails] = useState(null);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [savedBiometric, setsavedBiometric] = useState(false);
  const [fingerPrint, setfingerPrint] = useState(false);
  const navigation = useNavigation();
  const [userImage, setuserImage] = useState("");

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      // console.log(isBiometricSupported);
    })();
    (async () => {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
        return Alert.alert(
          "Biometric record not found",
          "Please verify your identity with your password",
          "OK",
          () => fallBackToDefaultAuth()
        );
      } else {
        setsavedBiometric(savedBiometrics);
      }
    })();
  });

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      setuser(data);
      // console.log("gettoken", data.uid);
      const information2 = await (
        await getDoc(doc(db, "registerUser", data.uid))
      ).data();
      setuserDetails(information2);
      // console.log("user details gettoken", userDetails);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const storeToken = async (user) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const registerFun = (userDetail) => {
    console.log(userDetail.email, userDetail.password);
    createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password)
      .then((user) => {
        setDoc(doc(db, "registerUser", user.user.uid), {
          id: user.user.uid,
          Name: userDetail.Name,
          email: userDetail.email,
          password: userDetail.password,
          mobile: userDetail.Mobile,
          timestamp: serverTimestamp(),
        });
        navigation.navigate("Login");
        // console.log("registerFun", user.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = async () => {
    AsyncStorage.clear();
    setfingerPrint(false);
    signOut(auth)
      .catch((error) => console.log(error))
      .finally(() => setuser(null));
  };

  const signInUser = async (loginDetail) => {
    signInWithEmailAndPassword(auth, loginDetail.email, loginDetail.password)
      .then(async (user) => {
        storeToken(user.user);
        setuser(user.user);
        const information = await (
          await getDoc(doc(db, "registerUser", user.user.uid))
        ).data();
        setuserDetails(information);
        // console.log("userInfo", userDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userImageSet = (image) => {
    setuserImage(image);
    console.log("This is auth image",userImage);
  };

  const handleBiometricAuth = async () => {
    const options = {
      promptMessage: "Authentication is required",
      cancelLabel: "Abort",
      fallbackLabel: "Use passcode",
      disableDeviceFallback: false,
    };
    const biometricAuth = await LocalAuthentication.authenticateAsync(options);
    // console.log(biometricAuth);
    setfingerPrint(biometricAuth.success);
    // console.log(fingerPrint);
  };

  const memoValue = useMemo(
    () => ({
      user,
      handleBiometricAuth,
      fingerPrint,
      registerFun,
      signInUser,
      userDetails,
      logout,
      userImage,
      userImageSet,
    }),
    [user, userDetails, fingerPrint]
  );

  return (
    <AuthContext.Provider value={memoValue}>
      {isBiometricSupported && savedBiometric && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
