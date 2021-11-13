import { Text as RNText, TextProps, TextStyle } from 'react-native';

import { ColorType } from 'Constants/colors';
import { FontSizeType } from 'Constants/typography';
import { getStyles } from './Text.styles';

import { useCustomTheme } from 'Hooks/useCustomTheme';

interface ITextProps extends TextProps {
  children: string;
  color?: ColorType;
  style?: TextStyle;
  variant?: FontSizeType;
}

// TODO: use useWindowDimensions().fontScale
export const Text = ({
  children,
  color = 'text',
  style,
  variant = 'body',
  ...props
}: ITextProps) => {
  const { colors } = useCustomTheme();

  const styles = getStyles(colors[color]);

  return (
    <RNText style={[styles.base, styles[variant], style]} {...props}>
      {children}
    </RNText>
  );
};
