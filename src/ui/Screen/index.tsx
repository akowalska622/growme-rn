import { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './Screen.styles';

interface IScreenProps {
  children: ReactNode;
}

export const Screen = ({ children }: IScreenProps) => <View style={styles.screen}>{children}</View>;
