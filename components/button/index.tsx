import React from 'react';
import { Icon, Button, IButtonProps, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

interface MyButtonProps extends IButtonProps {
  iconName?: string;
  children?: string;
}

export const MyButton = ({ children, iconName, ...rest }: MyButtonProps) => {
  return (
    <Button {...rest} leftIcon={iconName ? <Icon as={<Feather name={iconName} />} size={5} ml="2" /> : undefined}>
      <Text>{children}</Text>
    </Button >
  );
};


