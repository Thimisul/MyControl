import { LinearGradient } from "expo-linear-gradient";
import { Box, Text, NativeBaseProvider, extendTheme, Center, Button, Input, Alert } from "native-base";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MyTextField } from "./components/myTextField";
import LoginPage from "./pages/Login";
import TransactionPage from "./pages/Transaction";

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });


export default function App() {

  return (
    <NativeBaseProvider theme={theme}>
      <LoginPage></LoginPage>
      {/* <TransactionPage></TransactionPage> */}
    </NativeBaseProvider >

  )
}