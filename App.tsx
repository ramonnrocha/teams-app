import React from "react";
import { ThemeProvider } from "styled-components";
import { useFonts } from 'expo-font';
import {
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoad) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoad && <Routes />}
    </ThemeProvider>
  );
}
