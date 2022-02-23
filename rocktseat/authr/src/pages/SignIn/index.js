import React, { useContext, useState } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../contexts/auth";
import loginService from "../../services/loginService";

const SignIn = () => {
  const { signed, signIn} = useContext(AuthContext)
  const [user, setUser] = useState('renato.silva');
  const [password, setPassword] = useState('#R3n@t0@01')

  const entrar = () => {

    let data = {
      user: user,
      password: password
    }
    
    loginService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Usuário não existe")
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};

export default SignIn;
