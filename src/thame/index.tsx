import type { StyleProp, TextStyle } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export type Theme = {
  baseSize: number;
  colors: {
    background: string;
    success: string;
    error: string;
    info: string;
  };
  fonts: {
    title: StyleProp<TextStyle>;
    content: StyleProp<TextStyle>;
  };
  shadow: {
    shadowColor: string;
    elevation: number;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
  };
};
export const myTheme: Theme = {
  baseSize: 16,
  colors,
  fonts,
  shadow: {
    shadowColor: '#000000',
    elevation: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
};
