import { Text as RNText } from 'react-native';

import { ColorType } from 'Constants/colors';
import { FontSizeType } from 'Constants/typography';
import { getStyles } from './Text.styles';

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
  const styles = getStyles(color);

  return <RNText style={[styles.base, styles[variant]]}>{children}</RNText>;
};
