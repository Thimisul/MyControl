import React from "react";
import { Text, Box, Input, IInputProps, Icon } from "native-base";
import Feather from 'react-native-vector-icons/Feather';

type FormPros = IInputProps & {
  label: string;
  iconName?: string;
  children?: string;
}

export const MyTextField = ({ label, iconName, ...props }: FormPros) => {
  return (
    <Box>
      <Text fontSize="xl">{label}</Text>
      <Input
        InputLeftElement={<Icon as={iconName && <Feather name={iconName} />} size={5} ml="2" color="muted.400" />}
        {...props}
      />
    </Box>
  )
}
