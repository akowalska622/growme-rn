export enum EBaseColors {
  darkGrey = '#232323',
  green = '#56AF6F',
  lightGrey = '#BBBBBB',
  orange = '#E59112',
  white = '#F3F3F3',
  lightGreen = '#438d58',
}

export const colorKeys = {
  disabled: 'disabled',
  placeholder: 'placeholder',
  primary: 'primary',
  background: 'background',
  card: 'card',
  text: 'text',
  border: 'border',
  notification: 'notification',
};

export type ColorType = keyof typeof colorKeys;
