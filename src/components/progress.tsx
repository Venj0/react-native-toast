import type { FC } from 'react';
import React, { memo, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import type { NotificationTypes, voidFnE } from '../types';
import type { Styles } from './style';

interface ProgressProps {
  onClose: voidFnE;
  type: NotificationTypes;
  pressed?: boolean;
  styles: Styles;
  kippingTime: number;
}

export const Progress: FC<ProgressProps> = memo(
  ({ type, kippingTime, styles, pressed, onClose }) => {
    const value = useRef<number>(0);
    const animation = new Animated.Value(value.current);

    const animatedWidth = ((initStart: number) =>
      animation.interpolate({
        inputRange: [initStart, 1],
        outputRange: [initStart * 90 + 'deg', '90deg'],
      }))(value.current);

    if (!pressed) {
      animation.addListener((current) => {
        value.current = current.value;
        if (current.value === 1) onClose();
      });
    }

    const animatedTiming = Animated.timing(animation, {
      toValue: 1,
      duration: kippingTime - kippingTime * value.current,
      useNativeDriver: true,
    });

    useEffect(() => {
      animatedTiming[!pressed ? 'start' : 'stop']();
      return () => animatedTiming.stop();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pressed, animation]);

    return (
      <Animated.View
        style={styles.progress(
          pressed ? value.current * 90 + 'deg' : animatedWidth
        )}
      >
        <View style={styles.progressLine(type)} />
      </Animated.View>
    );
  },
  (PP, NP) => PP.pressed === NP.pressed
);
