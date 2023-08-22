import type {
  StyleProp,
  TextStyle,
  ViewStyle,
  AnimatableStringValue,
} from 'react-native';

import type { NotificationTypes, PosType } from '../types';
import type { Theme } from '../thame';

export type Styles = {
  container: StyleProp<ViewStyle>;
  card: (args: PosType) => StyleProp<ViewStyle>;
  cardClose: StyleProp<ViewStyle>;
  cardTitle: (type: NotificationTypes) => StyleProp<TextStyle>;
  cardBody: StyleProp<TextStyle>;
  progress: (rotateY: AnimatableStringValue) => StyleProp<ViewStyle>;
  progressLine: (type: NotificationTypes) => StyleProp<ViewStyle>;
};

export const getStyles = (myTheme: Theme): Styles => ({
  container: {
    position: 'absolute',
    width: '100%',
    top: 2 * myTheme.baseSize,
    left: '5%',
    zIndex: 1000,
    gap: myTheme.baseSize,
    maxHeight: 300,
  },
  card: (args) => ({
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
    borderRadius: myTheme.baseSize,
    backgroundColor: myTheme.colors.background,
    padding: myTheme.baseSize / 2,
    position: 'absolute',
    right: args.posX + 2 * myTheme.baseSize,
    minHeight: 72,
    ...myTheme.shadow,
  }),

  cardClose: {
    width: 1.5 * myTheme.baseSize,
    height: 1.5 * myTheme.baseSize,
    position: 'absolute',
    right: 0.5 * myTheme.baseSize,
    top: 0.5 * myTheme.baseSize,
  },
  cardTitle: (type) => ({
    width: '100%',
    textAlign: 'left',
    color: myTheme.colors[type],
    ...(myTheme.fonts.title as TextStyle),
  }),
  cardBody: {
    width: '100%',
    textAlign: 'left',

    ...(myTheme.fonts.content as TextStyle),
  },
  progress: (rotateY) => ({
    width: '100%',
    height: myTheme.baseSize / 4,
    overflow: 'hidden',
    position: 'absolute',
    top: 3,
    left: 0,
    transform: [{ rotateY }],
  }),
  progressLine: (type) => ({
    backgroundColor: myTheme.colors[type],
    height: myTheme.baseSize,
    width: '100%',
  }),
});
