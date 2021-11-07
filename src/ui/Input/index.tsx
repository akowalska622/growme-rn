import {
  Animated,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RefCallBack } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { Text } from '../../ui/Text';
import { getLabelStyles, getStyles } from './Input.styles';

interface IInputProps {
  inputRef: RefCallBack;
  error: string | void;
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  onBlur: () => void;
  onChange: (text: string) => void;
  onIconPress?: () => void;
  value: unknown;
}

export const Input = ({
  inputRef,
  error,
  icon,
  label,
  onBlur,
  onChange,
  onIconPress,
  value,
  ...props
}: IInputProps & TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const isError = !!error;
  const labelAnimatedValue = new Animated.Value(value ? 1 : 0);
  const labelAnimation = getLabelStyles(labelAnimatedValue);
  const styles = getStyles(!isError, !!icon);

  const handleOnFocus = () => setIsFocused(true);

  const handleOnBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  useEffect(
    () =>
      Animated.timing(labelAnimatedValue, {
        duration: 200,
        toValue: isFocused || value ? 1 : 0,
        useNativeDriver: false,
      }).start(),
    [isFocused, value],
  );

  return (
    <View style={styles.inputWrapper}>
      <Animated.Text style={[styles.label, labelAnimation]} onPress={() => console.log('hello')}>
        {label}
      </Animated.Text>
      <TextInput
        {...props}
        ref={inputRef}
        style={styles.textInput}
        onChangeText={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
      />
      {icon && (
        <TouchableOpacity style={styles.iconWrapper} onPress={onIconPress}>
          <Ionicons name={icon} style={styles.icon} />
        </TouchableOpacity>
      )}
      {isError && <Text variant="subhead" color="notification">{error}</Text>}
    </View>
  );
};
