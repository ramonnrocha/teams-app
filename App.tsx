import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Groups from "./src/screens/Groups";
import theme from "./src/theme";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";
import { NewGroup } from "./src/screens/NewGroup";
import { Players } from "./src/screens/Players";

export default function App() {
  const [fontsLoad] = useFonts([Roboto_400Regular, Roboto_700Bold]);

  if (!fontsLoad) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoad && <Players />}
    </ThemeProvider>
  );
}
