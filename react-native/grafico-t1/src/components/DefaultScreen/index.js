import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import estiloGlobal, { colors } from "../../styles";
import estilos from "./estilos";

export default function DefaultScreen({ children }) {
  return (
    <>
      <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={colors.purple} />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={estiloGlobal.preencher}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  );
}