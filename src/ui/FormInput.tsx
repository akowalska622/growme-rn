import { Control, useController } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import { Input } from './Input';

interface IFormInputProps {
  control: Control<any, object>; // TODO: fix any type
  defaultValue?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onIconPress?: () => void;
  label: string;
  name: string;
}

export const FormInput = ({
  control,
  defaultValue = '',
  label,
  name,
  ...props
}: IFormInputProps & TextInputProps) => {
  const {
    field: { ref, onBlur, onChange, value },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <Input
      {...props}
      inputRef={ref}
      defaultValue={defaultValue}
      error={error?.message}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};
