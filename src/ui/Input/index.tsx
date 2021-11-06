import { RefCallBack } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';

import { styles } from './Input.styles';

interface IInputProps {
  inputRef: RefCallBack;
  error: string | void;
  label: string;
  onBlur: () => void;
  onChange: (text: string) => void;
  value: unknown;
}

export const Input = ({
  inputRef,
  error,
  label,
  onBlur,
  onChange,
  value,
  ...props
}: IInputProps & TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const isError = !!error;

  const handleOnFocus = () => setIsFocused(true);

  const handleOnBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          isFocused || value ? styles.labelAbove : styles.placeholder,
        ]}
      >
        {label}
      </Text>
      <TextInput
        {...props}
        ref={inputRef}
        style={[styles.textInput, isError ? styles.errorInput : {}]}
        onChangeText={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
      />
      {isError && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};
