import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../contexts/auth";

const SignIn = () => {
  const { signed, signIn} = useContext(AuthContext)

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};

export default SignIn;
