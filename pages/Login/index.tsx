//import { LinearGradient } from "expo-linear-gradient";

import { Box, Image, Center } from "native-base";
import { Alert } from "react-native"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MyTextField } from "../../components/myTextField";
import { MyButton } from "../../components/button/index";
import LogoImg from "../../assets/Logos.png"

export default function LoginPage() {

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = (data: any) => {
    console.log('Email: ' + data.email + "\n Password: " + data.password)
  }

  return (

    <Center flex={1} bg="dark.200" alignItems="center" justifyContent="center">

      <Image size={150} marginBottom={10} resizeMode={"contain"} borderRadius={4}
        source={LogoImg} alt="Alternate Text" />

      <Box width={200}>
        <MyTextField
          isFullWidth
          label={"Email"}
          iconName={"user"}
          placeholder={'Digite seu email'}
          onChangeText={text => setValue('email', text)}
        />
        <MyTextField
          isFullWidth
          label={"Password"}
          iconName={"lock"}
          placeholder={'Digite o password'}
          type={"password"}
          onChangeText={text => setValue('password', text)}
        />
        <MyButton
          colorScheme={"emerald"}
          marginTop={10}
          p={4}
          iconName={"arrow-right"}
          onPress={handleSubmit(onSubmit)}>
          Continuar
        </MyButton>
      </Box>
    </Center>
  )
}