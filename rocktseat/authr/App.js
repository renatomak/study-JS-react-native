import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import Home from "./src/Home";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
