import { Text as RNText } from 'react-native';

import { ColorType } from 'Constants/colors';
import { FontSizeType } from 'Constants/typography';
import { getStyles } from './Text.styles';

import { useCustomTheme } from 'Hooks/useCustomTheme';

interface ITextProps {
  children: string;
  color?: ColorType;
  variant?: FontSizeType;
}

export const Text = ({
  children,
  color = 'text',
  variant = 'body',
}: ITextProps) => {
  const { colors } = useCustomTheme();

  const styles = getStyles(colors[color]);

  return <RNText style={[styles.base, styles[variant]]}>{children}</RNText>;
};
