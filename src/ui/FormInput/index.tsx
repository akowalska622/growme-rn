import { Control, useController } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';

import { styles } from './FormInput.styles';

interface IFormInputProps {
  control: Control<any, object>; // TODO: fix any type
  defaultValue?: string;
  label: string;
  name: string;
}

// TODO: replace TextInput with proper reusable UI component
export const FormInput = ({
  control,
  defaultValue = '',
  label,
  name,
  ...props
}: IFormInputProps & TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    field: { ref, onChange, onBlur, value },
    fieldState: { error },
  } = useController({ control, defaultValue, name });

  const handleOnFocus = () => setIsFocused(true);

  const handleOnBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  return (
    <View style={styles.container}>
      <Text style={isFocused ? styles.label : styles.placeholder}>{label}</Text>
      <TextInput
        {...props}
        ref={ref}
        style={[styles.textInput, error ? styles.errorInput : {}]}
        onChangeText={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
      />
      <Text style={styles.errorMessage}>{error?.message}</Text>
    </View>
  );
};
