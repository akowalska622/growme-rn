import { Control, useController } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

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
  const {
    field: { ref, onChange, onBlur, value },
    fieldState: { error },
  } = useController({ control, defaultValue, name });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        ref={ref}
        style={[styles.textInput, error ? styles.errorInput : {}]}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
      <Text style={styles.errorMessage}>{error?.message}</Text>
    </View>
  );
};
