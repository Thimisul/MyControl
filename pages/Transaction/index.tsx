
import { Center, Checkbox, HStack, VStack, Text } from "native-base";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MyButton } from "../../components/myButton";
import { MyTextField, MyTextFieldAutoComplete } from "../../components/myTextField";

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
    register('isMine')
    register('valueItem')
  }, [register])

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Center h={"100%"} bg={"light.700"}>

      <MyTextFieldAutoComplete w={280} type="Tipo" label={"Tipo"} />
      <HStack space={2} alignItems="center">
        <MyTextFieldAutoComplete w={170} type="Para" label={"Para"} />
        <Checkbox value={"isMine"} p={2} mt={6} onChange={isMine => setValue('isMine', isMine)}>
          <Text m={2}>Para é seu</Text>
        </Checkbox>
      </HStack>
      <MyTextFieldAutoComplete w={280} type="De" label={"De"} />
      <MyTextFieldAutoComplete w={280} type="Item" label={"Item"} />
      <HStack space={10} alignItems="center">
        <MyTextFieldAutoComplete w={120} type="Medida" label={"Medida"} />
        <MyTextField w={120} label={"Quantidade"} onChangeText={valueItem => setValue('valueItem', valueItem)}></MyTextField>
      </HStack>
      <MyButton mt={10} size="12" w={280} onPress={handleSubmit(onSubmit)}>Adicionar</MyButton>


    </Center>


  )
}