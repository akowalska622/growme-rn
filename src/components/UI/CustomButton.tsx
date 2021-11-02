import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { styles } from './CustomButton.styles';

export const CustomButton = ({ title, onPress, outlined, alert }) => {
  const { colors } = useTheme();

  const renderStyles = (isOutlined: any, isAlert: any) => {
    const defaultStyles = styles(colors).customBtn;
    const outlinedStyles = styles(colors).outline;
    const alertStyles = styles(colors).alert;

    if (isOutlined && !isAlert) return { ...defaultStyles, ...outlinedStyles };
    if (isAlert && !isOutlined) return { ...defaultStyles, ...alertStyles };
    if (isAlert && isOutlined)
      return { ...defaultStyles, ...alertStyles, ...outlinedStyles };
    return defaultStyles;
  };

  const renderTextStyles = (isOutlined: any, isAlert: any) => {
    const defaultStyles = styles(colors).btnText;
    const outlinedStyles = styles(colors).outlineText;
    const alertStyles = styles(colors).alertText;

    if (isOutlined && !isAlert) return { ...defaultStyles, ...outlinedStyles };
    if (isAlert && isOutlined) return { ...defaultStyles, ...alertStyles };
    return defaultStyles;
  };

  const customStyles = renderStyles(outlined, alert);
  const customTextStyles = renderTextStyles(outlined, alert);

  return (
    <TouchableOpacity onPress={onPress} style={customStyles}>
      <Text style={customTextStyles}>{title}</Text>
    </TouchableOpacity>
  );
};
