import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonP,
  AuthButtonText,
  BackgroundSq,
} from "../../styles";

// import AuthStore from "../Stores/AuthStore";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("Signin", user);
    // authStore.signin(user);
    // if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/PurpleRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <AuthTitle>Please enter your username and password</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButtonP onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonP>
    </AuthContainer>
  );
};

export default SignIn;
