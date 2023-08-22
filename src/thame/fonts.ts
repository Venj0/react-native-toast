import type { StyleProp, TextStyle } from 'react-native';

export const fonts: {
  title: StyleProp<TextStyle>;
  content: StyleProp<TextStyle>;
} = {
  title: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '600',
    letterSpacing: 0,
  },

  content: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0,
  },
};
