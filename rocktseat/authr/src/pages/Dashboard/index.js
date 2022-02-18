import React, { useContext } from "react";
import { Button, View } from "react-native";
import AuthContext from "../../contexts/auth";


const Dashboard = () => {
  const { signOut} = useContext(AuthContext)

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
