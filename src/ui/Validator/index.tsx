import { Control, Controller } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './Validator.styles';

interface IValidatorProps {
  control: Control<any, object>; // TODO: fix any type
  defaultValue?: string;
  isError?: boolean;
  name: string;
  rules: any; // TODO: fix any type
}

// TODO: replace TextInput with proper reusable UI component
export const Validator = ({
  control,
  defaultValue = '',
  isError,
  name,
  rules,
  ...props
}: IValidatorProps & TextInputProps) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          {...props}
          style={[styles.textInput, isError && styles.error]}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
    />
  );
};
