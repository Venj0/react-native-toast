import { Dimensions } from 'react-native';

const baseSize = 16;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const sizes = {
  tabBarHeight: 4 * baseSize,
  tabBarIcon: 2 * baseSize,
  tabBarActiveIcon: 2.5 * baseSize,
  headerHeight: 5.5 * baseSize,
  borderRadius: 0.5 * baseSize,
  borderRadiusBig: baseSize,
  pointW: 0.75 * baseSize,
  padding: baseSize,
  paddingSmall: 0.5 * baseSize,
  inputHeight: 2.5 * baseSize,
  width,
  height,
  baseSize,
};
