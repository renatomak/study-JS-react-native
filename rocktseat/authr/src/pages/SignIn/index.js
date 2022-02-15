import React from "react";
import { Button, Text, View } from "react-native";
import { signIn } from "../../services/auth";

const SignIn = () => {
  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
