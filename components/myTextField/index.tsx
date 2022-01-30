import React, { useEffect, useState } from "react";
import { Text, Box, Input, IInputProps, Icon, Button } from "native-base";
import Feather from 'react-native-vector-icons/Feather';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { useForm } from "react-hook-form";

type MyTextFieldProps = IInputProps & {
  label: string;
  iconName?: string;
  children?: string;
}

const MyTextField = ({ label, iconName, ...props }: MyTextFieldProps) => {
  return (
    <Box>
      <Text fontSize="xl">{label}</Text>
      <Input
        InputLeftElement={iconName ? <Icon as={iconName && <Feather name={iconName} />} size={5} ml="2" color="muted.400" /> : <Text />}
        {...props}
      />
    </Box>
  )
}

type MyTextFieldAutoCompleteProps = {
  label: string;
  iconName?: string;
  children?: string;
  type: string;
  w: number
}

const MyTextFieldAutoComplete = ({ type, label, w, ...props }: MyTextFieldAutoCompleteProps) => {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('id')
    register('title')
  }, [register])

  const onSubmit = (data: any) => {
    if (selectedItem === null) {
      setSelectedItem(data);
    }
    console.log(selectedItem);
    console.log("Seu tipo é --- " + type)

  }
  return (
    <Box w={w} >
      <Text fontSize="xl">{label}</Text>
      < AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        textInputProps={{
          autoCorrect: false,
          autoCapitalize: "sentences",
        }}
        onSelectItem={setSelectedItem}
        onBlur={handleSubmit(onSubmit)}
        dataSet={
          [
            { id: '1', title: 'Alpha' },
            { id: '2', title: 'Beta' },
            { id: '3', title: 'Gamma' },
          ]}
        onChangeText={text => { setValue("id", "0"); setValue('title', text) }}
        onSubmit={handleSubmit(onSubmit)}
        ChevronIconComponent={<Text />}
      />
    </Box>
  )
}

export { MyTextField, MyTextFieldAutoComplete };

