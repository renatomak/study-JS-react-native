import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: cores.roxo,
        tabBarInactiveTintColor: cores.claro,
        tabBarActiveBackgroundColor: cores.roxo,
        tabBarInactiveBackgroundColor: cores.laranja,
        tabBarLabelStyle: {
          width: "100%",
          flex: 1,
          fontWeight: "bold",
          fontSize: 16,
          lineHeight: 15,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: cores.laranja
        },
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ]
      }}>
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}