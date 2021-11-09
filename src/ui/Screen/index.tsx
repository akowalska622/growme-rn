import { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './Screen.styles';

interface IScreenProps {
  children: ReactNode;
  style?: object;
}

export const Screen = ({ children, style }: IScreenProps) => (
  <View style={[styles.screen, style]}>{children}</View>
);
