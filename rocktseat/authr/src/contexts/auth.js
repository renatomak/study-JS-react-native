
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import * as auth from '../services/auth'

const AuthContext = createContext({ signed: true });

const userInitialState = {
  user: '',
  password: ''
}

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState(userInitialState);
  const [loading, setLoading] = useState(true);
  
  const signIn = async() => {
    const response = await auth.signIn();
    setUser(response.user);
    setSigned(true)
    console.log(signed)
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

  useEffect(() => {
    async function loadStoragedData(){
     const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
     const storageToken = await AsyncStorage.getItem('@RNAuth:token')
     console.log(storageToken, storagedUser)
     
     if (storagedUser && storageToken) {
       setLoading(false)
       setSigned(true)
      setUser(storagedUser)
      setToken(storageToken)
     }
    }
    loadStoragedData()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    )
  }

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setSigned(false)
    })
  }
  
  const context = {
    signed, setSigned,
    setToken,
    user, setUser,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
