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

import { Text } from 'UI/Text';
import { getLabelStyles, getStyles } from './Input.styles';
import { useCustomTheme } from 'Hooks/useCustomTheme';

interface IInputProps {
  refCallback: RefCallBack;
  error: string | void;
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  onBlur: () => void;
  onChange: (text: string) => void;
  onIconPress?: () => void;
  value: unknown;
}

export const Input = ({
  refCallback,
  error,
  icon,
  label,
  onBlur,
  onChange,
  onIconPress,
  value,
  ...props
}: IInputProps & TextInputProps) => {
  let inputRef: TextInput | null;

  const [isFocused, setIsFocused] = useState(false);

  const { colors } = useCustomTheme();

  const isError = !!error;
  const labelAnimatedValue = new Animated.Value(value ? 1 : 0);
  const labelAnimation = getLabelStyles(labelAnimatedValue);
  const styles = getStyles(colors, !isError, !!icon);

  const handleOnFocus = () => setIsFocused(true);

  const handleOnBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  const handleLabelOnPress = () => inputRef?.focus();

  useEffect(
    () =>
      Animated.timing(labelAnimatedValue, {
        duration: 200,
        toValue: isFocused || value ? 1 : 0,
        useNativeDriver: false,
      }).start(),
    // TODO: check whether labelAnimatedValue can be in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFocused, value],
  );

  return (
    <View style={styles.inputWrapper}>
      <Animated.Text
        onPress={handleLabelOnPress}
        style={[styles.label, labelAnimation]}
      >
        {label}
      </Animated.Text>
      <TextInput
        {...props}
        ref={(ref) => {
          inputRef = ref;
          refCallback(ref);
        }}
        onBlur={handleOnBlur}
        onChangeText={onChange}
        onFocus={handleOnFocus}
        style={styles.textInput}
        value={value}
      />
      {icon && (
        <TouchableOpacity onPress={onIconPress} style={styles.iconWrapper}>
          <Ionicons name={icon} style={styles.icon} />
        </TouchableOpacity>
      )}
      {isError && (
        <Text color="notification" variant="subhead">
          {error}
        </Text>
      )}
    </View>
  );
};
