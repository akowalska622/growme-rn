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

  const style = styles();
  const isError = !!error;

  const handleOnFocus = () => setIsFocused(true);

  const handleOnBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  return (
    <View style={style.container}>
      <Text
        style={[
          style.label,
          isFocused || value ? style.labelOnFocus : style.placeholder,
        ]}
      >
        {label}
      </Text>
      <TextInput
        {...props}
        ref={inputRef}
        style={[
          style.textInput,
          isError ? style.invalidInput : style.validInput,
        ]}
        onChangeText={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
      />
      {isError && <Text style={style.errorMessage}>{error}</Text>}
    </View>
  );
};
