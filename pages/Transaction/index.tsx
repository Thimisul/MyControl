
import { Center } from "native-base";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MyTextField } from "../../components/myTextField";

// const config = {
//   dependencies: {
//     'linear-gradient': LinearGradient
//   },
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// export const theme = extendTheme({ config });

export default function TransactionPage() {

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = (data: any) => {
    console.log('Email: ' + data.email + "\n Password: " + data.password)
  }

  return (
    <Center h={"100%"} bg={"light.700"}>
      <MyTextField w={"40"} label="Nome" iconName={"lock"}></MyTextField>

    </Center>


  )
}