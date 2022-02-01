import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();

import { colors } from "./styles";
import Dashboard from "./screens/Dashboard";

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.purple,
          tabBarInactiveTintColor: colors.light,
          tabBarActiveBackgroundColor: colors.purple,
          tabBarInactiveBackgroundColor: colors.orange,
          tabBarLabelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 15,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: colors.orange,
          },
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
